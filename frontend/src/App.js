import styles from "./App.module.css";
import { Route, Routes } from 'react-router-dom/';
// import Header from './components/Header';
// import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Plus } from 'react-bootstrap-icons';
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
    <div className={styles.App}>
      <Container data-bs-theme='dark'>
        <header className={styles.Header}>
          <Row>
            <Col xs={10} md={11}>
              <h1>Contacts App</h1>
            </Col>
            <Col xs={2} md={1}>
            <Plus size={40}/>
            </Col>
          </Row>
          
        </header>
        <main>
          <Row className="justify-content-md-center">
            <Col sm={12} md={6}>
              <Routes>
                  <Route exact path="/" element={<Contacts />} />
                  <Route exact path="/create/" element={<p>create contact</p>} />
                  <Route exact path="/edit/:id" element={<p>edit contact</p>} />
                  <Route exact path="/delete/:id" element={<p>delete contact</p>} />
                  <Route path="*" element={<p>not found</p>} />
              </Routes>
            </Col>
          </Row>
        </main>
      </Container>
      {/* <Header /> */}
      {/* <Footer /> */}
    </div>
    </>
  );
}

export default App;
