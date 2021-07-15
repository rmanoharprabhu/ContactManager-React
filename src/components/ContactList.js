import React from 'react';
import ContactCard from './ContactCard';

//functional component


function ContactList(props) {
    console.log(props);
    const displayContactList = props.contacts.map((contact) => {
        return (
            <ContactCard key={contact.id} contact={contact} />
        );
    });
    return (
        <div className="ui list">
            <h2 className="header">List</h2>
            {displayContactList}
        </div>

    );
}

export default ContactList;