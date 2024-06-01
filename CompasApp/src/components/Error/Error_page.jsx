import { useRouteError } from "react-router-dom";
import "./Error_page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>¡Oops!</h1>
      <p>Lo sentimos, un error inesperado a ocurrido.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}