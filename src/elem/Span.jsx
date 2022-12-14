import styled, { css } from "styled-components";

const Span = ({ children, ...props }) => {
  return <StSpan {...props}>{children}</StSpan>;
};
export default Span;

const StSpan = styled.span`
  display: flex;
  font-size: ${({ fs }) => (fs ? fs : "20px")};
  margin: ${({ mg }) => (mg ? mg : "")};
  align-self: ${({ asf }) => (asf ? asf : "")};
  color: ${({ color }) => (color ? color : "")};
  font-weight: ${({ fw }) => (fw ? fw : "")};
  border-bottom: ${({ bb }) => (bb ? bb : "")};
  white-space: ${({ ws }) => (ws ? ws : "")};
  text-overflow: ${({ to }) => (to ? to : "")};
  overflow: ${({ of }) => (of ? of : "")};
  word-break: ${({ wb }) => (wb ? wb : "")};
  word-wrap: ${({ wr }) => (wr ? wr : "")};
  width: ${({ wd }) => (wd ? wd : "")};
  text-align: ${({ ta }) => (ta ? ta : "")};

  ${({ variant }) => {
    switch (variant) {
      case "small":
        return css`
          font-size: 14px;
        `;
      case "medium":
        return css`
          font-size: 16px;
        `;
      case "bold":
        return css`
          font-weight: 700;
        `;
      case "smallBold":
        return css`
          font-size: 14px;
          font-weight: 700;
        `;
      case "smallBronze":
        return css`
          font-size: 14px;
          color: #a4a19d;
        `;
      case "mediumBronzeBold":
        return css`
          font-size: 16px;
          color: #a4a19d;
          font-weight: 700;
        `;
      case "mediumBronze":
        return css`
          font-size: 16px;
          color: #a4a19d;
        `;
      case "bigBronze":
        return css`
          font-size: 18px;
          color: #a4a19d;
        `;
      case "other":
        return css`
          font-size: 12px;
          color: #a4a19d;
        `;
      case "warning":
        return css`
          font-size: 12px;
          color: red;
          margin: 0 0 10px 10px;
        `;
      default:
        break;
    }
  }};
`;
