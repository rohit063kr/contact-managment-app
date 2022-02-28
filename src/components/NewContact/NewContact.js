import React, { Fragment, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import sendData from '../../store/actions/sendData';
import checkNewContactFormValid from '../../store/actions/checkNewContactFormValid';

import styles from './NewContact.module.scss';
import Input from '../UI/Input';
import ModalFormWrapper from '../ModalForm/ModalFormWrapper';

const NewContact = function () {
  const dispatch = useDispatch();

  const formValidState = useSelector(
    store => store.newContactFormValidateSlice
  );
  const userId = useSelector(store => store.userDataReducer.id);

  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const tagsInputRef = useRef();

  const checkFormValid = function (e) {
    const inputedPhoneNumber = phoneInputRef.current.value;
    const inputedName = nameInputRef.current.value;

    return dispatch(checkNewContactFormValid(inputedPhoneNumber, inputedName));
  };

  const formSubmitHandler = function (e, closeFormHandler) {
    e.preventDefault();
    const { isValid } = checkFormValid();

    if (!isValid) return;

    const data = {
      name: nameInputRef.current.value,
      phone: phoneInputRef.current.value,
      tags: tagsInputRef.current.value,
    };

    dispatch(sendData(data, userId));
    closeFormHandler();
  };

  return (
    <ModalFormWrapper
      onSubmit={formSubmitHandler}
      submitBtnValue={
        <Fragment>
          <i
            className={`fas fa-phone-alt ${styles['new-contact__btn-icon']}`}
          />
          Add
        </Fragment>
      }
    >
      <Input
        type="text"
        id="name"
        label="Name"
        ref={nameInputRef}
        errSite={formValidState?.errSite}
      />
      <Input
        type="number"
        id="num"
        label="Phone number"
        ref={phoneInputRef}
        errSite={formValidState?.errSite}
      />
      <Input type="text" id="tag" label="tags" ref={tagsInputRef} />
    </ModalFormWrapper>
  );
};

export default NewContact;
