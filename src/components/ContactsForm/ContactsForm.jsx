import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import css from "./ContactsForm.module.css";
import { nanoid } from "nanoid";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: nanoid(), name, number };

    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
      setName("");
      setNumber("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactsForm;
