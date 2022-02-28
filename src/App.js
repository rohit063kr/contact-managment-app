import React, { Fragment, useEffect } from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modalStateActions } from './store/ModalSlices/modal-slice';
import { fetchData } from './store/actions/fetchData';

import './App.css';

// Components
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';

import NewContact from './components/NewContact/NewContact';
import StartupForm from './components/StartupForm/StartupForm';

const App = function () {
  const dispatch = useDispatch();

  const modalState = useSelector(store => store.modalReducer);

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Fragment>
          {modalState.isNewContactFormRequired && <NewContact />}
          {modalState.isStartupFormModalRequired && <StartupForm />}
        </Fragment>,
        document.getElementById('modal-root')
      )}
      <Navigation />
      <Header />
      <Contacts />
    </Fragment>
  );
};

export default App;
