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
	${props => `transform: translateX(${props.translateX}px)`};
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
	margin-bottom: -16px;
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
		this.state = {
			translateX: 0,
			slideIndex: 0
		};
	}

	handleSlidePrevious(slideIndex) {
		if (slideIndex === 0) {
			return this.setState({
				translateX: -this.props.images.length * 500 + 500,
				slideIndex: this.props.images.length - 1
			});
		}
		this.setState(prevState => ({
			translateX: prevState.translateX + 500,
			slideIndex: prevState.slideIndex - 1
		}));
	}

	handleSlideNext(slideIndex) {
		if (slideIndex + 1 === this.props.images.length) {
			return this.setState({
				translateX: 0,
				slideIndex: 0
			});
		}
		this.setState(prevState => ({
			translateX: prevState.translateX - 500,
			slideIndex: prevState.slideIndex + 1
		}));
	}

	render() {
		const { images } = this.props;
		const { translateX, slideIndex } = this.state;

		console.log('translateX', translateX);
		console.log('slideIndex', slideIndex);
		return (
			<SlideShowWrapper>
				<SlideWrapper translateX={translateX}>
					{images.map(image => {
						return (
							<React.Fragment key={image}>
								<Slide
									style={{
										backgroundImage: `url(${image})`
									}}
								/>
							</React.Fragment>
						);
					})}
				</SlideWrapper>
				<SlideIndex>
					Slide {slideIndex + 1} of {images.length}
				</SlideIndex>
				<PreviousButton
					onClick={() => {
						this.handleSlidePrevious(slideIndex);
					}}
				>
					Previous
				</PreviousButton>
				<NextButton
					onClick={() => {
						this.handleSlideNext(slideIndex);
					}}
				>
					Next
				</NextButton>
			</SlideShowWrapper>
		);
	}
}

export default SlideShow;
