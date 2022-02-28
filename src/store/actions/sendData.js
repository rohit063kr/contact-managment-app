import { userSliceActions } from '../Users-slice/user-slice';

const sendData = function (data, userId) {
  return async dispatch => {
    const response = await fetch(
      `https://contact-management-app-29bc3-default-rtdb.firebaseio.com/contacts/${userId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    dispatch(userSliceActions.addContact({ id: responseData.name, ...data }));
  };
};

export default sendData;
