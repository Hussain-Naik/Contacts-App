import React, { useEffect, useState } from "react";
import styles from "../App.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PencilSquare, TrashFill } from "react-bootstrap-icons";
import DeleteModal from "../components/DeleteModal";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ContactDetail = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    number: "",
    address: "",
  });
  const { first_name, last_name, number, address } = inputData;

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get(`contacts/${id}/`);
      setInputData(data);
      setLoaded(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return loaded ? (
    <div>
      <Row className="justify-content-evenly">
        <Button
          onClick={() => navigate(`/edit/${id}`)}
          variant="outline-primary"
          className={styles.ButtonIcon}
        >
          <PencilSquare /> Edit
        </Button>
        <Button
          onClick={() => setModalShow(true)}
          variant="outline-danger"
          className={styles.ButtonIcon}
        >
          <TrashFill /> Delete
        </Button>
      </Row>

      <Form className="mt-2">
        <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="first_name"
            value={first_name}
            disabled
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput2"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="last_name"
            value={last_name}
            disabled
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput3"
          label="Contact Number"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="number"
            value={number}
            disabled
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Address"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            name="address"
            value={address}
            disabled
            style={{ height: "100px" }}
            required
          />
        </FloatingLabel>
      </Form>
      <DeleteModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        first_name={first_name}
        last_name={last_name}
        id={id}
      />
    </div>
  ) : null;
};

export default ContactDetail;
