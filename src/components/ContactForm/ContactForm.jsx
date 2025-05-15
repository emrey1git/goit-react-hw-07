// src/components/ContactForm/ContactForm.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "En az 3 karakter olmalı")
        .max(50, "En fazla 50 karakter olabilir")
        .required("İsim zorunludur"),
      number: Yup.string()
        .min(3, "En az 3 karakter olmalı")
        .max(50, "En fazla 50 karakter olabilir")
        .required("Numara zorunludur"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      onAddContact(newContact);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.formLabel}>Name</label>
        <input
          id="name"
          name="name"
          type="text"
          {...formik.getFieldProps("name")}
          className={styles.formInput}
          placeholder="İsim girin"
        />
        {formik.touched.name && formik.errors.name && (
          <div className={styles.formError}>{formik.errors.name}</div>
        )}
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number" className={styles.formLabel}>Number</label>
        <input
          id="number"
          name="number"
          type="tel"
          {...formik.getFieldProps("number")}
          className={styles.formInput}
          placeholder="Telefon numarası girin"
        />
        {formik.touched.number && formik.errors.number && (
          <div className={styles.formError}>{formik.errors.number}</div>
        )}
      </div>
      <button type="submit" className={styles.submitButton}>
        Add contact
      </button>
    </form>
  );
}
