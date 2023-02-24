import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './ContactListItem.styled';
//import { nanoid } from 'nanoid';

export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <Item >
      {name}: {number}
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Item>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
