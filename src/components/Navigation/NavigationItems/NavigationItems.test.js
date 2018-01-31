//the JSX code needs to be converted to its 
//React.createElement() alternative
import React from 'react'; 

import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adaptor: new Adaptor()});

describe('<NavigationItems />', () => {
    it('should render two <NavigationItem /> elements if not authenticated', () => {
        const wrapper = shallow(<NavigationItems />); //shallow rendering
        expect(wrapper.find(NavigationItem)).tohaveLength(2);
    });
});