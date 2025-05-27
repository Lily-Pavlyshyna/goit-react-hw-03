import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
export default function ContactList({ contact, onDelete }) {
  return (
    <>
      {contact.length !== 0 ? (
        <ul className={css.wraperContact}>
          {contact.map((item) => (
            <li className={css.item} key={item.id}>
              <Contact contact={item} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.text}>No contacts found</p>
      )}
    </>
  );
}
