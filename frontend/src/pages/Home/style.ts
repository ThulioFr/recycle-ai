import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  background: #f4f6f4;
  color: #1f2933;
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 24px 14px;
  }
`;

export const Container = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 44px 0 32px;
  border-bottom: 1px solid #dfe5df;

  @media (max-width: 768px) {
    padding: 28px 0 24px;
  }
`;

export const ProjectLabel = styled.span`
  display: inline-block;
  margin-bottom: 18px;
  color: #2f6b45;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  color: #15261b;
  font-size: clamp(42px, 7vw, 72px);
  line-height: 1;
  letter-spacing: -0.05em;
  font-weight: 750;
`;

export const Subtitle = styled.p`
  max-width: 760px;
  margin-top: 20px;
  color: #35433a;
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.35;
  font-weight: 500;
`;

export const Description = styled.p`
  max-width: 760px;
  margin-top: 18px;
  color: #5d685f;
  font-size: 17px;
  line-height: 1.7;
`;

export const FlowSection = styled.section`
  padding: 32px 0;
  border-bottom: 1px solid #dfe5df;
`;

export const FlowHeader = styled.div`
  margin-bottom: 18px;

  h2 {
    color: #15261b;
    font-size: 24px;
    margin-bottom: 6px;
  }

  p {
    color: #68746b;
    font-size: 15px;
  }
`;

export const FlowGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

export const FlowItem = styled.article`
  background: #ffffff;
  border: 1px solid #dfe5df;
  border-radius: 12px;
  padding: 22px;

  span {
    display: block;
    color: #2f6b45;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 18px;
  }

  strong {
    display: block;
    color: #1d2b22;
    font-size: 18px;
    margin-bottom: 8px;
  }

  p {
    color: #67736a;
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const MaterialsSection = styled.section`
  padding: 32px 0;
  border-bottom: 1px solid #dfe5df;
`;

export const MaterialsHeader = styled.div`
  margin-bottom: 18px;

  h2 {
    color: #15261b;
    font-size: 24px;
    margin-bottom: 6px;
  }

  p {
    max-width: 720px;
    color: #68746b;
    font-size: 15px;
    line-height: 1.6;
  }
`;

export const MaterialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const MaterialItem = styled.article<{ color: string }>`
  display: flex;
  gap: 14px;
  align-items: flex-start;
  background: ${({ color }) => color}1A;
  border: 1px solid #dfe5df;
  border-radius: 12px;
  padding: 18px;

  > span {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    border-radius: 6px;
    margin-top: 6px;
    background: ${({ color }) => color};
    justify-content: center;
    display: flex;
    align-items: center;
  }

  strong {
    display: block;
    color: #1d2b22;
    font-size: 16px;
    margin-bottom: 6px;
  }

  p {
    color: #67736a;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const MainContent = styled.section`
  padding: 32px 0;
`;

export const Footer = styled.footer`
  padding: 24px 0 12px;
  color: #6b756e;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  gap: 18px;
  border-top: 1px solid #dfe5df;

  strong {
    color: #1d2b22;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;