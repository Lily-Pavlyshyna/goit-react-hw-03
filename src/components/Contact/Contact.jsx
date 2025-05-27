import css from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { MdCall } from "react-icons/md";
export default function Contact({ contact: { name, number, id }, onDelete }) {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>
          <FaUser size={16} />
          {name}
        </p>
        <p className={css.text}>
          <MdCall size={16} />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)} className={css.btn}>
        Delete
      </button>
    </>
  );
}
