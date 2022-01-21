/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer,{act} from 'react-test-renderer';

const tree = renderer.create(<App />)


it('renders correctly', () => {
  renderer.create(<App />);
});

test('renders App', () => {
  expect(tree).toMatchSnapshot();
});


test('button pressed', () => {
  // press button
  const button  = tree.root.findByProps({ testID: 'myButtonSum' }).props;
  act(() => button.onPress());
  
  const text  = tree.root.findByProps({ testID: 'myTextResult' }).props;
  expect(text.children).toEqual(12)
})

