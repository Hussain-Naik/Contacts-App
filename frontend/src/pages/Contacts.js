import React, { useEffect, useState } from "react";
import { axiosReq } from "../api/axiosDefaults";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { fetchMoreData } from "../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "react-bootstrap/Spinner";

const Contacts = () => {
  const [loaded, setLoaded] = useState(true);
  const [contacts, setContacts] = useState({ results: [] });
  const navigate = useNavigate();
  var previousChar = "";

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get("contacts/");
      setContacts(data);
      setLoaded(true);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return loaded ? (
    <>
      <Form className="my-2">
        <Form.Group>
          <InputGroup>
            <InputGroup.Text>
              <Search />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search for contact..." />
          </InputGroup>
        </Form.Group>
      </Form>
      <ListGroup>
        <InfiniteScroll
          children={contacts.results.map((contact) => {
            if (contact.last_name.charAt(0) !== previousChar) {
              previousChar = contact.last_name.charAt(0);
              return (
                <>
                  <ListGroup.Item className="pt-3" variant="secondary">
                    {contact.last_name.charAt(0)}
                  </ListGroup.Item>
                  <ListGroup.Item
                    onClick={() => navigate(`/contact/${contact.id}`)}
                    action
                    variant="dark"
                  >
                    {contact.first_name} {contact.last_name}
                  </ListGroup.Item>
                </>
              );
            } else {
              return (
                <ListGroup.Item
                  onClick={() => navigate(`/contact/${contact.id}`)}
                  action
                  variant="dark"
                >
                  {contact.first_name} {contact.last_name}
                </ListGroup.Item>
              );
            }
          })}
          dataLength={contacts.results.length}
          loader={
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          }
          hasMore={!!contacts.next}
          next={() => fetchMoreData(contacts, setContacts)}
        />
      </ListGroup>
    </>
  ) : null;
};

export default Contacts;
