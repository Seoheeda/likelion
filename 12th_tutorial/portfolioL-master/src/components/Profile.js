import profilePhoto from '../images/profilePhoto.jpg'
import './Profile.css'

export default function Profile() {
    return (
      <div className="aboutme">
        <img src={profilePhoto} alt="profile_Leejin"/>
        <div>
          <h1>About Me</h1>
          <hr width="100%" color="#181818" />
          <ul className="contacts">
            <a href="mailto:leejinj0730@hufs.ac.kr"><li>Email</li></a>
            <a href="https://github.com/wh0land"><li>Github</li></a>
            <a href="https://www.instagram.com/leejinch0_o?igsh=MWw3czV6NmJuNXJnYg%3D%3D&utm_source=qr"><li>Instagram</li></a>
          </ul>
          <p>한국외국어대학교 3학년에 재학 중인 조이진입니다. <br /> 탐구심을 갖고 여러 분야를 알아가는 것이 가장 즐겁습니다. <br />최근 관심사는 프론트엔드 개발과 UXUI디자인 분야입니다.</p>
          <ul className="likes">
            <li>⚒️Technology</li>
            <li>🎨UXUI</li>
            <li>🎧Rock music</li>
            <li>📚Reading</li>
            <li>🌐Language</li>
          </ul>
        </div>
      </div>
    );
  }
