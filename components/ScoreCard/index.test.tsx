import React from 'react';
import { shallow } from "enzyme";
import ScoreCard from "./index";

describe('ScoreCard', () => {
  it('Mounts successfully', () => {
    const wrapper = shallow(
      <ScoreCard
        question={null}
        answersObject={null}
        correctAnswersObject={null}
      />
    );

    expect(wrapper.length).toBe(1);
  });

  it('Renders Flex item', () => {
    const wrapper = shallow(
      <ScoreCard
        question={null}
        answersObject={null}
        correctAnswersObject={null}
      />
    );

    expect(wrapper.find('Flex')).toHaveLength(3);
  });

});