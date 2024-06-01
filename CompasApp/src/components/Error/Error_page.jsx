import { useRouteError } from "react-router-dom";
import "./Error_page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-content">
          <h1 className="error-code">Oops!</h1>
          <p className="error-message">Lo sentimos, un error inesperado ha ocurrido.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <a href="/" className="home-link">Ir a la página principal</a>
        </div>
      </div>
    </div>
  );
}
