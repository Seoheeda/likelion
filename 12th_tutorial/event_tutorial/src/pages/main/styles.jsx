//pages/main/styles.jsx
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 20px;
  background-color: ${(props) => (props.darkmode ? "black" : "white")};
`;

export const MainText = styled.div`
  padding: 20px;
  background-color: skyblue;
  color: white;
  font-size: 40px;
`;

export const ThemeButton = styled.button`
  padding: 10px;
`;