import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  let message = "Something went wrong!";
  if (error.status === 404){
    message = "The requested page was not found.";
}

  return (
    <div className="App" id="error-page">
        <Header href="/" text="The Tall Tankard"></Header>
        <Container fluid className="Body">
            {message}
        </Container>
        <Footer></Footer>
    </div>
  );
}