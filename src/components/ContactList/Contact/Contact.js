import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({id, name, number, onDeleteContact}) => {
  return (
    <>
        <p className={css.contacts__name}>
            {name} : ...
        <span className={css.contacts__number}>
            {number}
        </span>
        </p>
        <button
          className={css.contacts__btn}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
    </>

  )
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
}

export default Contact;
