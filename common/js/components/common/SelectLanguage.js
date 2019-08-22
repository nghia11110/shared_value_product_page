import React from 'react';
import { Button } from 'semantic-ui-react';
import { LANGUAGE_OPTIONS } from '@constants';
import Util from '@utils/util';
import i18n from '@lib/i18n';


const SelectLanguage = () => {
  return (
    <Button.Group>
      {
        LANGUAGE_OPTIONS.map(l => (
          <Button
            key={l.key}
            onClick={() => {
              i18n.changeLanguage(l.value);
              Util.setLanguage(l.value);
              if (typeof document !== 'undefined') {
                window.location.reload();
              }
            }}
          >
            {l.key}
          </Button>
        ))
      }
    </Button.Group>
  );
};

export default SelectLanguage;

