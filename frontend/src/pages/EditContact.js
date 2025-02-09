import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { axiosReq } from "../api/axiosDefaults";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const EditContact = () => {
  const [loaded, setLoaded] = useState(false);
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    number: "",
    address: "",
  });
  const { first_name, last_name, number, address } = inputData;
  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    try {
      const { data } = await axiosReq.put(`contacts/${id}/`, inputData);
      console.log(data);
      navigate("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="first_name"
            value={first_name}
            onChange={handleChange}
            required
          />
          {errors.first_name ? (
            <Form.Text id="firstNameErrors" muted>
              {errors.first_name}
            </Form.Text>
          ) : null}
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
            onChange={handleChange}
            required
          />
          {errors.last_name ? (
            <Form.Text id="lastNameErrors" muted>
              {errors.last_name}
            </Form.Text>
          ) : null}
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
            onChange={handleChange}
            required
          />
          {errors.number ? (
            <Form.Text id="contactNumberErrors" muted>
              {errors.number}
            </Form.Text>
          ) : null}
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
            onChange={handleChange}
            style={{ height: "100px" }}
            required
          />
          {errors.address ? (
            <Form.Text id="addressErrors" muted>
              {errors.address}
            </Form.Text>
          ) : null}
        </FloatingLabel>
        <Row className="justify-content-center">
          <Col xs={3}>
            <Button
              variant="secondary"
              onClick={() => navigate(`/contact/${id}`)}
            >
              Cancel
            </Button>
          </Col>
          <Col xs={3}>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  ) : null;
};

export default EditContact;
