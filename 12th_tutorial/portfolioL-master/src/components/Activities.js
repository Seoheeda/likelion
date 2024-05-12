import qrius from '../images/qrius.png'
import likelion from '../images/likelion.png'
import './Activities.css'

export default function Activities() {
      return (
  
        <div className="activities">
          <h1>Activities</h1>
          <hr width="100%" color="#181818" />
          <div className="Q.rius">
            <img src={qrius} alt="Qrius"/>
            <div className="txt">
              <h3>학과동아리 Qrius</h3>
              <span>2022.06-2023.06</span>
              <span>중국언어문화학부 내에 차이나데이터큐레이션 전공이 신설되면서 생긴 데이터 동아리예요. <br />Notion, Tableau 같은 데이터시각화 툴을 익혔어요.</span>
            </div>
          </div>
          <div className="likelion">
            <img src={likelion} alt="Likelion"/>
            <div className="txt">
              <h3>연합동아리 멋쟁이사자처럼 대학</h3>
              <span>2024.03-</span>
              <span>현재 활동 중이예요. <br /> 프론트엔드 파트로 참여하며 웹 개발에 대해 배우고 있어요.</span>
            </div>
          </div>
        </div>
      );
    }