import { MainContainer, MainText, ThemeButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../reducers/theme";

function MainContent() {
	//dispatch 사용하기 전 준비
  const dispatch = useDispatch();
	
	//store에 접근하여 state의 theme에서 darkmode만 가져오기
  const { darkmode } = useSelector((state) => state.theme);
  
  const switchtheme = () => {
		//reducer에서 만들어 뒀던 함수 가져오기
    dispatch(changeTheme());
  };
  
  return (
	  //전해주는 props도 바뀌었습니다
    <MainContainer darkmode={darkmode}>
      <MainText>집 가고 싶다!</MainText>
      <ThemeButton onClick={switchtheme}>
        {darkmode ? "밤" : "아침"}인데 집 갈까?
      </ThemeButton>
    </MainContainer>
  );
}

export default MainContent;