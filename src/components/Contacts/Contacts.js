import React from 'react';
import { useSelector } from 'react-redux';

import ContactItem from './ContactItem';

import styles from './Contacts.module.scss';

const Contacts = function () {
  const allContacts = useSelector(store => store.userDataReducer.contacts);
  const { filtereKeywords } = useSelector(store => store.userDataReducer);

  const filteredContacts = filtereKeywords
    ? allContacts.filter(
        contact =>
          contact.name.includes(filtereKeywords) ||
          contact.tags.includes(filtereKeywords)
      )
    : allContacts;

  return (
    <React.Fragment>
      <div className={styles['contacts']}>
        <ul className={styles['contacts__list']}>
          <ContactItem isLabelling={true} />
          {filteredContacts.length &&
            filteredContacts.map(info => {
              return (
                <ContactItem
                  key={info.id}
                  isLabelling={false}
                  data={{
                    names: info.name,
                    phone: info.phone,
                    tags: info.tags,
                  }}
                />
              );
            })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
