import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { axiosReq } from "../api/axiosDefaults";
import { useNavigate } from "react-router-dom";

const DeleteModal = (props) => {
  const navigate = useNavigate();

  const handleDelete = async (event) => {
    try {
      const { data } = await axiosReq.delete(`contacts/${props.id}/`);
      console.log(data);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Delete Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          You are about to delete {props.first_name} {props.last_name}. This
          action is non reversible click delete to have record deleted from the
          database.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleDelete} variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
