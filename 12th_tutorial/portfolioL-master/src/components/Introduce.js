import './Introduce.css'

export default function Introduce() {
    return (
      <div className="introduce">
        <div className="education">
          <h1>Education</h1>
          <hr width="100%" color="#181818" />
          <h3>한국외국어대학교</h3>
          <span>2022.03-재학중</span>
          <span>차이나데이터큐레이션 전공, AI융합 전공</span>
        </div>
        <div className="values">
          <h1>Values</h1>
          <hr width="100%" color="#181818" />
          <ul>
            <li>일의 결과도 중요하지만, 계획대로 되지 않을 때 돌파구를 찾아내는 과정을 더 의미있게 생각해요.</li>
            <li>다양한 입장을 고려하여 소외되는 사람이 없는 세상을 꿈꿔요.</li>
            <li>"三人行, 必有我師焉"(세 사람이 함께 길을 가면 거기에 반드시 내 스승이 있다)는 말처럼, 누구에게나 배울 것이 있다고 생각해요.</li>
          </ul>
        </div>
        <div className="strenghts">
          <h1>Strenghts</h1>
          <hr width="100%" color="#181818" />
          <ul>
            <li>맡은 일을 책임감 있게 완수해요.</li>
            <li>다른 사람들의 피드백을 잘 받아들여요.</li>
            <li>항상 배울 준비가 되어 있어요.</li>
          </ul>
        </div>
      </div>
    );
  }