import styled from "styled-components";
import { colors } from "../styles/Globalstyle";
import { SiExpress, SiMongodb, SiSocketdotio } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
const Home = () => {
  return (
    <Banner>
      <div className="img-wrapper">
        <div className="img-box">
          <img src="/chat-first.jpg" alt="" />
        </div>
        <div className="img-box">
          <img src="/chat-mid.jpg" alt="" />
          <div className="content">
            <h2>A simple chat app made with</h2>
            <div className="logos">
              <SiExpress />
              <FaReact />
              <SiMongodb />
              <FaNodeJs />
              <SiSocketdotio />
            </div>
          </div>
        </div>
        <div className="img-box">
          <img src="/chat-last.jpg" alt="" />
        </div>
      </div>
    </Banner>
  );
};

export default Home;

const Banner = styled.section`
  width: 100%;
  height: calc(100vh - 250px);
  display: flex;
  align-items: center;
  justify-content: center;
  .img-wrapper {
    display: flex;
    height: 400px;
    width: 100%;
    gap: 40px;
    .img-box {
      img {
        height: auto;
        width: 100%;
        box-shadow: 0px 0px 5px ${colors.lightgray};
      }
      .content {
        padding-top: 40px;
        text-align: center;
        h2 {
          font-size: 30px;
          font-weight: 500;
        }
        .logos {
          margin-top: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          svg {
            font-size: 50px;
          }
        }
      }
      @media screen and (max-width: 1000px) {
        &:nth-child(1) {
          display: none;
        }
        &:nth-child(3) {
          display: none;
        }
      }
    }
  }
`;
