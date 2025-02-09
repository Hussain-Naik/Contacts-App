import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const EmptyContact = () => {
    const navigate = useNavigate()
  return (
    <ListGroup.Item
      onClick={() => navigate(`/create/`)}
      action
      variant="info"
    >
      No Contacts Found or exist with given search parameter. Click here to create new Contact.
    </ListGroup.Item>
  );
};

export default EmptyContact;
