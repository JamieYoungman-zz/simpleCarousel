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

	// it('should default to the first slide', () => {
	// 	expect(element.find('SlideWrapper')).toHaveStyleRule(
	// 		'transform',
	// 		'translateX(0px)'
	// 	);
	// });

	it('should change translateX - 500 when next button is clicled', () => {
		element.find('NextButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-500);

		element.find('NextButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-1000);

		element.find('NextButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-1500);
	});

	it('should go back to the start when it reaches the end', () => {
		element.find('NextButton').prop('onClick')();
		element.find('NextButton').prop('onClick')();
		element.find('NextButton').prop('onClick')();
		element.find('NextButton').prop('onClick')();

		expect(element.state('translateX')).toEqual(0);
	});

	it('should change translateX + 500 when previous button is clicked', () => {
		element.find('NextButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-500);

		element.find('NextButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-1000);

		element.find('PreviousButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-500);

		element.find('PreviousButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(0);
	});

	it('should go to the end when previous is clicked', () => {
		element.find('PreviousButton').prop('onClick')();
		expect(element.state('translateX')).toEqual(-1500);
	});
});
