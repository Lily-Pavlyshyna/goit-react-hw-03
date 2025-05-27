import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContactSchema } from "./ContactSchema";
import { nanoid } from "nanoid";
export default function ContactForm({ addContact }) {
  const id = nanoid();
  const handleSubmit = (values, helpers) => {
    console.log(values);
    const newContact = {
      id: nanoid(),
      ...values,
    };
    addContact(newContact);
    helpers.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <label className={css.label} htmlFor={id}>
            Name
          </label>
          <Field type="text" name="name" className={css.input} id={id} />
          <ErrorMessage name="name" component="span" className={css.error} />

          <label className={css.label} htmlFor={id}>
            Number
          </label>
          <Field type="text" name="number" className={css.input} id={id} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </fieldset>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
