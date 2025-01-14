import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Person from './person';
import 'element-internals-polyfill';

test('renders Person component', () => {
  const wrapper = render(<Person />);
  expect(wrapper).toBeTruthy();
});