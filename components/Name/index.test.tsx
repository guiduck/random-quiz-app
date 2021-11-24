import { shallow } from "enzyme";
import Name from ".";

describe('AuthForm component', () => {
    it('Mounts successfully', () => {
        const wrapper = shallow(<Name />);

        expect(wrapper.length).toBe(1);
    });
});