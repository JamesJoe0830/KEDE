import styled from "styled-components";

export const TextArea = styled.textarea`
  width: 100%;
  height: 250px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: rgba(204, 204, 204, 0.8);
  border-color: white;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 10px;
  overflow-y: scroll;
  resize: none;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 10px;
    border: 1px solid gray;
  }
`;
