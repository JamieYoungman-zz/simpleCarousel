import React from 'react';
import { shallow } from 'enzyme';
import SlideShow from './';

const mockImages = ['image1', 'image2', 'image3', 'image4'];

describe('SlideShow', () => {
	let element;

	beforeEach(() => {
		element = shallow(<SlideShow images={mockImages} />);
	});

	it('should render some images', () => {
		expect(element.find('Slide')).toHaveLength(mockImages.length);
	});
});
