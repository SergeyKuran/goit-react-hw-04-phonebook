import { useState } from 'react';
import { useEffect } from 'react';

// Імпорт компонентів
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

// Імпорт стилів
import css from '../components/App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const getData = localStorage.getItem('contacts');
    const dataParse = JSON.parse(getData);
    if (dataParse) {
      setContacts(dataParse);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // // Метод виделення об'єкта з масиву
  const deleteObject = id => {
    setContacts(prevContacts => prevContacts.filter(el => el.id !== id));
  };

  // Метод добавлення об'єкта у масив
  const addObject = obj => {
    // Умова
    const find = contacts.find(
      el => el.name.toLowerCase() === obj.name.toLowerCase()
    );

    if (find) {
      return alert(`${obj.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, obj]);
  };

  // Метод стягування данних при пошуку
  const onChange = evt => setFilter(evt.target.value);

  return (
    <>
      <div className={css.phonebook}>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={addObject} />
      </div>

      <div className={css.contacts}>
        <h3>Contacts</h3>
        <Filter filter={filter} onChange={onChange} />

        <ContactList
          contacts={contacts}
          filter={filter}
          deleteObject={deleteObject}
        />
      </div>
    </>
  );
};

export default App;
