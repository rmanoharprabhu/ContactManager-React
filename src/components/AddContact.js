import React from 'react';

// Class Component should have the render menthod.

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
        contactno: ""
    };

    addContact = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.email === "") {
            alert("Name and Email Needed");
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "", address: "", contactno: "" });
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.addContact}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })}>

                        </input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email" name="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}>
                        </input>
                    </div>
                    <div className="field">
                        <label>Contact No</label>
                        <div className="ui labeled input">
                            <div className="ui label">
                                91
                            </div>
                            <input type="text" placeholder="Contact No" name="contactno"
                                value={this.state.contactno}
                                onChange={(e) => this.setState({ contactno: e.target.value })}>
                            </input>
                        </div>

                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;