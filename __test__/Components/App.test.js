import React from 'react';
import App from '../../src/App';
import { mount } from 'enzyme';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import toJson from 'enzyme-to-json'; //added this line
import data from '../../src/fake-data/data';

const wrapper = mount(<App data={data} />);

describe('rendering components', () => {
  test('it should match with the snapshot', () => {
    const header = <p className="lg:text-base md:text-sm sm:text-xs text-white">B</p>;
    expect(wrapper.contains(header)).toEqual(true);
  });
});
