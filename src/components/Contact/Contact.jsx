import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={css.item}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
