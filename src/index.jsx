import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css"; //remove to customize
import "./index.scss";

const MyBooksApplication = () => {
  // return <MainView />;
  return (
    <Container>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyBooksApplication />);
