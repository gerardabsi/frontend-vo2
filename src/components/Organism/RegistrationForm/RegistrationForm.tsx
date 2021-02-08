import { Box, Container, FormControlLabel, Radio } from '@material-ui/core';
import { Field, FormikValues } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import React from 'react';
import { object, string } from 'yup';
import { FormikStep } from '../../Atom/FormikStep/FormikStep';
import { FormikWrapper } from '../../Molecules/FormikWrapper/FormikWrapper';
import { PhoneInputField } from '../../Atom/PhoneInputField/PhoneInputField';

interface RegistrationFormProps {
  initialValues: any;
  onSubmit(values: FormikValues): void;
}
export default function RegistrationForm({
  initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    salary: '',
  },
  onSubmit,
}: RegistrationFormProps) {
  return (
    <Container>
      <FormikWrapper initialValues={initialValues} onSubmit={async (values) => onSubmit(values)}>
        <FormikStep
          label="Personal Info"
          validationSchema={object({
            firstName: string().required('Please enter your first name'),
            lastName: string().required('Please enter your last name'),
          })}>
          <Box paddingBottom={2} marginTop={5}>
            <Field id="firstName" fullWidth name="firstName" type="text" component={TextField} label="First Name" />
          </Box>
          <Box paddingBottom={2}>
            <Field id="lastName" fullWidth name="lastName" component={TextField} label="Last Name" />
          </Box>
        </FormikStep>
        <FormikStep
          label="Phone Number"
          validationSchema={object({
            phoneNumber: string().required('Please enter your phone number'),
          })}>
          <Box paddingBottom={2} marginTop={5}>
            <Field id="phoneNumber" name="phoneNumber" component={PhoneInputField} label="Phone Number" />
          </Box>
        </FormikStep>
        <FormikStep
          label="Salary"
          validationSchema={object({
            salary: string().required('Please select your salary range'),
          })}>
          <Box paddingBottom={2}>
            <Field label="Salary" component={RadioGroup} name="salary">
              <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
              <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
              <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
              <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
              <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
            </Field>
          </Box>
        </FormikStep>
      </FormikWrapper>
    </Container>
  );
}
