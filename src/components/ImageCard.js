import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {spans:0};

    this.imageRef = React.createRef();

  }

  componentDidMount() {
    //The browser needs to wait for the image is done loading, then the height of the image can be determined.
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    const spans = Math.ceil(height / 10);

    this.setState({spans});
  };

  render(){
    const {description, urls} = this.props.image;

    return (
      <div style={{gridRowEnd:`span ${this.state.spans}`}}>
        <img
          ref = {this.imageRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }

}

export default ImageCard;
