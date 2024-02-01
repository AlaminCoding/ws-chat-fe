import { useState } from "react";
import FormSection from "../styles/FormSectionStyle";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
const Login = () => {
  const [passShow, setPassShow] = useState(false);
  return (
    <FormSection>
      <form action="">
        <h2>Login</h2>
        <div className="input-group">
          <input type="text" name="sername" placeholder="Username / Email" />
        </div>
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
        <button type="submit" className="btn-default">
          Submit
        </button>
      </form>
    </FormSection>
  );
};

export default Login;
