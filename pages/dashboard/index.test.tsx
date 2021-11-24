import React from 'react';
import { shallow } from "enzyme";
import Dashboard from "./index";

describe('Dashboard component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders one flex item', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('Flex')).toHaveLength(1);
  });

  it('Renders Spinner', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('Spinner'));
  });

  it('Renders Quiz component', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper.find('Quiz'));
  });

});