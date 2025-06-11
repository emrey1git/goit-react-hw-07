import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import { selectContacts, addContact, deleteContact } from "./redux/contactsSlice";
import { selectFilter, setFilter } from "./redux/filtersSlice"; 

export default function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

 
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
