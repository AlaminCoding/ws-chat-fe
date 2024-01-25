import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="errorpage">
      <h1>Ooops ! Mara Khao</h1>
      <p>Is it too late now to say sorry...</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
