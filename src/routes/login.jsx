import { useState } from "react";
import styled from "styled-components";
import { colors } from "../styles/Globalstyle";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [passShow, setPassShow] = useState(false);
  const [confirmPassShow, setConfirmPassShow] = useState(false);
  return (
    <LoginSection>
      <form action="">
        <div className="form-switch">
          <button
            type="button"
            className={loginForm === true ? "btn btn-active" : "btn"}
            onClick={() => setLoginForm(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={loginForm === false ? "btn btn-active" : "btn"}
            onClick={() => setLoginForm(false)}
          >
            Signup
          </button>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="sername"
            placeholder={loginForm ? "Username / Email" : "Username"}
          />
        </div>
        {loginForm ? null : (
          <div className="input-group">
            <input type="email" name="Email" placeholder="Email" />
          </div>
        )}

        <div className="input-group">
          <input
            type={passShow ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="password"
          />
          {passShow ? (
            <IoEyeOffOutline
              className="icon"
              onClick={() => setPassShow(false)}
            />
          ) : (
            <IoEyeOutline className="icon" onClick={() => setPassShow(true)} />
          )}
        </div>
        {loginForm ? null : (
          <div className="input-group">
            <input
              type={confirmPassShow ? "text" : "password"}
              name="password1"
              placeholder="Confirm Password"
              className="password"
            />
            {confirmPassShow ? (
              <IoEyeOffOutline
                className="icon"
                onClick={() => setConfirmPassShow(false)}
              />
            ) : (
              <IoEyeOutline
                className="icon"
                onClick={() => setConfirmPassShow(true)}
              />
            )}
          </div>
        )}
        <button type="submit" className="btn-default">
          Submit
        </button>
      </form>
    </LoginSection>
  );
};

export default Login;

const LoginSection = styled.section`
  width: 100%;
  height: calc(100vh - 250px);
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    width: 400px;
    border: 1px solid ${colors.lightgray};
    padding: 20px;
    .form-switch {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
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
