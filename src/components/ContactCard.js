import React from 'react';
import user from '../content/images/user.png';

const ContactCard = (props) => {
    const { id, name, email, contactno } = props.contact;
    return (
        <div className="item" key={id}>
            <img className="ui avatar image" src={user} alt="User" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
                <div>{contactno}</div>

            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
        </div>
    );
}

export default ContactCard;
