import { userSliceActions } from '../Users-slice/user-slice';

export const fetchData = function () {
  return async dispatch => {
    const response = await fetch(
      'https://contact-management-app-29bc3-default-rtdb.firebaseio.com/contacts.json'
    );
    const data = await response.json();
    const contactData = [];
    for (const item of Object.entries(data)) {
      contactData.push({ id: item[0], ...item[1] });
    }

    dispatch(userSliceActions.replaceContactsData(contactData));
  };
};
