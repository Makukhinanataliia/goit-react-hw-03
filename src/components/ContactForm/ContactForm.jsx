import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd({ id: nanoid(), ...values });
        resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label>
            Name
            <Field name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>
        </div>
        <div>
          <label>
            Number
            <Field name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
