import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'At least 3 characters')
      .max(50, 'At least 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'At least 3 characters')
      .max(50, 'At least 50 characters or less')
      .required('Required')
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(addContact({
      name: values.name,
      number: values.number,
    }));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className={css.formikForm}>
        <label className={css.formikLabel} htmlFor="name">Name</label>
        <Field className={css.formikField} type="text" id="name" name="name" />
        <ErrorMessage name="name" component="div" />

        <label className={css.formikLabel} htmlFor="number">Number</label>
        <Field className={css.formikField} type="text" id="number" name="number" />
        <ErrorMessage name="number" component="div" />

        <button className={css.formikBtn} type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
