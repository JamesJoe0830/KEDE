import styled from "styled-components";
interface PropsDark {
  dark: boolean;
}
export const TargetName = styled.input<PropsDark>`
  display: flex;
  justify-content: right;
  width: 100%;
  height: 20px;
  z-index: 4;
  outline: none;
  border: 1px solid grey;
  color: ${(props) => (props.dark ? "#004e83" : "white;")};
  background-color: ${(props) => (props.dark ? "white" : "#0c5483")};
  padding: 5px 10px;
  &::placeholder {
    color: ${(props) => (props.dark ? "#004e83" : "white;")};
  }
`;

export const TargetBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* top: 40%;
  left: 50%;
  transform: translate(-50%, 50%); */
  margin-bottom: 10px;
`;

export const TargetTo = styled.div<PropsDark>`
  display: flex;
  width: 40%;
  font-size: 20px;
  font-weight: 700;
  color: white;
  color: ${(props) => (props.dark ? "black" : "white")};
`;
