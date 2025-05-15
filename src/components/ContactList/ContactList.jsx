
import React from "react";
import styles from "./ContactList.module.css";
import { FaUser, FaPhone, FaTrash } from "react-icons/fa"; // ikonları ekledik

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.listItem}>
          <span className={styles.contactText}>
            <FaUser className={styles.icon} /> {name}
          </span>
          <span className={styles.contactText}>
            <FaPhone className={styles.icon} /> {number}
          </span>
          <button
            className={styles.deleteButton}
            onClick={() => onDelete(id)}
          >
            <FaTrash /> {/* çöp kutusu ikonu */}
          </button>
        </li>
      ))}
    </ul>
  );
}
