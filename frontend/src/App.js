import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom/";
// import Footer from './components/Footer';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contacts from "./pages/Contacts";
import CreateContact from "./pages/CreateContact";
import Header from "./components/Header";
import EditContact from "./pages/EditContact";
import ContactDetail from "./pages/ContactDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Container className={styles.App} data-bs-theme="dark">
      <Header />
      <main>
        <Row className="justify-content-md-center">
          <Col sm={12} md={6}>
            <Routes>
              <Route exact path="/" element={<Contacts />} />
              <Route exact path="/create/" element={<CreateContact />} />
              <Route exact path="/contact/:id" element={<ContactDetail />} />
              <Route exact path="/edit/:id" element={<EditContact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default App;
