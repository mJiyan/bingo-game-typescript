import React from 'react';
import App from '../../src/App';
import { mount } from 'enzyme';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import toJson from 'enzyme-to-json'; //added this line

const wrapper = mount(<App />);

describe('rendering components', () => {
  test('it should match with the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
