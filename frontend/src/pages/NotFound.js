import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ListGroup>
      <ListGroup.Item
        className="justify-content-center"
        onClick={() => navigate(`/`)}
        action
        variant="warning"
      >
        <h2>Page not found!</h2>
        <p>
          We could not find what you were looking for. Please click here to be
          redirected to home
        </p>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default NotFound;
