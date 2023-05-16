import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { ContactFilter } from '../ContactFilter/ContactFilter';
import Login from '../Login/Login';

function Authorization() {
  const user = useSelector(state => state.auth.user);

  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/contacts" />} />
      <Route
        path="/contacts"
        element={
          <>
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactFilter />
              <ContactList />
            </div>
          </>
        }
      />
    </Routes>
  );
}

export default Authorization;
