import * as React from 'react';
import { render } from '@testing-library/react-native';

import ButtonExample from '../components/atoms/ButtonExample';

test('Button example', async () => {
  const { getByText } = render(<ButtonExample />);

  expect(getByText('Example')).not.toBeEmpty();
});
