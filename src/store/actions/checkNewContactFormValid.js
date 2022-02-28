import { newContactFormStateActions } from '../Form-reducers/new-contact-form-validate-slice';

const checkNewContactFormValid = function (inputedPhoneNumber, inputedName) {
  return dispatch => {
    if (inputedName.length > 20 || inputedName.length < 2) {
      dispatch(newContactFormStateActions.nameInputInvalid());
      return { isValid: false };
    }

    if (inputedPhoneNumber.length !== 10) {
      dispatch(newContactFormStateActions.phoneInputInvalid());
      return { isValid: false };
    }

    dispatch(newContactFormStateActions.formIsValid());
    return { isValid: true };
  };
};

export default checkNewContactFormValid;
