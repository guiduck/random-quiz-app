import React from 'react';
import { shallow } from "enzyme";
import { QuizContext } from "./QuizContext";

describe('QuizContext component', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(<QuizContext.Provider value={null}><div>child</div></QuizContext.Provider> );

    expect(wrapper.length).toBe(1);
  });

});