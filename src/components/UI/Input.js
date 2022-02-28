import React, { forwardRef } from 'react';

import styles from './Input.module.scss';

const Input = forwardRef(function (props, ref) {
  return (
    <div className={styles['input__container']}>
      <label className={styles['input__label']} htmlFor={props.id}>
        {props.label}
      </label>

      <input
        ref={ref}
        type={props.type}
        className={`${styles['input__input']} ${
          props.errSite &&
          props.errSite === props.label &&
          styles['input__invalid']
        }`}
        placeholder={props.placeholder}
        onChange={props.onChange}
      >
        {props.children}
      </input>
    </div>
  );
});

export default Input;
