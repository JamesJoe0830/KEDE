import styled, { css, keyframes } from "styled-components";
import "../../../../public/fonts/Font.css";
interface PropsDark {
  dark: boolean;
}
interface PropsChange {
  change: boolean;
}

const rotate = keyframes` 
    0% { transform: rotate(0deg); scale:1.2}
    100% { transform: rotate(360deg); scale:1}
`;
export const Title = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  font-size: 24px;
  display: flex;
  color: white;
  font-family: "IrishGrover";
  z-index: 10;
`;
export const DarkModeBtn = styled.button<PropsDark>`
  position: absolute;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  margin: 10px;
  z-index: 4;
  outline: none;
  border: 1px solid grey;
  text-transform: uppercase;
  background-color: ${(props) => (props.dark ? "white" : "#0c5483")};
  color: ${(props) => (props.dark ? "#0c5483" : "white")};
  z-index: 10;
  cursor: pointer;
`;
export const MainWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const FullImagesWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const FullImages = styled.img<PropsChange>`
  width: 100%;
  z-index: 1;
  animation: ${(props) =>
    props.change &&
    css`
      ${rotate} 0.3s linear
    `};
  animation-delay: 0.8s;
`;
export const MiddleBox = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%; /* 가로 중앙 정렬 */
  text-align: center;
  display: flex;
  justify-content: center;
  z-index: 4;
`;
export const MiddleImage = styled.img<PropsChange>`
  width: 1000px;
  height: 1000px;
  z-index: 3;
  border-radius: 50%;
  filter: brightness(120%);
  opacity: 0.6;

  animation: ${(props) =>
    props.change &&
    css`
      ${rotate} 0.5s linear
    `};
`;
export const EndImageBox = styled.div`
  position: absolute;

  z-index: 6;
  left: 50%; /* 가로 중앙 정렬 */
  top: 50%; /* 세로 중앙 정렬 */
  transform: translate(-50%, -50%); /* 가운데 정렬을 위한 transform */
  border-radius: 50%;
`;
export const EndImage = styled.img<PropsChange>`
  width: 600px;
  height: 600px;
  z-index: 3;
  border-radius: 50%;
  filter: brightness(120%);

  animation: ${(props) =>
    props.change &&
    css`
      ${rotate} 0.3s linear
    `};
`;
export const TotalInputWrapper = styled.div`
  width: 50%;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

// export const Circle = styled.div<Props>`
//   width: 100%;
//   height: 100%;
//   z-index: 3;
//   border-radius: 50%;

//   background-color: #a8a8a8;
//   opacity: 0.3;
//   overflow: hidden;
//   animation: ${(props) =>
//     props.dark &&
//     css`
//       ${rotate} 0.5s linear
//     `};
//   animation-delay: 0.3s;
// `;
