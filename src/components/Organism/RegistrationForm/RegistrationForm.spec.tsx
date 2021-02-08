import * as React from 'react';
import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegistrationForm from './RegistrationForm';

let documentBody: RenderResult;

describe('<FormikStep />', () => {
  const handleSubmit = jest.fn();
  beforeAll(() => {
    documentBody = render(
      <RegistrationForm
        initialValues={{ firstName: 'Gerard', lastName: 'Absi', phoneNumber: '9613622336', salary: 'Mehr als 4.000' }}
        onSubmit={handleSubmit}
      />,
    );
  });

  it('Has to add first name and last name then submit form', async () => {
    await fireEvent.click(documentBody.getByRole('button', { name: /Next/i }));
    await fireEvent.click(documentBody.getByRole('button', { name: /Next/i }));
    await fireEvent.click(documentBody.getByRole('button', { name: /Submit/i }));
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          firstName: 'Gerard',
          lastName: 'Absi',
          phoneNumber: '9613622336',
          salary: 'Mehr als 4.000',
        },
        expect.anything(),
      ),
    );
  });
});
