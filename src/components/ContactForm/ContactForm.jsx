import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

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
      <Form className={styles.formContainer}>
        <div>
          <label>
            Name
            <Field name="name" className={styles.inputField} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
          </label>
        </div>
        <div>
          <label>
            Number
            <Field name="number" className={styles.inputField} />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.errorMessage}
            />
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
