import React from 'react';
import {shallow} from 'enzyme';
import { expect, assert } from 'chai';

import App from '../components/App';
import TodoList from '../containers/TodoList';

describe('<App/> tests', () => {
	it('renders a TodoList component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(TodoList)).to.have.length(1)
	})

	it('renders an <h1> element', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('h1')).to.have.length(1);
	})

	
})