import React from 'react';
import styled from 'styled-components';

const SlideShowWrapper = styled.div`
	position: relative;
	width: 500px;
	margin: 0 auto;
	height: 500px;
	overflow: hidden;
	white-space: nowrap;
`;
SlideShowWrapper.displayName = 'SlideShowWrapper';

const SlideWrapper = styled.div`
	position: relative;
	width: 100%;
	transform: translateX(0px);
	transition: transform 0.3s ease-out;
`;
SlideWrapper.displayName = 'SlideWrapper';

const Slide = styled.div`
	display: inline-block;
	height: 400px;
	width: 100%;
	background-size: cover;
	background-position: center;
`;
Slide.displayName = 'Slide';

const SlideIndex = styled.p`
	width: 100%;
	text-align: center;
	position: absolute;
	bottom: 0;
	margin-bottom: -40px;
`;
SlideIndex.displayName = 'SlideIndex';

const PreviousButton = styled.button`
	float: left;
`;
PreviousButton.displayName = 'PreviousButton';

const NextButton = styled.button`
	float: right;
`;
NextButton.displayName = 'NextButton';

class SlideShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { images } = this.props;
		return (
			<SlideShowWrapper>
				<SlideWrapper>
					{images.map((image, index) => {
						return (
							<React.Fragment key={image}>
								<Slide
									style={{ backgroundImage: `url(${image})` }}
								>
									<SlideIndex>
										Slide {index + 1} of {images.length}
									</SlideIndex>
								</Slide>
							</React.Fragment>
						);
					})}
				</SlideWrapper>
				<PreviousButton>Previous</PreviousButton>
				<NextButton>Next</NextButton>
			</SlideShowWrapper>
		);
	}
}

export default SlideShow;
