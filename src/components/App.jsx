import { ContactForm } from './ContactForm/ContactForm';
import { FilterForm } from './FilterForm/FilterForm';
import { ContactDelete } from './ContactDelete/ContactDelete';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2> Contacts</h2>
      <FilterForm />
      <ContactDelete
      />
    </div>
  );
};