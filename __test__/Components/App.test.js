import React from 'react';
import App from '../../src/App';
import Bingo from '../../src/Components/Bingo';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jsdom-global/register'; //at the top of file , even  , before importing react
import JSDOM from 'jsdom-global'; //at the top of file , even  , before importing react
import toJson from 'enzyme-to-json'; //added this line
import data from '../../src/fake-data/data';

const wrapper = mount(<App data={data} test={true} />);
const bingoWrapper = renderer.create(<Bingo />);

describe('rendering components', () => {
  test('it should contain the Bingo component', () => {
    expect(wrapper.contains(bingoWrapper)).toEqual(true);
  });

  test('it should contain the middle bingo box component', () => {
    const middleBox = (
      <div className="border border-black p-2 sm:p-1 bg-white" key={12}>
        <div className="flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 border-4 sm:border-2 border-black rounded-full">
          <header className="flex flex-col items-end ">
            <p className="text-sm md:text-sm sm:text-xs lg:p-1 md:p-1 lg:mt-1 md:p-1 fixed" />
          </header>
          <div className="flex flex-row items-center justify-center cursor-pointer h-screen w-full px-2 ">
            <p className="lg:text-base md:text-sm sm:text-xs">CONF CALL 😷 BINGO</p>
          </div>
        </div>
      </div>
    );

    expect(wrapper.contains(middleBox)).toEqual(true);
  });

  test('it should find the slot', () => {
    const slot = wrapper.find('[data-testid="test-box-1"]');
    expect(slot.length).toEqual(1);
  });
});

describe('executing functionalities', () => {
  test('the slot should has line-through after selected', () => {
    const slot = wrapper.find('[data-testid="test-button-1"]');
    slot.simulate('click');
    const text = wrapper.find('[data-testid="test-content-1"]');
    expect(text.props().className).toEqual(
      'lg:text-base md:text-sm sm:text-xs opacity-20 line-through ',
    );
  });

  test('the slot should not has line-through after de-selected', () => {
    const slot = wrapper.find('[data-testid="test-button-1"]');
    slot.simulate('click');
    const text = wrapper.find('[data-testid="test-content-1"]');
    expect(text.props().className).toEqual('lg:text-base md:text-sm sm:text-xs ');
  });

  test('the slot background color should change after x-axis bingo', () => {
    const slot0 = wrapper.find('[data-testid="test-button-0"]');
    const slot1 = wrapper.find('[data-testid="test-button-1"]');
    const slot2 = wrapper.find('[data-testid="test-button-2"]');
    const slot3 = wrapper.find('[data-testid="test-button-3"]');
    const slot4 = wrapper.find('[data-testid="test-button-4"]');

    slot0.simulate('click');
    slot1.simulate('click');
    slot2.simulate('click');
    slot3.simulate('click');
    slot4.simulate('click');

    const box = wrapper.find('[data-testid="test-box-1"]');
    expect(box.props().className).toEqual(
      'flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 bg-mainColor ',
    );
  });

  test('the slot background color should change after positive-diagnol bingo', () => {
    const slot6 = wrapper.find('[data-testid="test-button-6"]');
    const slot18 = wrapper.find('[data-testid="test-button-18"]');
    const slot24 = wrapper.find('[data-testid="test-button-24"]');

    slot6.simulate('click');
    slot18.simulate('click');
    slot24.simulate('click');

    const box = wrapper.find('[data-testid="test-box-0"]');
    expect(box.props().className).toEqual(
      'flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 bg-mainColor ',
    );
  });

  test('the slot background color should change after negative-diagnol bingo', () => {
    const slot8 = wrapper.find('[data-testid="test-button-8"]');
    const slot16 = wrapper.find('[data-testid="test-button-16"]');
    const slot20 = wrapper.find('[data-testid="test-button-20"]');

    slot8.simulate('click');
    slot16.simulate('click');
    slot20.simulate('click');

    const box = wrapper.find('[data-testid="test-box-8"]');
    expect(box.props().className).toEqual(
      'flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 bg-mainColor ',
    );
  });

  test('the slot background color should change after y-axis bingo', () => {
    const slot11 = wrapper.find('[data-testid="test-button-11"]');
    const slot21 = wrapper.find('[data-testid="test-button-21"]');

    slot11.simulate('click');
    slot21.simulate('click');

    const box = wrapper.find('[data-testid="test-box-8"]');
    expect(box.props().className).toEqual(
      'flex flex-col h-32 w-32 md:h-32 md:w-32 sm:w-14 sm:h-14 bg-mainColor ',
    );
  });
});
