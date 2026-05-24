import { useState } from "react";

import {
  Container,
  Card,
  Header,
  UploadBox,
  Loading,
  Results,
  ResultCard,
  Categories,
  CategoryTag,
  ProcessedImage,
  Summary,
  TotalCard,
  CountsGrid,
  CountCard,
  Table,
  TableRow,
  ProgressBar,
  ProgressFill,
  SectionTitle,
} from "./style";

import { api } from "../../services/api";

import {
  FiUploadCloud,
  FiImage,
  FiBarChart2,
} from "react-icons/fi";

interface Detection {
  class: string;
  confidence: number;
}

interface Counts {
  [key: string]: number;
}

const categories = [
  "papel",
  "plástico",
  "vidro",
  "metal",
  "papelão",
  "orgânico",
];

const categoryColors: Record<string, string> = {
  papel: "#eab308",
  plástico: "#22c55e",
  vidro: "#8b5cf6",
  metal: "#3b82f6",
  papelão: "#f97316",
  orgânico: "#ef4444",
};

export function UploadArea() {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  const [detections, setDetections] = useState<Detection[]>(([]));

  const [processedImage, setProcessedImage] = useState("");

  const [counts, setCounts] = useState<Counts>({});

  const [total, setTotal] = useState(0);

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setPreview(URL.createObjectURL(file));

    setLoading(true);

    setDetections([]);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const response = await api.post("/predict", formData);

      setDetections(response.data.detections || []);

      setProcessedImage(
        `http://localhost:8000/outputs/${response.data.image}`
      );

      setCounts(response.data.counts || {});

      setTotal(response.data.total || 0);
    } catch (error) {
      console.error(error);

      alert("Erro ao analisar imagem.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <Header>
          <h1>
            ♻️ IA para Identificação de Materiais Recicláveis
          </h1>

          <p>
            Faça upload de uma imagem e a Inteligência Artificial
            identificará automaticamente materiais recicláveis
            utilizando visão computacional com YOLOv8.
          </p>
        </Header>

        <UploadBox>
          <input
            type="file"
            accept="image/*"
            onChange={handleUpload}
          />

          {preview ? (
            <img src={preview} alt="preview" />
          ) : (
            <>
              <FiUploadCloud size={70} />

              <h2>Clique para enviar uma imagem</h2>

              <span>
                ou arraste e solte aqui
              </span>

              <small>
                JPG, PNG e WEBP
              </small>
            </>
          )}
        </UploadBox>

        <Categories>
          {categories.map((category) => (
            <CategoryTag
              key={category}
              color={categoryColors[category]}
            >
              {category}
            </CategoryTag>
          ))}
        </Categories>

        {loading && (
          <Loading>
            Analisando imagem com YOLO...
          </Loading>
        )}

        {processedImage && (
          <>
            <SectionTitle>
              <FiImage />
              Imagem analisada
            </SectionTitle>

            <ProcessedImage
              src={processedImage}
              alt="processed"
            />
          </>
        )}

        {total > 0 && (
          <>
            <SectionTitle>
              <FiBarChart2 />
              Resultados da análise
            </SectionTitle>

            <Summary>
              <TotalCard>
                <h2>Itens detectados</h2>

                <strong>{total}</strong>
              </TotalCard>

              <CountsGrid>
                {Object.entries(counts).map(
                  ([key, value]) => (
                    <CountCard key={key}>
                      <h3>{key}</h3>

                      <strong>
                        {String(value)}
                      </strong>
                    </CountCard>
                  )
                )}
              </CountsGrid>
            </Summary>

            <Table>
              <table>
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Quantidade</th>
                    <th>Porcentagem</th>
                    <th>Confiança média</th>
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(counts).map(
                    ([key, value]) => {
                      const percentage =
                        ((value / total) * 100).toFixed(1);

                      const relatedDetections =
                        detections.filter(
                          (d) => d.class === key
                        );

                      const avgConfidence =
                        relatedDetections.reduce(
                          (acc, item) =>
                            acc + item.confidence,
                          0
                        ) /
                        relatedDetections.length;

                      return (
                        <TableRow key={key}>
                          <td>
                            <div className="material">
                              <span
                                className="dot"
                                style={{
                                  background:
                                    categoryColors[key],
                                }}
                              />

                              {key}
                            </div>
                          </td>

                          <td>{value}</td>

                          <td>
                            <div className="progress-wrapper">
                              <span>
                                {percentage}%
                              </span>

                              <ProgressBar>
                                <ProgressFill
                                  width={percentage}
                                />
                              </ProgressBar>
                            </div>
                          </td>

                          <td>
                            {avgConfidence
                              ? `${(
                                avgConfidence * 100
                              ).toFixed(1)}%`
                              : "0%"}
                          </td>
                        </TableRow>
                      );
                    }
                  )}
                </tbody>
              </table>
            </Table>
          </>
        )}

        {detections.length > 0 && (
          <Results>
            {detections.map((item, index) => (
              <ResultCard key={index}>
                <h3>{item.class}</h3>

                <strong>
                  {(item.confidence * 100).toFixed(1)}%
                </strong>

                <p>
                  Material identificado pela IA.
                </p>
              </ResultCard>
            ))}
          </Results>
        )}
      </Card>

      <footer
        style={{
          marginTop: "50px",
          borderTop: "1px solid #e5e7eb",
          paddingTop: "30px",
        }}
      >
        <h2
          style={{
            marginBottom: "18px",
            color: "#173120",
          }}
        >
          🚀 Tecnologias utilizadas
        </h2>

        <p
          style={{
            color: "#5f7165",
            lineHeight: 1.8,
            marginBottom: "20px",
          }}
        >
          Este projeto foi desenvolvido utilizando
          React + TypeScript no frontend,
          Styled-Components para estilização,
          Python no backend,
          FastAPI para a API REST,
          YOLOv8 para detecção de objetos,
          OpenCV para processamento de imagens,
          Ultralytics YOLO,
          Axios para requisições HTTP
          e um dataset treinado através do
          Roboflow Universe.
        </p>

        <a
          href="https://universe.roboflow.com/group-project-vv9xk/waste-classificator-3"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#22c55e",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          🔗 Dataset utilizado (Roboflow)
        </a>
      </footer>
    </Container>
  );
}