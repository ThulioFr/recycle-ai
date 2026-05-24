import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 40px 20px;
  background: #f5f7f5;
`;

export const Card = styled.div`
  max-width: 1200px;
  margin: auto;
  background: white;
  border-radius: 28px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.08);

  @media (max-width: 768px) {
  padding: 24px;
  border-radius: 22px;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 40px;
    color: #10261b;
    margin-bottom: 16px;
  }

  p {
    font-size: 18px;
    color: #5f7165;
  }

  @media (max-width: 768px) {
  padding: 28px 20px;

  h1 {
    font-size: 34px;
    line-height: 1.2;
  }

  p {
    font-size: 15px;
  }
}
`;

export const UploadBox = styled.label`
  width: 100%;
  min-height: 280px;
  border: 2px dashed #78b87a;
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;
  gap: 18px;
  background: #fafdfa;

  &:hover {
    background: #f1faf1;
  }

  input {
    display: none;
  }

  svg {
    color: #4c9b58;
  }

  h2 {
    font-size: 32px;
    color: #173120;
  }

  span {
    color: #68806f;
    font-size: 18px;
  }

  small {
    color: #9caea2;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
  min-height: 220px;
  padding: 20px;

  h2 {
    font-size: 24px;
    text-align: center;
  }

  span {
    text-align: center;
    font-size: 15px;
  }
  }
`;

export const Categories = styled.div`
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const CategoryTag = styled.div<{ color: string }>`
  padding: 10px 18px;
  border-radius: 999px;
  background: ${({ color }) => `${color}20`};
  color: ${({ color }) => color};
  font-weight: 600;
  text-transform: capitalize;
`;

export const Loading = styled.div`
  text-align: center;
  margin-top: 32px;
  font-size: 18px;
  color: #2f7d3b;
`;

export const SectionTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #16311f;
`;

export const ProcessedImage = styled.img`
  width: 100%;
  border-radius: 24px;
  border: 1px solid #dbe5dc;
`;

export const Summary = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
  flex-direction: column;
  }
`;

export const TotalCard = styled.div`
  flex: 1;
  min-width: 240px;
  background: #f0faf1;
  border: 1px solid #d7ecd8;
  border-radius: 22px;
  padding: 24px;

  h2 {
    font-size: 18px;
    color: #64806b;
    margin-bottom: 12px;
  }

  strong {
    font-size: 56px;
    color: #2f7d3b;
  }

  @media (max-width: 768px) {
  width: 100%;

  strong {
    font-size: 42px;
  }
  }
`;

export const CountsGrid = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
  gap: 18px;
`;

export const CountCard = styled.div`
  background: #fafafa;
  border: 1px solid #e8ece8;
  border-radius: 18px;
  padding: 20px;

  h3 {
    text-transform: capitalize;
    color: #5c7362;
    margin-bottom: 12px;
  }

  strong {
    font-size: 34px;
    color: #16311f;
  }
`;

export const Table = styled.div`
  width: 100%;
  margin-top: 32px;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 700px;
  }

  th {
    text-align: left;
    padding: 18px;
    background: #f5f7f5;
    color: #506357;
    font-size: 14px;
  }

  td {
    padding: 18px;
    border-bottom: 1px solid #edf1ed;
  }
`;

export const TableRow = styled.tr`
  .material {
    display: flex;
    align-items: center;
    gap: 10px;
    text-transform: capitalize;
  }

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
  }

  .progress-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;
  }
`;

export const ProgressBar = styled.div`
  width: 140px;
  height: 10px;
  background: #edf1ed;
  border-radius: 999px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ width: string }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background: #7cc084;
`;

export const Results = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(240px,1fr));
  gap: 18px;
`;

export const ResultCard = styled.div`
  background: #fafafa;
  border: 1px solid #ececec;
  border-radius: 18px;
  padding: 22px;

  h3 {
    text-transform: capitalize;
    margin-bottom: 12px;
    color: #1b3524;
  }

  strong {
    font-size: 28px;
    color: #2f7d3b;
  }

  p {
    margin-top: 12px;
    color: #6d8173;
  }
`;