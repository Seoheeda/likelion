//pages/main/maincontent.jsx
import { MainContainer, MainText, ThemeButton } from "./styles";
//일반 zustand의 useStore을 import해오는게 아닌, 생성한 스토어를 import해와야 합니다
import useStore  from "../../store/store";

function MainContent() {
	//각각 상태와 상태변경 함수를 가져옵니다
  const darkmode = useStore((state) => state.darkmode);
  const changeTheme = useStore((state) => state.changeTheme);

  return (
    <MainContainer darkmode={darkmode}>
      <MainText darkmode={darkmode}>집 가고 싶다!</MainText>
      <ThemeButton onClick={changeTheme}>
        {darkmode ? "밤" : "아침"}인데 집 갈까?
      </ThemeButton>
    </MainContainer>
  );
}

export default MainContent;