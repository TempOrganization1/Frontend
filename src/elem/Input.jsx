import styled, { css } from "styled-components";

const Input = ({ children, ...props }) => {
  return <StInput {...props}>{children}</StInput>;
};
export default Input;

const StInput = styled.input`
  background-color: #fff;
  border: 0px;
  border-radius: 5px;
  ${({ variant }) => {
    switch (variant) {
      case "sign":
        return css`
          padding-left: 16px;
          display: flex;
          width: 375px;
          height: 55px;
          margin-bottom: 12px;
          font-size: 20px;
          ::placeholder {
            font-size: 20px;
            opacity: 0.5;
          }
        `;
      default:
        break;
    }
  }}
`;
