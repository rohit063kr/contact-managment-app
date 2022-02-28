import { userSliceActions } from '../Users-slice/user-slice';
import fetchIdentity from '../../store/actions/fetchIdentity';

const sendAuthentication = function (email, password, name, isInLoginMode) {
  return async dispatch => {
    try {
      // Authentication
      const response = await fetch(
        isInLoginMode
          ? 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXsTdJqf288nAquoauCu8Y_7UxJlEJ7TQ'
          : 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXsTdJqf288nAquoauCu8Y_7UxJlEJ7TQ',
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );
      const data = await response.json();
      const id = data.localId;

      // Storing|Getting authentication data
      if (!isInLoginMode)
        await fetch(
          `https://contact-management-app-29bc3-default-rtdb.firebaseio.com/users/${id}.json`,
          {
            method: 'PATCH',
            body: JSON.stringify({ UID: data.idToken, name }),
          }
        );

      dispatch(userSliceActions.extractIdentity({ id }));

      if (isInLoginMode) {
        const contactRes = await fetch(
          `https://contact-management-app-29bc3-default-rtdb.firebaseio.com/contacts/${id}.json`
        );
        const contactData = await contactRes.json();
        const contactDataArr = [];
        for (const contact of Object.entries(contactData))
          contactDataArr.push({ id: contact[0], ...contact[1] });

        dispatch(userSliceActions.replaceContactsData(contactDataArr));
      }

      dispatch(fetchIdentity(id));
    } catch (err) {
      console.log(err);
    }

    return Promise.resolve();
  };
};

export default sendAuthentication;
