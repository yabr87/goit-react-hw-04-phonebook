import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { setLocalStorage, getLocalStorage } from './utils/storage';
import { formatUserTel, checkNameInPhonebook } from './utils/addContactsUtils';
import { fiteredContacts } from './utils/fiteredContacts';

const App = () => {
  const [contacts, setContacts] = useState(() =>
    getLocalStorage('myContacts')?.length ? getLocalStorage('myContacts') : []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setLocalStorage('myContacts', contacts);
  }, [contacts]);

  const addContacts = (userName, userTel) => {
    if (checkNameInPhonebook(userName, contacts)) return;

    setContacts(prevState => {
      return [
        {
          id: nanoid(4),
          name: userName,
          number: formatUserTel(userTel),
        },
        ...prevState,
      ];
    });
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <div className="AppWrapper">
      <h1>Phonebook</h1>
      <ContactForm addContacts={addContacts} />
      <h2>Contacts</h2>
      <Filter filterValue={filter} onFilterInputChange={setFilter} />
      <ContactList
        contacts={fiteredContacts(filter, contacts)}
        deleteContacts={deleteContacts}
      />
    </div>
  );
};

export default App;
