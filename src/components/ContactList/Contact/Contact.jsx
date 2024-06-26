import { useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../../redux/contactsSlice';


const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <p>{contact.name}: {contact.number}</p>
      <button className={css.delContact} onClick={() => dispatch(deleteContact(contact.id))}>🗑️</button>
    </li>
  );
};

export default Contact;
