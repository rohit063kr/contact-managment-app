import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sendAuthentication from '../../store/actions/sendAuthentication';

import ModalFormWrapper from '../ModalForm/ModalFormWrapper';
import Input from '../UI/Input';

const StartupForm = function () {
  const [isInLoginMode, setIsInLoginMode] = useState(false);
  const dispatch = useDispatch();

  // Common
  const emailAddressInputREf = useRef();
  const passwordInputRef = useRef();

  // Only-in Signup option
  const nameInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const messageStyle = {
    color: '#8a8a8a',
    fontSize: '13px',
    marginTop: '10px',
  };

  const toggleFormMode = function () {
    setIsInLoginMode(state => !state);
  };

  const loginModeMsg = (
    <p style={messageStyle}>
      Not our member yet?{' '}
      <a href="#" onClick={toggleFormMode}>
        Signup
      </a>
    </p>
  );

  const singupModeMsg = (
    <p style={messageStyle}>
      Already have an account here?{' '}
      <a href="#" onClick={toggleFormMode}>
        Login
      </a>
    </p>
  );

  const formSubmitHandler = function (e, closeFormHandler) {
    e.preventDefault();

    const enteredEmail = emailAddressInputREf.current.value;
    const enteredName = nameInputRef?.current?.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredConfirmPassword = confirmPasswordInputRef?.current?.value;

    const validateEnteredName = function () {
      if (enteredName.length <= 1)
        return { isValid: false, msg: 'Please write valid name' };

      return { isValid: true };
    };

    const validateEnteredEmail = function () {
      if (
        !enteredEmail.includes('@') ||
        !(enteredEmail.includes('.com') || enteredEmail.includes('.in'))
      )
        return { isValid: false, msg: 'Please write valid email address' };

      return { isValid: true };
    };

    dispatch(
      sendAuthentication(
        enteredEmail,
        enteredPassword,
        enteredName,
        isInLoginMode
      )
    );

    closeFormHandler();
  };

  return (
    <ModalFormWrapper
      onSubmit={formSubmitHandler}
      submitBtnValue={isInLoginMode ? 'Login' : 'Signup'}
      preventClosing={true}
    >
      {!isInLoginMode && (
        <Input type="text" id="name" label="Name" ref={nameInputRef} />
      )}
      <Input
        type="email"
        id="email"
        label="Email address"
        ref={emailAddressInputREf}
      />
      <Input type="text" id="num" label="Password" ref={passwordInputRef} />
      {!isInLoginMode && (
        <Input
          type="text"
          id="cPassword"
          label="Confirm password"
          ref={confirmPasswordInputRef}
        />
      )}
      {isInLoginMode ? loginModeMsg : singupModeMsg}
    </ModalFormWrapper>
  );
};

export default StartupForm;
