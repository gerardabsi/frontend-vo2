import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { getIn } from 'formik';
import 'react-phone-input-2/lib/material.css';

interface FieldProps {
  name: string;
  value: string;
}
interface FormProps {
  errors: any;
  setFieldValue(name: string, phoneNumber: string): void;
  touched: boolean;
}
interface PhoneInputFieldProps {
  field: FieldProps;
  form: FormProps;
  country: string;
}
export const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  field,
  form,
  country,
}: PhoneInputFieldProps): React.ReactElement => {
  const { name, value } = field;
  const { errors, setFieldValue, touched } = form;

  const isError = getIn(touched, name) && getIn(errors, name);

  const onValueChange = (phoneNumber: string) => {
    setFieldValue(name, phoneNumber);
  };

  return (
    <div className="text-input-group  react-tel-input">
      <PhoneInput
        value={value}
        onChange={onValueChange}
        country={country}
        enableSearch
        specialLabel="Phone Number"
        inputStyle={{ width: '100%', background: 'transparent' }}
        dropdownStyle={{ zIndex: 1000 }}
      />
      <div style={{ color: '#f44336', fontSize: '0.75rem' }}>{isError && getIn(errors, name)}</div>
    </div>
  );
};
