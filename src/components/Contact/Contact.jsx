import { FaPhone } from "react-icons/fa";
import style from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    contact.name
  )}&background=random&size=32`;

  return (
    <li className={style.item}>
      <div className={style.contactInfo}>
        <img src={avatarUrl} alt={contact.name} className={style.avatar} />
        <div className={style.details}>
          <span className={style.name}>{contact.name}</span>
          <span className={style.number}>
            <FaPhone className={style.phoneIcon} /> {contact.number}
          </span>
        </div>
      </div>
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
