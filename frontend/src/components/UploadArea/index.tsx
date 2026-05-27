import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "../../services/api";
import { imageBank } from "../../data/imageBank";
import { MdRecycling } from "react-icons/md";

import {
  Wrapper,
  BankSection,
  BankHeader,
  BankActions,
  CarouselLayout,
  FeaturedImage,
  ImageFallback,
  ThumbnailTrack,
  ThumbnailButton,
  UploadSection,
  UploadHeader,
  UploadBox,
  UploadPlaceholder,
  PreviewImage,
  UploadActions,
  Button,
  FileInfo,
  Message,
  ResultsSection,
  ImagePanel,
  ProcessedImage,
  EmptyPanel,
  LoadingPanel,
  Summary,
  SummaryCard,
  TableWrapper,
  DetectionGrid,
  DetectionCard,
  CarouselControls,
} from "./style";

interface Detection {
  class: string;
  confidence: number;
}

interface Counts {
  [key: string]: number;
}

const materialNames: Record<string, string> = {
  glass: "Vidro",
  cardboard: "Papelão",
  plastic: "Plástico",
  metal: "Metal",
  paper: "Papel",
  trash: "Lixo",
  organic: "Orgânico",
};

export function UploadArea() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [preview, setPreview] = useState("");
  const [processedImage, setProcessedImage] = useState("");
  const [detections, setDetections] = useState<Detection[]>([]);
  const [counts, setCounts] = useState<Counts>({});
  const [total, setTotal] = useState(0);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const thumbnailRef = useRef<HTMLDivElement | null>(null);

  const selectedImage = imageBank[selectedIndex];

  const averageConfidence = useMemo(() => {
    if (!detections.length) return 0;

    return (
      detections.reduce((acc, item) => acc + item.confidence, 0) /
      detections.length
    );
  }, [detections]);

  useEffect(() => {
    const element = thumbnailRef.current;

    if (!element) return;

    function handleWheel(event: WheelEvent) {
      const isDesktop = window.innerWidth > 768;

      if (!isDesktop) return;

      if (Math.abs(event.deltaY) > 0) {
        event.preventDefault();

        element?.scrollBy({
          left: event.deltaY,
          behavior: "smooth",
        });
      }
    }

    element.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      element.removeEventListener("wheel", handleWheel);
    };
  }, []);

  function handleImageError(src: string) {
    setFailedImages((current) => ({
      ...current,
      [src]: true,
    }));
  }

  function clearResults() {
    setProcessedImage("");
    setDetections([]);
    setCounts({});
    setTotal(0);
    setMessage("");
  }

  function reset() {
    setPreview("");
    setFileName("");
    clearResults();

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function analyzeFile(file: File, previewUrl?: string) {
    setPreview(previewUrl || URL.createObjectURL(file));
    setFileName(file.name);
    setLoading(true);
    clearResults();

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await api.post("/predict", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setDetections(response.data.detections || []);
      setCounts(response.data.counts || {});
      setTotal(response.data.total || 0);
      setProcessedImage(response.data.image || "");

      if (!response.data.total) {
        setMessage("Nenhum material reciclável foi identificado na imagem.");
      }
    } catch (error) {
      console.error(error);
      setMessage(
        "Não foi possível processar a imagem. Verifique se a API está ativa ou selecione outra imagem."
      );
    } finally {
      setLoading(false);
    }
  }

  async function analyzeBankImage(index: number) {
    const image = imageBank[index];

    setSelectedIndex(index);

    const response = await fetch(image.src);
    const blob = await response.blob();

    const file = new File([blob], `${image.slug}.jpg`, {
      type: blob.type || "image/jpeg",
    });

    await analyzeFile(file, image.src);
  }

  function selectPreviousImage() {
    const previousIndex =
      selectedIndex === 0 ? imageBank.length - 1 : selectedIndex - 1;

    setSelectedIndex(previousIndex);
  }

  function selectNextImage() {
    const nextIndex = (selectedIndex + 1) % imageBank.length;

    setSelectedIndex(nextIndex);
  }

  function analyzeRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageBank.length);

    analyzeBankImage(randomIndex);
  }

  function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Selecione um arquivo de imagem válido.");
      return;
    }

    analyzeFile(file);
  }

  function handleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage("Selecione um arquivo de imagem válido.");
      return;
    }

    analyzeFile(file);
  }

  return (
    <Wrapper>
      <BankSection>
        <BankHeader>
          <div>
            <h2>Banco de Imagens</h2>
            <p>
              Selecione uma imagem previamente cadastrada para demonstração do
              modelo de visão computacional.
            </p>
          </div>

          <BankActions>
            <Button
              type="button"
              onClick={() => analyzeBankImage(selectedIndex)}
              disabled={loading}
            >
              Analisar selecionada
            </Button>
          </BankActions>
        </BankHeader>

        <CarouselLayout>
          <Button
            type="button"
            variant="secondary"
            onClick={analyzeRandomImage}
            disabled={loading}
          >
            Imagem aleatória
          </Button>

          <FeaturedImage>
            {failedImages[selectedImage.src] ? (
              <ImageFallback>
                <strong>
                  <MdRecycling />
                </strong>

                <span>Não foi possível carregar a imagem.</span>
              </ImageFallback>
            ) : (
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                onError={() => handleImageError(selectedImage.src)}
              />
            )}

            <div>
              <span>Imagem selecionada</span>
              <strong>{selectedImage.title}</strong>
              <p>{selectedImage.description}</p>
            </div>
          </FeaturedImage>

          <CarouselControls>
            <Button
              type="button"
              variant="secondary"
              onClick={selectPreviousImage}
            >
              Anterior
            </Button>

            <Button
              type="button"
              variant="secondary"
              onClick={selectNextImage}
            >
              Próxima
            </Button>
          </CarouselControls>
        </CarouselLayout>

        <ThumbnailTrack ref={thumbnailRef}>
          {imageBank.map((image, index) => (
            <ThumbnailButton
              key={image.id}
              type="button"
              selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}
            >
              {failedImages[image.src] ? (
                <ImageFallback size="small">
                  <strong><MdRecycling /></strong>
                </ImageFallback>
              ) : (
                <img
                  src={image.src}
                  alt={image.title}
                  onError={() => handleImageError(image.src)}
                />
              )}

              <span>{image.title}</span>
            </ThumbnailButton>
          ))}
        </ThumbnailTrack>
      </BankSection>

      <UploadSection>
        <UploadHeader>
          <h2>Upload manual</h2>
          <p>Também é possível enviar uma imagem própria para teste.</p>
        </UploadHeader>

        <UploadBox
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />

          {preview ? (
            <PreviewImage src={preview} alt="Imagem selecionada" />
          ) : (
            <UploadPlaceholder>
              <strong>Selecionar imagem</strong>
              <span>Arraste o arquivo aqui ou clique para enviar</span>
              <small>JPG, PNG ou WEBP</small>
            </UploadPlaceholder>
          )}
        </UploadBox>

        {fileName && <FileInfo>Imagem selecionada: {fileName}</FileInfo>}
        {message && <Message>{message}</Message>}

        <UploadActions>
          <Button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={loading}
          >
            Escolher arquivo
          </Button>

          {preview && (
            <Button
              type="button"
              variant="secondary"
              onClick={reset}
              disabled={loading}
            >
              Limpar análise
            </Button>
          )}
        </UploadActions>
      </UploadSection>

      <ResultsSection>
        <ImagePanel>
          <h2>Resultado da análise</h2>

          {loading && (
            <LoadingPanel>
              <span />
              <strong>Processando imagem</strong>
              <p>Aguarde enquanto o modelo executa a detecção.</p>
            </LoadingPanel>
          )}

          {!loading && processedImage && (
            <ProcessedImage src={processedImage} alt="Imagem analisada pela IA" />
          )}

          {!loading && !processedImage && (
            <EmptyPanel>
              <strong>Nenhuma análise executada</strong>
              <p>Selecione uma imagem do banco ou envie uma imagem própria.</p>
            </EmptyPanel>
          )}
        </ImagePanel>

        <Summary>
          <SummaryCard>
            <span>Total de objetos</span>
            <strong>{total}</strong>
          </SummaryCard>

          <SummaryCard>
            <span>Confiança média</span>
            <strong>{averageConfidence.toFixed(1)}%</strong>
          </SummaryCard>
        </Summary>

        {total > 0 && (
          <>
            <TableWrapper>
              <table>
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Quantidade</th>
                    <th>Confiança média</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(counts).map(([material, quantity]) => {
                    const related = detections.filter(
                      (item) => item.class === material
                    );

                    const confidence =
                      related.reduce((acc, item) => acc + item.confidence, 0) /
                      related.length;

                    return (
                      <tr key={material}>
                        <td>{materialNames[material] ?? material}</td>
                        <td>{quantity}</td>
                        <td>{confidence.toFixed(1)}%</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </TableWrapper>

            <DetectionGrid>
              {detections.map((item, index) => (
                <DetectionCard key={`${item.class}-${index}`}>
                  <span>{materialNames[item.class] ?? item.class}</span>
                  <strong>{item.confidence.toFixed(1)}%</strong>
                  <small>Confiança da detecção</small>
                </DetectionCard>
              ))}
            </DetectionGrid>
          </>
        )}
      </ResultsSection>
    </Wrapper>
  );
}