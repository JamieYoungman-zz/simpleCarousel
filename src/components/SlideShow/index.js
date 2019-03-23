import React from 'react';
import styled from 'styled-components';

const Slide = styled.div`
	width: 500px;
`;
Slide.displayName = 'Slide';

const SlideShow = ({ images }) => {
	console.log('test');

	return images.map(image => {
		return <Slide>{image}</Slide>;
	});
};

export default SlideShow;
