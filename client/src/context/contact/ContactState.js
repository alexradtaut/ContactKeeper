import React, { useReducer } from "react";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill",
        email: "jill@xxx.com",
        phone: "111-111-2222",
        type: "personal"
      },
      {
        id: 2,
        name: "Sara",
        email: "Sara@xxx.com",
        phone: "111-111-2222",
        type: "personal"
      },
      {
        id: 3,
        name: "Harry",
        email: "Harry@xxx.com",
        phone: "111-111-2222",
        type: "professional"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = new Date().valueOf();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Cotanct
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filters

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        deleteContact
      }}
    >
      {props.children}
    </contactContext.Provider>
  );
};

export default ContactState;
