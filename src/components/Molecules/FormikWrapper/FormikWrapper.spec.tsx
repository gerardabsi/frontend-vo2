import * as React from 'react';
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { Box, FormControlLabel, Radio } from '@material-ui/core';
import { Field } from 'formik';
import { RadioGroup, TextField } from 'formik-material-ui';
import { object, string } from 'yup';
import userEvent from '@testing-library/user-event';
import { FormikStep } from '../../Atom/FormikStep/FormikStep';
import { FormikWrapper } from './FormikWrapper';

let firstStep: RenderResult;
let thirdStep: RenderResult;
describe('<FormikStep />', () => {
  const handleSubmit = jest.fn();
  it('Should submit the form personal details which is the first step', async () => {
    firstStep = render(
      <FormikWrapper
        initialValues={{
          firstName: '',
          lastName: '',
        }}
        onSubmit={handleSubmit}>
        <FormikStep
          label="Personal Info"
          validationSchema={object({
            firstName: string().required('Please enter your first name'),
            lastName: string().required('Please enter your last name'),
          })}>
          <Box paddingBottom={2} marginTop={5}>
            <Field id="firstName" fullWidth name="firstName" component={TextField} label="First Name" />
          </Box>
          <Box paddingBottom={2}>
            <Field id="lastName" fullWidth name="lastName" component={TextField} label="Last Name" />
          </Box>
        </FormikStep>
      </FormikWrapper>,
    );
    userEvent.type(firstStep.getByLabelText('first name', { exact: false, selector: 'input' }), 'Gerard');
    userEvent.type(firstStep.getByLabelText('Last Name', { exact: false, selector: 'input' }), 'Absi');
    expect(firstStep.getByText('Personal Info')).toBeInTheDocument();
    userEvent.click(firstStep.getByRole('button', { name: /submit/i }));

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          firstName: 'Gerard',
          lastName: 'Absi',
        },
        expect.anything(),
      ),
    );
  });
  it('has to select a salary and submit', async () => {
    thirdStep = render(
      <FormikWrapper
        initialValues={{
          salary: '',
        }}
        onSubmit={handleSubmit}>
        <FormikStep
          label="Salary"
          validationSchema={object({
            salary: string().required('Please select your salary range'),
          })}>
          <Box paddingBottom={2}>
            <Field label="salary" id="salary" component={RadioGroup} name="salary">
              <FormControlLabel value="0 - 1.000" control={<Radio />} label="0 - 1.000" />
              <FormControlLabel value="1.000 - 2.000" control={<Radio />} label="1.000 - 2.000" />
              <FormControlLabel value="2.000 - 3.000" control={<Radio />} label="2.000 - 3.000" />
              <FormControlLabel value="3.000 - 4.000" control={<Radio />} label="3.000 - 4.000" />
              <FormControlLabel value="Mehr als 4.000" control={<Radio />} label="Mehr als 4.000" />
            </Field>
          </Box>
        </FormikStep>
      </FormikWrapper>,
    );
    expect(thirdStep.getByText('Salary')).toBeInTheDocument();
    const radio = thirdStep.getByLabelText('Mehr als 4.000');
    fireEvent.change(radio, { target: { value: 'Mehr als 4.000' } });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(radio.value).toBe('Mehr als 4.000');
  });
});
