import { UploadArea } from "../../components/UploadArea";

import { GiSodaCan, GiWineBottle } from "react-icons/gi";
import { MdDevicesOther, MdRecycling } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaBottleWater } from "react-icons/fa6";

import {
  Page,
  Container,
  Header,
  ProjectLabel,
  Title,
  Subtitle,
  Description,
  FlowSection,
  FlowHeader,
  FlowGrid,
  FlowItem,
  MaterialsSection,
  MaterialsHeader,
  MaterialsGrid,
  MaterialItem,
  MainContent,
  Footer,
} from "./style";
import type { JSX } from "react";

const recyclableMaterials = [
  {
    name: "Papel",
    description: "Folhas, jornais, revistas e outros resíduos de papel.",
    color: "#1846ac",
  },
  {
    name: "Eletrônico",
    description: "Pequenos dispositivos, cabos, componentes e resíduos eletrônicos.",
    color: "#ff8400",
  },
  {
    name: "Plástico",
    description: "Garrafas, potes, sacolas e embalagens plásticas.",
    color: "#ad1818",
  },
  {
    name: "Vidro",
    description: "Garrafas, potes e objetos de vidro reciclável.",
    color: "#1d9123",
  },
  {
    name: "Metal",
    description: "Latas, alumínio e outros resíduos metálicos.",
    color: "#facc15",
  },
  {
    name: "Orgânico",
    description: "Restos de alimentos e resíduos biodegradáveis.",
    color: "#72380f",
  },
];

const recyclableIcons: Record<string, JSX.Element> = {
  Papel: <IoIosPaper color={"#ffffff"} />,
  Eletrônico: <MdDevicesOther color={"#ffffff"} />,
  Plástico: <FaBottleWater color={"#ffffff"} />,
  Vidro: <GiWineBottle color={"#ffffff"} />,
  Metal: <GiSodaCan color={"#ffffff"} />,
  Orgânico: <MdRecycling color={"#ffffff"} />,
};

export function Home() {
  return (
    <Page>
      <Container>
        <Header>
          <ProjectLabel>Projeto acadêmico</ProjectLabel>

          <Title>Recycle AI</Title>

          <Subtitle>
            Identificação de materiais recicláveis por meio de Inteligência
            Artificial.
          </Subtitle>

          <Description>
            O sistema analisa imagens enviadas pelo usuário e utiliza um modelo
            de visão computacional para reconhecer materiais recicláveis,
            apresentar quantidades detectadas e indicar o percentual de
            confiança da análise.
          </Description>
        </Header>

        <FlowSection>
          <FlowHeader>
            <h2>Fluxo de funcionamento</h2>
            <p>Processo simples para análise automatizada da imagem.</p>
          </FlowHeader>

          <FlowGrid>
            <FlowItem>
              <span>01</span>
              <strong>Upload da imagem</strong>
              <p>O usuário seleciona ou arrasta uma imagem para análise.</p>
            </FlowItem>

            <FlowItem>
              <span>02</span>
              <strong>Processamento pela IA</strong>
              <p>O modelo YOLOv8 identifica os materiais presentes.</p>
            </FlowItem>

            <FlowItem>
              <span>03</span>
              <strong>Resultado técnico</strong>
              <p>O sistema exibe materiais, quantidades e confiança.</p>
            </FlowItem>
          </FlowGrid>
        </FlowSection>

        <MaterialsSection>
          <MaterialsHeader>
            <h2>Materiais analisados</h2>
            <p>
              O modelo foi treinado para reconhecer os principais tipos de
              resíduos recicláveis e orgânicos.
            </p>
          </MaterialsHeader>

          <MaterialsGrid>
            {recyclableMaterials.map((material) => (
              <MaterialItem key={material.name} color={material.color}>
                <span>
                  {recyclableIcons[material.name] || <MdRecycling color={"#ffffff"} />}
                </span>
                <div>
                  <strong>{material.name}</strong>
                  <p>{material.description}</p>
                </div>
              </MaterialItem>
            ))}
          </MaterialsGrid>
        </MaterialsSection>

        <MainContent>
          <UploadArea />
        </MainContent>

        <Footer>
          <strong>Recycle AI</strong>
          <span>
            Desenvolvido com React, TypeScript, Styled Components, FastAPI,
            OpenCV e YOLOv8.
          </span>
        </Footer>
      </Container>
    </Page>
  );
}