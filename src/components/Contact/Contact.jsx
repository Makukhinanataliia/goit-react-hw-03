import style from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={style.item}>
      {contact.name}: {contact.number}
      <button
        type="button"
        className={style.button}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
}
