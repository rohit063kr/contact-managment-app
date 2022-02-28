import { userSliceActions } from '../Users-slice/user-slice';

const fetchIdentity = function (id) {
  return async dispatch => {
    try {
      const res = await fetch(
        `https://contact-management-app-29bc3-default-rtdb.firebaseio.com/users/${id}.json`
      );
      const resData = await res.json();

      let data;
      for (const item of Object.entries(resData)) {
        data = { id: item[0], ...item[1] };
      }

      dispatch(
        userSliceActions.extractIdentity({ id: data.id, name: data.name })
      );
    } catch (err) {
      console.log(err);
    }

    return Promise.resolve();
  };
};

export default fetchIdentity;
