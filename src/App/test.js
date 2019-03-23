import React from 'react';
import { shallow } from 'enzyme';
import App from './';
import slideImages from '../data';

describe('App', () => {
	let element;

	beforeEach(() => {
		element = shallow(<App />);
	});
	it('should render something', () => {
		expect(element.find('Container')).toHaveLength(1);
	});

	it('should have a title', () => {
		expect(
			element
				.find('Container')
				.find('Title')
				.dive()
				.text()
		).toEqual('Simple React Carousel');
	});

	it('should have a slideshow and pass it some data', () => {
		expect(element.find('SlideShow')).toHaveLength(1);
		expect(element.find('SlideShow').prop('images')).toBe(slideImages);
	});
});
