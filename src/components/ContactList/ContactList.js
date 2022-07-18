import PropTypes from 'prop-types';
import Contact from './Contact';
import css from './ContactList.module.css';

const ContactList = ({contacts, onDeleteContact}) => {
  return (
  <ul className={css.contacts}>
  {contacts.map(({id, name, number}) => (
    <li key={id} className={css.contacts__item}>

      <Contact
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact(id)}
      />

    </li>
  ))}
</ul>)
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
}

export default ContactList;
