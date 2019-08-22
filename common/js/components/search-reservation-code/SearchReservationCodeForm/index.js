import React from 'react';
import {
  withFormik,
} from 'formik';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import Error from '@components/common/Error';
import DatePickerField from '@components/common/DatePickerField';
import TextInput from '@components/common/TextInput';
import FieldContainer from '@components/common/FieldContainer';
import QuestionTitle from '@components/common/QuestionTitle';
import i18n from '@lib/i18n';
import validatorCode from '@config/validator/validatorCode';

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DivContainer = styled.div`
  width: 100%;
  display: flex;
  * {
    :first-child {
      margin-right: 5px;
    }
    :last-child {
      margin-left: 5px;
    }
  }
`;

const FIELD_NAMES = {
  firstName: 'first_name',
  lastName: 'last_name',
  checkin: 'checkin',
  checkout: 'checkout',
  phoneNumber: 'phone_number',
};

const VALIDATIONS = [{
  key: 'first_name',
  error: i18n.t(`validator:${validatorCode.required}`, { attribute: i18n.t('common:search_reservation_code.first_name') }),
},{
  key: 'last_name',
  error: i18n.t(`validator:${validatorCode.required}`, { attribute: i18n.t('common:search_reservation_code.last_name') }),
},{
  key: 'checkin',
  error: i18n.t(`validator:${validatorCode.required}`, { attribute: i18n.t('common:search_reservation_code.checkin') }),
},{
  key: 'checkout',
  error: i18n.t(`validator:${validatorCode.required}`, { attribute: i18n.t('common:search_reservation_code.checkout') }),
},{
  key: 'phone_number',
  error: i18n.t(`validator:${validatorCode.required}`, { attribute: i18n.t('common:search_reservation_code.phone_number') }),
}];

const SearchReservationCodeForm = (props) => {
  const {
    handleSubmit,
    handleChange,
    errors,
    setFieldValue,
    values,
  } = props;
  const errorLength = Object.keys(errors).length;
  return (
    <form onSubmit={handleSubmit}>
      {i18n.t('common:search_reservation_code.description')}
      <FieldContainer>
        <div>
          <Error error={(errors.first_name) && errors.first_name} />
          <QuestionTitle isRequire noQuestion isCenter>
            {i18n.t('common:search_reservation_code.first_name')}
          </QuestionTitle>
        </div>
        <DivContainer>
          <TextInput
            onChange={handleChange}
            name={FIELD_NAMES.firstName}
            id={FIELD_NAMES.firstName}
          />
        </DivContainer>
      </FieldContainer>
      <FieldContainer>
        <div>
          <Error error={(errors.last_name) && errors.last_name} />
          <QuestionTitle isRequire noQuestion isCenter>
            {i18n.t('common:search_reservation_code.last_name')}
          </QuestionTitle>
        </div>
        <DivContainer>
          <TextInput
            onChange={handleChange}
            name={FIELD_NAMES.lastName}
            id={FIELD_NAMES.lastName}
          />
        </DivContainer>
      </FieldContainer>
      <FieldContainer>
        <div>
          <Error error={(errors.checkin) && errors.checkin} />
          <QuestionTitle isRequire noQuestion isCenter>
            {i18n.t('common:search_reservation_code.checkin')}
          </QuestionTitle>
        </div>
        <DatePickerField
          name={FIELD_NAMES.checkin}
          value={values.checkin}
          onChange={setFieldValue}
        />
      </FieldContainer>
      <FieldContainer>
        <div>
          <Error error={(errors.checkout) && errors.checkout} />
          <QuestionTitle isRequire noQuestion isCenter>
            {i18n.t('common:search_reservation_code.checkout')}
          </QuestionTitle>
        </div>
        <DatePickerField
          name={FIELD_NAMES.checkout}
          value={values.checkout}
          onChange={setFieldValue}
        />
      </FieldContainer>
      
      <FieldContainer>
        <div>
          <Error error={(errors.phone_number) && errors.phone_number} />
          <QuestionTitle isRequire noQuestion isCenter>
            {i18n.t('common:search_reservation_code.phone_number')}
          </QuestionTitle>
        </div>
        <DivContainer>
          <TextInput
            type="tel"
            onChange={handleChange}
            name={FIELD_NAMES.phoneNumber}
            id={FIELD_NAMES.phoneNumber}
            maxLength="4"
            pattern="\d*"
            placeholder="0000"
          />
        </DivContainer>
      </FieldContainer>

      <Center>
        <Button
          type="submit"
          content="Search"
          active
        />
      </Center>
    </form>
  );
};
export default withFormik({
  mapPropsToValues: () => {
    const obj = {};
    Object.keys(FIELD_NAMES).forEach((keyName) => {
      const key = FIELD_NAMES[keyName];
      obj[key] = '';
    });

    return obj;
  },
  handleSubmit: (values, { props, setFieldError, setErrors }) => {
    // const params = {
    //   cardno: values[FIELD_NAMES.cardNumber],
    //   expire: `20${values[FIELD_NAMES.expireYear]}${values[FIELD_NAMES.expireMonth]}`,
    //   securitycode: values.security_code,
    // };
    console.log(values);
    let isNG = false;

    setErrors({});
    VALIDATIONS.forEach((prop) => {
      const value = values[prop.key];
      if (!value) {
        setFieldError(prop.key, prop.error);
        isNG = true;
      }
    });
    if (isNG) return false;
    // props.charge(values);
  }
})(SearchReservationCodeForm);