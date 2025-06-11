import { useSelector, useDispatch } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";  // burası değişti
import styles from "./ContactList.module.css";
import { FaUser, FaPhone, FaTrash } from "react-icons/fa";

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);  // burası da değişti

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <span className={styles.contactText}>
            <FaUser className={styles.icon} /> {name}
          </span>
          <span className={styles.contactText}>
            <FaPhone className={styles.icon} /> {number}
          </span>
          <button
            className={styles.deleteButton}
            onClick={() => dispatch(deleteContact(id))}
          >
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}
