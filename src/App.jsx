import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialContacts from "./contacts.json";
function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      return JSON.parse(savedContacts);
    }
    return initialContacts;
  });

  const [inputValue, setInputValue] = useState("");
  const addContact = (newContact) => {
    setContactsData((prevContact) => {
      return [...prevContact, newContact];
    });
  };
  const deleteContact = (contactId) => {
    setContactsData((prevContact) => {
      return prevContact.filter((el) => el.id !== contactId);
    });
  };
  const visibleContact = contactsData.filter((el) =>
    el.name.toLowerCase().includes(inputValue.toLowerCase().trim())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contactsData));
  }, [contactsData]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={inputValue} onFilter={setInputValue} />
      <ContactList contact={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
