import React from 'react';
import styled from 'styled-components';

import slideImages from '../data';
import SlideShow from '../components/SlideShow';

const Container = styled.div`
	margin: 0 auto;
	width: 96%;
	max-width: 1200px;
`;
Container.displayName = 'Container';

const Title = styled.h2`
	text-align: center;
	width: 100%;
`;
Title.displayName = 'Title';

class App extends React.Component {
	render() {
		return (
			<Container>
				<Title>Simple React Carousel</Title>
				<SlideShow title="test" images={slideImages} />
			</Container>
		);
	}
}

export default App;
