import React, { useState, useEffect } from "react";
import { Redirect, useLocation } from 'react-router-dom'

import { v4 as uuid } from 'uuid';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

export default function Home(props) {
    const [contacts, setContact] = useState([]);
    const CONTACT_KEY = "contacts";

    const location = useLocation();

    const addContactHandler = (contact) => {
        setContact([...contacts, { id: uuid(), ...contact }]);
    }

    useEffect(() => {
        localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
    }, [contacts]);

    useEffect(() => {
        const contactList = JSON.parse(localStorage.getItem(CONTACT_KEY));
        if (contactList) setContact(contactList);

    }, []);

    //console.log(this.props);

    if (location.state === undefined || !location.state.authorize) {
        return (
            <Redirect to="/" />
        )
    }

    return (

        <div className="ui container">
            <Header />
            <AddContact addContactHandler={addContactHandler} />
            <ContactList contacts={contacts} />
        </div>
    );
}
