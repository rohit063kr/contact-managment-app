import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { modalStateActions } from '../../store/ModalSlices/modal-slice';

import Button from '../UI/Button';

import styles from './ModalFormWrapper.module.scss';

const ModalFormWrapper = function (props) {
  const dispatch = useDispatch();

  const closeFormHandler = function () {
    dispatch(modalStateActions.closeModal());
  };

  const formSubmitHandler = function (e) {
    props.onSubmit(e, closeFormHandler);
  };

  return (
    <Fragment>
      <div
        className={styles['modal-form__overlay']}
        onClick={props.preventClosing ? () => {} : closeFormHandler}
      ></div>
      <form
        className={styles['modal-form']}
        onSubmit={formSubmitHandler}
        autoComplete="on"
      >
        {!props.preventClosing && (
          <button
            type="button"
            className={`${styles['modal-form__btn-cancel']}`}
          >
            <i className="fas fa-times" onClick={closeFormHandler} />
          </button>
        )}
        {props.children}

        <Button
          type="submit"
          className={`btn-outline-primary ${styles['modal-form__btn']}`}
        >
          {props.submitBtnValue}
        </Button>
      </form>
    </Fragment>
  );
};

export default ModalFormWrapper;
