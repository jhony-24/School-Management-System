import * as React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../components/atoms/Button';

test('Button example', async () => {
  const { getByText } = render(<Button text="hola que tal" />);

  expect(getByText('Pressed Button')).not.toBeEmpty();
});
