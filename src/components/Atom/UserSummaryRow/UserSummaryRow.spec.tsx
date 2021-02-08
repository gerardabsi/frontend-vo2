import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { UserSummaryRow } from './UserSummaryRow';

let documentBody: RenderResult;
describe('<UserSummaryRow />', () => {
  beforeEach(() => {
    documentBody = render(<UserSummaryRow title="testing title" value="testing value" />);
  });
  it('shows show text passed', () => {
    expect(documentBody.getByText('testing title')).toBeInTheDocument();
    expect(documentBody.getByText('testing value')).toBeInTheDocument();
  });
});
