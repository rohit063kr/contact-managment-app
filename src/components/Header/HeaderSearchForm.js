import React from 'react';
import { useDispatch } from 'react-redux';
import { userSliceActions } from '../../store/Users-slice/user-slice';

import styles from './HeaderSearchForm.module.scss';
import Input from '../UI/Input';

const HeaderSearchFrom = function (props) {
  const dispatch = useDispatch();

  const searchInputChangeHandler = function (e) {
    dispatch(userSliceActions.changeFilterKeyword(e.target.value));
  };

  return (
    <form className={styles['header__form']}>
      <i className="fas fa-search"></i>
      <Input
        type="text"
        placeholder="Search contact or tags"
        onChange={searchInputChangeHandler}
      />
    </form>
  );
};

export default HeaderSearchFrom;
