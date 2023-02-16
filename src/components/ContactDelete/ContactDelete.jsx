import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/reducer';
import { getFilter, getItem } from 'redux/selector';
import css from './ContactDelete.module.css';


export const ContactDelete = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getItem);
  const filter = useSelector(getFilter);

  function contactsFillet() {
    if (filter === '') {
      return false;
    }

    return contacts.filter(e => e.name.toLowerCase().includes(filter));
  }

  const fillter = contactsFillet();

  const list = fillter ? fillter : contacts;

  return (
    <>
        <div className={css.wraperContactList}>
    <ul className={css.contactList}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={css.contactListItem}>
          {name}: {number}
          <button
            type="button"
            name={id}
            className={css.contactListItemBtn}
            onClick={event => dispatch(deleteContact(event.target.name))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
      </div>
      </>
  );
};





