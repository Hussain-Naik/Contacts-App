import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { axiosReq } from "../api/axiosDefaults";
import { useNavigate } from "react-router-dom";

const CreateContact = () => {
  const [validated, setValidated] = useState(false);
  const [inputData, setInputData] = useState({
    first_name: "",
    last_name: "",
    number: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const { first_name, last_name, number, address } = inputData;
  const navigate = useNavigate();

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
      const { data } = await axiosReq.post("contacts/", inputData);
      console.log(data);
      navigate("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <>
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
          {errors.first_name
          ? <Form.Text id="firstNameErrors" muted>{errors.first_name}</Form.Text>
          : null
          }
          
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
          {errors.last_name
          ? <Form.Text id="lastNameErrors" muted>{errors.last_name}</Form.Text>
          : null
          }
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
          {errors.number
          ? <Form.Text id="contactNumberErrors" muted>{errors.number}</Form.Text>
          : null
          }
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
            style={{ height: '100px' }}
            required
          />
          {errors.address
          ? <Form.Text id="addressErrors" muted>{errors.address}</Form.Text>
          : null
          }
        </FloatingLabel>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateContact;
