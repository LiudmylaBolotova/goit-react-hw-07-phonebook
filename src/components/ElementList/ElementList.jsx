import React from 'react';
import { deleteContact } from 'redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { BtnList, Element } from './ElementList.styled';

const ElementList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <>
      {findContacts.map(({ name, number, id }) => (
        <Element key={id}>
          {name}: {number}
          <BtnList
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </BtnList>
        </Element>
      ))}
    </>
  );
};

export default ElementList;
