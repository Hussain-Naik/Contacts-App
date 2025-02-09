import styles from "../App.module.css";
import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Plus } from "react-bootstrap-icons";

const Header = () => {
  return (
    <header className={styles.Header}>
      <Row className="justify-content-center">
        <Col xs={10} md={5}>
          <Link className={styles.AppName} to="/">
            <h1>Contacts App</h1>
          </Link>
        </Col>
        <Col xs={2} md={1}>
          <Link className={styles.AppName} to="/create/">
            <h2 className={styles.CreateIcon}>
              <Plus size={40} />
            </h2>
          </Link>
        </Col>
      </Row>
    </header>
  );
};

export default Header;
