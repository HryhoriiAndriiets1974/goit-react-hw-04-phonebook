import { Component } from "react";
import {nanoid} from 'nanoid';
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const inicialeContacts = JSON.parse(localStorage.getItem('contacts'));
    if (inicialeContacts) {
      this.setState({contacts: inicialeContacts});
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      filter: '',
    }));
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        return alert(`${contact.name} is already in contacts`);
      }
      if (contacts.some(contact => contact.number === number)) {
        return alert(`${contact.number} is already in contacts`);
      }
      return {contacts: [contact, ...contacts],};
    });
  };


  render () {
    const { contacts, filter} = this.state;
    const visibleContacts = this.filterContacts();
    return (
      <div className={css.wrapper}>
        <h1 className={css.wrapper__title}>Phonebook</h1>
        <Form
          onSubmit={this.addContact}
        />
        <h1 className={css.wrapper__title}>Contacts :</h1>
        <Filter
          value={filter}
          onChange={this.changeFilter}
        />
       {  contacts.length
            ? <ContactList
                contacts={visibleContacts}
                onDeleteContact={this.delContact}
              />
            : <p className={css.wrapper__message}>Your phonebook is empty !!!</p>
        }
      </div>
    )
  }
};

export default App;
