import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  static propTypes = {};
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    
  filter: ''
}

  addContact = newContact => {

    this.state.contacts.filter(contact => contact.name === newContact.name)
      .length
      ? alert(`${newContact.name}: is already in contacts`)
      : this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
        }));

  
  };


  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
    }
    });
  };


    
  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  }; 
  
  getFilterContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));

  };
  
  render() {

    const filterContacts = this.getFilterContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        
        <ContactForm onSubmit={this.addContact}/>   
        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} value={this.state.filter}/>
        <ContactList contacts={filterContacts}
          onDeleteContact={this.deleteContact} />
      
      </div>
    )
  }
}


