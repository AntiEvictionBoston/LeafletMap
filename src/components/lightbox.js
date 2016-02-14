import React from "react";
import Lightbox from "react-images";
import { render } from "react-dom";

class StoryLightbox extends React.Component {
  constructor () {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }

  static propTypes = {
    images:     React.PropTypes.array.isRequired
  };

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render () {
    let lightboxImages = [];
    this.props.images.map(image => lightboxImages.push({src: image}));
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={lightboxImages}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}

export default StoryLightbox;
