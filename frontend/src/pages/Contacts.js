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
import Row from "react-bootstrap/esm/Row";
import EmptyContact from "../components/EmptyContact";

const Contacts = () => {
  const [loaded, setLoaded] = useState(false);
  const [contacts, setContacts] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  var previousChar = "";

  const handleMount = async () => {
    try {
      const { data } = await axiosReq.get(`contacts/?search=${query}`);
      setContacts(data);
      setLoaded(true);
      console.log(data);
    } catch (err) {
      setLoaded(true);
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, [query]);

  return loaded ? (
    <>
      <InputGroup className="my-2">
        <InputGroup.Text>
          <Search />
        </InputGroup.Text>
        <Form.Control
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          type="text"
          placeholder="Search for contact..."
        />
      </InputGroup>
      <ListGroup>
        {contacts.results.length ? (
          <InfiniteScroll
            children={contacts.results.map((contact) => {
              if (contact.last_name.charAt(0) !== previousChar) {
                previousChar = contact.last_name.charAt(0);
                return (
                  <>
                    <ListGroup.Item
                      key={previousChar}
                      className="pt-3"
                      variant="secondary"
                    >
                      {contact.last_name.charAt(0)}
                    </ListGroup.Item>
                    <ListGroup.Item
                      key={contact.id}
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
                    key={contact.id}
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
              <Row className="justify-content-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </Row>
            }
            hasMore={!!contacts.next}
            next={() => fetchMoreData(contacts, setContacts)}
          />
        ) : (
          <EmptyContact />
        )}
      </ListGroup>
    </>
  ) : (
    <Row className="justify-content-center">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Row>
  );
};

export default Contacts;
