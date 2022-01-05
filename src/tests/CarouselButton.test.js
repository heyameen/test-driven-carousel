import { configure, shallow } from 'enzyme'; // 2

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CarouselButton from '../CarouselButton';
import React from 'react'; // 1

configure({ adapter: new Adapter() });

describe('CarouselButton', () => {
  it('renders a <button>', () => {
    const wrapper = shallow(<CarouselButton />); // 3
    expect(wrapper.type()).toBe('button');
  });
});