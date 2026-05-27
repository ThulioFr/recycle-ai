import { UploadArea } from "../../components/UploadArea";

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
  MainContent,
  Footer,
} from "./style";

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