import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsOperations from '../../redux/contactsOperations';
import { getContacts } from 'redux/selector';
import { BtnForm, Form, InputForm, TitleForm } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already on the list!`);
    }

    if (!name && !number) {
      return alert('Enter name and number!');
    }
    dispatch(contactsOperations.addContact({ name, number }));
    form.reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TitleForm>Name</TitleForm>
        <label>
          <InputForm
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <TitleForm>Number</TitleForm>
        <label>
          <InputForm
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <BtnForm type="submit">Add contact</BtnForm>
      </Form>
    </div>
  );
}
