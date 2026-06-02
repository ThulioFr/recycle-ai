import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  width: 100%;
  min-width: 0;
`;

export const BankSection = styled.section`
  width: 100%;
  min-width: 0;
  background: #ffffff;
  border: 1px solid #dfe5df;
  border-radius: 14px;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    border-radius: 12px;
  }
`;

export const BankHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 22px;
  min-width: 0;

  h2 {
    color: #18281f;
    font-size: 22px;
    margin-bottom: 6px;
  }

  p {
    max-width: 620px;
    color: #66736b;
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const BankActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  flex-shrink: 0;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const CarouselLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
  width: 100%;
  min-width: 0;
`;

export const CarouselControls = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  width: 100%;

  button {
    width: 100%;
  }

  @media (max-width: 560px) {
    gap: 8px;
  }
`;

export const FeaturedImage = styled.div`
  width: 100%;
  min-width: 0;
  display: grid;
  grid-template-columns: 1fr;
  border: 1px solid #dfe5df;
  border-radius: 12px;
  background: #fbfcfb;
  overflow: hidden;

  img {
    width: 100%;
    height: 320px;
    object-fit: contain;
    background: #f1f3f1;
    border-bottom: 1px solid #dfe5df;
  }

  div {
    min-width: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    color: #66736b;
    font-size: 13px;
    margin-bottom: 10px;
  }

  strong {
    color: #18281f;
    font-size: clamp(22px, 3vw, 28px);
    margin-bottom: 10px;
    word-break: break-word;
  }

  p {
    color: #66736b;
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    img {
      height: 280px;
    }
  }

  @media (max-width: 720px) {
    img {
      height: 230px;
    }

    div {
      padding: 18px;
    }
  }

  @media (max-width: 420px) {
    img {
      height: 200px;
    }

    div {
      padding: 14px;
    }
  }
`;

export const ImageFallback = styled.div<{ size?: "small" }>`
  width: 100%;
  height: 320px;
  background: #2f6b45;
  color: #ffffff;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 10px;
  text-align: center;
  padding: 18px;
  border-bottom: 1px solid #dfe5df;

  strong {
    color: #ffffff;
    font-size: 48px;
    line-height: 1;
    margin: 0;
  }

  span {
    color: #ffffff;
    font-size: 15px;
    font-weight: 700;
    line-height: 1.4;
    margin: 0;
  }

  ${({ size }) =>
    size === "small" &&
    css`
      height: 78px;
      padding: 8px;
      border-bottom: 1px solid #dfe5df;

      strong {
        font-size: 28px;
      }

      span {
        display: none;
      }
    `}

  @media (max-width: 900px) {
    height: 280px;

    ${({ size }) =>
      size === "small" &&
      css`
        height: 78px;
      `}
  }

  @media (max-width: 720px) {
    height: 230px;

    ${({ size }) =>
      size === "small" &&
      css`
        height: 78px;
      `}
  }

  @media (max-width: 480px) {
    ${({ size }) =>
      size === "small" &&
      css`
        height: 68px;
      `}
  }

  @media (max-width: 420px) {
    height: 200px;

    ${({ size }) =>
      size === "small" &&
      css`
        height: 68px;
      `}
  }
`;

export const ThumbnailTrack = styled.div`
  width: 100%;
  min-width: 0;
  margin-top: 14px;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  scroll-snap-type: x proximity;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c7d2c9;
    border-radius: 999px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  @media (max-width: 768px) {
    scroll-behavior: auto;
  }
`;

export const ThumbnailButton = styled.button<{ selected: boolean }>`
  flex: 0 0 132px;
  width: 132px;
  border: 1px solid #dfe5df;
  border-radius: 10px;
  background: #ffffff;
  overflow: hidden;
  text-align: left;
  transition: border-color 0.2s ease, background 0.2s ease;
  scroll-snap-align: start;

  &:hover {
    border-color: #9caf9f;
    background: #f6f8f6;
  }

  ${({ selected }) =>
    selected &&
    css`
      border-color: #2f6b45;
      background: #f2f7f3;
    `}

  img {
    width: 100%;
    height: 78px;
    object-fit: contain;
    background: #f1f3f1;
    border-bottom: 1px solid #dfe5df;
  }

  span {
    display: block;
    padding: 9px;
    color: #1d2b22;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    flex-basis: 112px;
    width: 112px;

    img {
      height: 68px;
    }
  }
`;

export const UploadSection = styled.section`
  width: 100%;
  min-width: 0;
  background: #ffffff;
  border: 1px solid #dfe5df;
  border-radius: 14px;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    border-radius: 12px;
  }
`;

export const UploadHeader = styled.div`
  margin-bottom: 18px;

  h2 {
    color: #18281f;
    font-size: 22px;
    margin-bottom: 6px;
  }

  p {
    color: #66736b;
    font-size: 15px;
    line-height: 1.6;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
    }
  }
`;

export const UploadBox = styled.label<{ $dragging?: boolean }>`
  width: 100%;
  min-width: 0;
  min-height: 320px;
  border: 2px dashed
    ${({ $dragging }) => ($dragging ? "#2f6b45" : "#a8b8aa")};
  border-radius: 12px;
  background: ${({ $dragging }) => ($dragging ? "#eef7f0" : "#f8faf8")};
  display: grid;
  place-items: center;
  overflow: hidden;
  cursor: pointer;
  transform: ${({ $dragging }) => ($dragging ? "scale(1.01)" : "scale(1)")};
  transition: border-color 0.2s ease, background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #2f6b45;
    background: #f4f8f4;
  }

  input {
    display: none;
  }

  @media (max-width: 768px) {
    min-height: 260px;
  }

  @media (max-width: 480px) {
    min-height: 220px;
  }
`;

export const UploadPlaceholder = styled.div`
  text-align: center;
  padding: 24px;
  pointer-events: none;

  strong {
    display: block;
    color: #1d2b22;
    font-size: 18px;
    margin-bottom: 8px;
  }

  span {
    display: block;
    color: #66736b;
    font-size: 15px;
    margin-bottom: 6px;
  }

  small {
    color: #8a958d;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 18px;

    strong {
      font-size: 16px;
    }

    span {
      font-size: 14px;
    }
  }
`;

export const PreviewImage = styled.img`
  width: 100%;
  max-height: 430px;
  object-fit: contain;
  background: #f8faf8;
  pointer-events: none;

  @media (max-width: 480px) {
    max-height: 280px;
  }
`;

export const UploadActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

export const Button = styled.button<{ variant?: "secondary" }>`
  min-height: 42px;
  padding: 0 16px;
  border-radius: 8px;
  background: #2f6b45;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  transition: background 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    background: #285a3b;
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 560px) {
    width: 100%;
  }

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: #ffffff;
      color: #2f6b45;
      border: 1px solid #b7c5b9;

      &:hover:not(:disabled) {
        background: #f4f8f4;
      }
    `}
`;

export const FileInfo = styled.p`
  margin-top: 12px;
  color: #526158;
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
`;

export const Message = styled.p`
  margin-top: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #f7f2e8;
  border: 1px solid #eadfca;
  color: #6d5931;
  font-size: 14px;
  line-height: 1.5;
`;

export const ResultsSection = styled.section`
  width: 100%;
  min-width: 0;
  background: #ffffff;
  border: 1px solid #dfe5df;
  border-radius: 14px;
  padding: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 14px;
    border-radius: 12px;
  }
`;

export const ImagePanel = styled.div`
  min-width: 0;

  h2 {
    color: #18281f;
    font-size: 22px;
    margin-bottom: 14px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
    }
  }
`;

export const ProcessedImage = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: contain;
  border: 1px solid #dfe5df;
  border-radius: 12px;
  background: #f8faf8;

  @media (max-width: 480px) {
    max-height: 300px;
  }
`;

export const EmptyPanel = styled.div`
  min-height: 280px;
  border: 1px solid #dfe5df;
  border-radius: 12px;
  background: #f8faf8;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 24px;

  strong {
    color: #1d2b22;
    font-size: 17px;
    margin-bottom: 6px;
  }

  p {
    color: #66736b;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    min-height: 220px;
    padding: 18px;
  }
`;

export const LoadingPanel = styled(EmptyPanel)`
  span {
    width: 34px;
    height: 34px;
    margin: 0 auto 14px;
    border: 3px solid #d9e2da;
    border-top-color: #2f6b45;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Summary = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const SummaryCard = styled.div`
  min-width: 0;
  border: 1px solid #dfe5df;
  border-radius: 10px;
  padding: 16px;
  background: #fbfcfb;

  span {
    display: block;
    color: #66736b;
    font-size: 13px;
    margin-bottom: 8px;
  }

  strong {
    color: #1d2b22;
    font-size: clamp(24px, 7vw, 30px);
    line-height: 1;
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-top: 18px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartCard = styled.div`
  min-width: 0;
  margin-top: 18px;
  border: 1px solid #dfe5df;
  border-radius: 12px;
  padding: 18px;
  background: #fbfcfb;

  ${ChartsGrid} & {
    margin-top: 0;
  }

  @media (max-width: 480px) {
    padding: 14px;
  }
`;

export const ChartHeader = styled.div`
  margin-bottom: 18px;

  h3 {
    color: #18281f;
    font-size: 18px;
    margin-bottom: 4px;
  }

  p {
    color: #66736b;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const PieChartBox = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 22px;
  align-items: center;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const PieGraphic = styled.div<{ background: string }>`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: ${({ background }) => background};
  display: grid;
  place-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 42px;
    background: #fbfcfb;
    border-radius: 50%;
  }

  strong,
  span {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  strong {
    color: #1d2b22;
    font-size: 30px;
    line-height: 1;
  }

  span {
    color: #66736b;
    font-size: 13px;
    margin-top: 4px;
  }
`;

export const ChartLegend = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
`;

export const LegendItem = styled.div<{ color: string }>`
  display: grid;
  grid-template-columns: 12px 1fr auto;
  align-items: center;
  gap: 10px;

  span {
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: ${({ color }) => color};
  }

  p {
    color: #26342b;
    font-size: 14px;
    font-weight: 700;
    text-transform: capitalize;
  }

  strong {
    color: #2f6b45;
    font-size: 14px;
    font-weight: 800;
  }
`;

export const VerticalBarChart = styled.div`
  min-height: 260px;
  display: flex;
  align-items: end;
  gap: 18px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 4px 2px;
`;

export const VerticalBarItem = styled.div`
  min-width: 74px;
  height: 240px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-items: center;
  gap: 8px;

  strong {
    color: #2f6b45;
    font-size: 13px;
    font-weight: 800;
    white-space: nowrap;
  }
`;

export const VerticalBarColumn = styled.div`
  width: 44px;
  height: 170px;
  border-radius: 10px 10px 4px 4px;
  background: #e4eae5;
  display: flex;
  align-items: end;
  overflow: hidden;
`;

export const VerticalBarFill = styled.div<{ height: number; color: string }>`
  width: 100%;
  height: ${({ height }) => Math.min(Math.max(height, 0), 100)}%;
  background: ${({ color }) => color};
  border-radius: 10px 10px 4px 4px;
  transition: height 0.35s ease;
`;

export const VerticalBarLabel = styled.span`
  max-width: 78px;
  min-height: 32px;
  color: #26342b;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.25;
  text-align: center;
  text-transform: capitalize;
  word-break: break-word;
`;

export const TableWrapper = styled.div`
  width: 100%;
  min-width: 0;
  margin-top: 18px;
  border: 1px solid #dfe5df;
  border-radius: 10px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  table {
    width: 100%;
    min-width: 520px;
    border-collapse: collapse;
  }

  th {
    background: #f4f6f4;
    color: #526158;
    font-size: 13px;
    font-weight: 800;
    text-align: left;
    padding: 13px 14px;
    border-bottom: 1px solid #dfe5df;
    white-space: nowrap;
  }

  td {
    color: #26342b;
    font-size: 14px;
    padding: 14px;
    border-bottom: 1px solid #edf1ed;
    text-transform: capitalize;
    white-space: nowrap;
  }

  tr:last-child td {
    border-bottom: none;
  }
`;