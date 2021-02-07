import { Box, Card, CardContent, FormControlLabel, FormLabel, Radio } from '@material-ui/core';
import { Field } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import React from 'react';
import { object, string } from 'yup';
import { FormikStep } from '../../Atom/FormikStep/FormikStep';
import { FormikWrapper } from '../../Molecules/FormikWrapper/FormikWrapper';
import { PhoneInputField } from '../../Atom/PhoneInputField/PhoneInputField';

const sleep = (time: number) => new Promise((acc) => setTimeout(acc, time));

export default function RegistrationForm() {
  return (
    <Card>
      <CardContent>
        <FormikWrapper
          initialValues={{
            firstName: '',
            lastName: '',
            phone: '',
            salary: '',
          }}
          onSubmit={async (values) => {
            await sleep(2000);
            // eslint-disable-next-line no-console
            console.log('values', values);
          }}>
          <FormikStep
            label="Personal Info"
            validationSchema={object({
              firstName: string().required('Please enter your first name'),
              lastName: string().required('Please enter your last name'),
            })}>
            <Box paddingBottom={2}>
              <Field fullWidth name="firstName" component={TextField} label="First Name" />
            </Box>
            <Box paddingBottom={2}>
              <Field fullWidth name="lastName" component={TextField} label="Last Name" />
            </Box>
          </FormikStep>
          <FormikStep
            label="Phone Number"
            validationSchema={object({
              phone: string().required('Please enter your phone number'),
            })}>
            <Box paddingBottom={2}>
              <Field name="phone" component={PhoneInputField} />
            </Box>
          </FormikStep>
          <FormikStep
            label="Salary"
            validationSchema={object({
              salary: string().required('Please select your salary range'),
            })}>
            <Box paddingBottom={2}>
              <Field component={RadioGroup} name="salary">
                <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
                <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
                <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
                <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
                <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
              </Field>
            </Box>
          </FormikStep>
        </FormikWrapper>
      </CardContent>
    </Card>
  );
}
