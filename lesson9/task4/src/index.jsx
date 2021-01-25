import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList.jsx';

const rootElement = document.querySelector('#root');

const users = [
  {
      id: 'id-0',
      age: 29,
      name: 'Sanya',
  },
  {
      id: 'id-1',
      age: 55,
      name: 'Sergo',
  },
  {
      id: 'id-2',
      age: 18,
      name: 'Dyadya',
  },
  {
      id: 'id-3',
      age: 45,
      name: 'Solomon',
  },
  {
      id: 'id-4',
      age: 45,
      name: 'Franklin',
  },
  {
      id: 'id-5',
      age: 43,
      name: 'John',
  },
  {
      id: 'id-6',
      age: 49,
      name: 'Andrew',
  }
];

ReactDOM.render(<UsersList users={users} />, rootElement);
