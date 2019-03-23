import React from 'react';
import { shallow } from 'enzyme';
import SlideShow from './';

const mockImages = ['image1', 'image2', 'image3', 'image4'];

describe('SlideShow', () => {
	let element;

	beforeEach(() => {
		element = shallow(<SlideShow images={mockImages} />);
	});

	it('should render all slides', () => {
		expect(element.find('Slide')).toHaveLength(mockImages.length);
	});

	it('should have a background image on each slide', () => {
		mockImages.forEach((image, index) => {
			expect(
				element
					.find('Slide')
					.at(index)
					.prop('style')
			).toEqual({ backgroundImage: `url(${image})` });
		});
	});

	it('should display which slide is being viewed', () => {
		expect(
			element
				.find('SlideIndex')
				.at(0)
				.dive()
				.text()
		).toEqual(`Slide 1 of ${mockImages.length}`);
	});

	it('should have a next and previous button', () => {
		expect(element.find('PreviousButton')).toHaveLength(1);
		expect(element.find('NextButton')).toHaveLength(1);
	});

	it('should default to the first slide', () => {
		// console.log(element.debug());
		expect(element.find('SlideWrapper')).toHaveStyleRule(
			'transform',
			'translateX(0px)'
		);
	});
});
