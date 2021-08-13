import * as React from 'react';
import { render } from '@testing-library/react-native';

import { Button } from '../components/atoms/Button';

test('Button example', async () => {
  const { getByText } = render(<Button />);

  expect(getByText('Pressed Button')).not.toBeEmpty();
});
