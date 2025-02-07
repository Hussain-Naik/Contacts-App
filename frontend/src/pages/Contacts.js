import React, { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';
import ListGroup from 'react-bootstrap/ListGroup';

const Contacts = () => {
    const [loaded, setLoaded] = useState(true)
    const [contacts, setContacts] = useState([])
    var previousChar = ''

    const handleMount = async () => {
        try {
        const { data } = await axiosReq.get('contacts/');
        setContacts(data.results)
        setLoaded(true)
        console.log(data.results)
        } catch (err) {
        console.log(err)
        }
    };

    useEffect(() => {
        handleMount();
    }, []);

    return (
        loaded ?
        <ListGroup>
            {
                contacts.map((emp) => {
                    if (emp.last_name.charAt(0) !== previousChar) {
                        previousChar = emp.last_name.charAt(0)
                        return (
                            <>
                            <ListGroup.Item variant="secondary">{emp.last_name.charAt(0)}</ListGroup.Item>
                            <ListGroup.Item variant="dark">{emp.first_name}</ListGroup.Item>
                            </>
                        )
                    } else {
                        return (
                        <ListGroup.Item variant="dark">{emp.first_name}</ListGroup.Item>
                        )
                    }
                })
            }
        
        </ListGroup>
        : null
    );
};

export default Contacts
