import React, { useEffect, useState } from 'react'
import { axiosReq } from '../api/axiosDefaults';

const Contacts = () => {
    const [loaded, setLoaded] = useState(false)
    const [contacts, setContacts] = useState([])

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
        <div className="grid">
        
        </div>
        : null
    );
};

export default Contacts
