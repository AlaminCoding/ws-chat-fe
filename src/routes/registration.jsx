import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import FormSection from "../styles/FormSectionStyle";
import { useState } from "react";
const Registration = () => {
  const [passShow, setPassShow] = useState(false);
  const [passShow2, setPassShow2] = useState(false);
  return (
    <FormSection>
      <form action="">
        <h2>Registration</h2>
        <div className="input-group">
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-group">
          <input
            type={passShow ? "text" : "password"}
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
        <div className="input-group">
          <input
            type={passShow2 ? "text" : "password"}
            placeholder="Confirm Password"
            className="password"
          />
          {passShow2 ? (
            <IoEyeOffOutline
              className="icon"
              onClick={() => setPassShow2(false)}
            />
          ) : (
            <IoEyeOutline className="icon" onClick={() => setPassShow2(true)} />
          )}
        </div>
        <button type="submit" className="btn-default">
          Submit
        </button>
      </form>
    </FormSection>
  );
};

export default Registration;
