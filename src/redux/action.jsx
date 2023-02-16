import { createAction, nanoid } from '@reduxjs/toolkit';

export const AddContact = createAction(
    'contacts/addContact',
    (nameTxt, numberTxt) => { 
        return {
            type: 'contacts/addContact',
            payload: {
                id: nanoid(5),
                name: nameTxt,
                number: numberTxt,
            }
        }
    }
);

export const deleteContact = createAction('contacts/deleteContact');
export const setFilter = createAction('filter/setFilter');