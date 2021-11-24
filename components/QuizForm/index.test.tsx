import React from 'react';
import { shallow } from "enzyme";
import QuizForm from "./index";

describe('QuizForm component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<QuizForm />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders Heading text', () => {
    const wrapper = shallow(<QuizForm />);

    expect(wrapper.text()).toContain('Random Quiz Generator');
  });

  it('Renders an input', () => {
    const wrapper = shallow(<QuizForm />);

    expect(wrapper.find('Input')).toHaveLength(1);
  });

  it('input is username', () => {
    const wrapper = shallow(<QuizForm />);

    expect(wrapper.find('Input').first().prop('name')).toBe('username');
  });

});