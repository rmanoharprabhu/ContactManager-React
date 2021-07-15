import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { v4 as uuid } from 'uuid';
// import Header from './Header';
// import AddContact from './AddContact';
// import ContactList from './ContactList';
import Login from './login';
import Home from './home';


function App() {
  // const [contacts, setContact] = useState([]);
  // const CONTACT_KEY = "contacts";

  // const addContactHandler = (contact) => {
  //   setContact([...contacts, { id: uuid(), ...contact }]);
  // }

  // useEffect(() => {
  //   localStorage.setItem(CONTACT_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // useEffect(() => {
  //   const contactList = JSON.parse(localStorage.getItem(CONTACT_KEY));
  //   if (contactList) setContact(contactList);

  // }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/"><Login /></Route>
        <Route path="/home"><Home authorize={false} /></Route>
      </Switch>
    </Router>
  );
}

export default App;
