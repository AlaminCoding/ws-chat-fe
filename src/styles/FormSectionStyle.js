import styled from "styled-components";
import { colors } from "./Globalstyle";

const FormSection = styled.section`
  width: 100%;
  height: calc(100vh - 250px);
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 400px;
    border: 1px solid ${colors.lightgray};
    padding: 20px;
    box-shadow: 0px 0px 2px ${colors.lightgray};
    h2 {
      text-transform: uppercase;
      font-size: 20px;
      margin-bottom: 15px;
    }
    .input-group {
      margin-bottom: 20px;
      position: relative;
      input {
        height: 40px;
        border: 1px solid ${colors.lightgray};
        width: 100%;
        background-color: transparent;
        color: ${colors.black};
        padding: 0px 10px;

        transition: 300ms;
        &:focus {
          outline: none;
          box-shadow: -3px 3px 0px ${colors.black};
        }
      }
      .password {
        padding-right: 40px;
      }
      .icon {
        position: absolute;
        top: 9px;
        right: 12px;
        font-size: 20px;
        cursor: pointer;
      }
    }
  }
`;

export default FormSection;
