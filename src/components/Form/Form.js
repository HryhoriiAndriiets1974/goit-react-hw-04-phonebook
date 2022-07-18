import { Component } from "react";
import css from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const {name, value} = e.currentTarget;
    this.setState({
      [name]: value,
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    })
  }

  render () {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form__label}>
          Name :
          <input
            className={css.form__input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.form__label}>
          Number :
          <input
            className={css.form__input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    )
  }
}

export default Form;
