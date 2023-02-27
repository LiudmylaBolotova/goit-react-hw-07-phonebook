import React, { useEffect } from 'react';
import * as contactsOperations from '../../redux/contactsOperations';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selector';
import { BtnList, Element, ElementString } from './ElementList.styled';

const ElementList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilter);

  useEffect(() => {
    const controller = new AbortController();

    dispatch(contactsOperations.fetchContacts(), { signal: controller.signal });
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <>
      {findContacts.length > 0 ? (
        findContacts.map(({ name, number, id }) => (
          <Element key={id}>
            {name}: {number}
            <BtnList
              onClick={() => {
                dispatch(contactsOperations.deleteContact(id));
              }}
            >
              Delete
            </BtnList>
          </Element>
        ))
      ) : (
        <ElementString>
          <p>Your contacts will be displayed here</p>
        </ElementString>
      )}
    </>
  );
};

export default ElementList;
