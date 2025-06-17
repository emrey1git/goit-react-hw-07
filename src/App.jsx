import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox"; 
import { selectContacts } from "./redux/contactsSlice";
import { addContact, deleteContact, fetchContacts } from "./redux/contactsOps";
import { selectFilter, setFilter } from "./redux/filtersSlice"; 
import "./App.css"; 

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onChange={handleFilterChange} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
}
