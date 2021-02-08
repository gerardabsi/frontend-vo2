import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Field, Formik } from 'formik';
import { PhoneInputField } from './PhoneInputField';

let documentBody: RenderResult;
describe('<PhoneInputField />', () => {
  beforeEach(() => {
    documentBody = render(
      <Formik initialValues={{ phoneNumber: '9613622336' }} onSubmit={() => {}}>
        <Field label="phoneNumber" id="phoneNumber" name="phoneNumber" component={PhoneInputField} />
      </Formik>,
    );
  });
  it('Should Have the Value Given', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(document.querySelector('input').value).toMatch('+961 362 233 6');
  });
});
