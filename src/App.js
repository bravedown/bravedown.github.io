import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";
import projects from "./projects";

function App() {
  return (
    <div>
      <Header />
      <Container style={{paddingTop: "60px"}}>
        <Row>  
          <Col className="bg-secondary">
          <h1>About me</h1>
          <p>My name is David Brown and I'm an aspiring full-stack software engineer. I am proficient with HTML, CSS, Javascript, Node.js, MySQL, MongoDB, and React.</p>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <h2>My projects</h2>
        </Row>
        <Row>
          {projects.slice(0, 2)}
        </Row>
        <Row>
          {projects.slice(2, 4)}
        </Row>
        <Row>
          {projects.slice(4, 6)}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
