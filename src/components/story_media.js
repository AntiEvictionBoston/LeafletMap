import React from "react";
import { render } from "react-dom";
import YouTube from "react-youtube";

class StoryMedia extends React.Component {
  render () {
    return (
      <div id="story-media">
        <div id="images">
          {this.renderImages()}
        </div>
        <div id="video">
          {this.renderVideo()}
        </div>
        <div id="story">
          {this.renderStory()}
        </div>
      </div>
    );
  }

  componentWillMount () {
    this.setState({
      showAllImages: false,
      showAllStory: false,
    });
  }

  renderImages () {
    let images = [];
    if ( this.props.story.images ) {
      if ( this.props.story.images.length > 0 ) {
        this.props.story.images.forEach((image, index) => (
          images.push (
            <div
              className={"row media-row " + this.setHidingState(index)}
              key={index}>
              <img src={image} />
            </div>
          )
        ));
      }
    }
    if ( images.length > 1 ) {
      images.push(this.showMoreImagesButton(images.length + 1));
    }
    return images;
  }

  showMoreImagesButton (index) {
    return (
      <div className="showhide-container">
        <span key={index} onClick={this.toggleShowImages} className="expand-images-button">
          {this.showButtonText()}
        </span>
      </div>
    );
  }
  toggleShowImages = () => this.setState({ showAllImages: !this.state.showAllImages });
  showButtonText () {
    if ( this.state.showAllImages ){
      return (
        <div className="showhide-control">
          {"Show fewer images..."}
        </div>
      );
    } else {
      return (
        <div className="showhide-control">
          {"Show more images..."}
       </div>
      );
    }
  }

  setHidingState (index) {
    if ( this.state.showAllImages ) {
      return "";
    } else {
      return index === 0 ? "" : "hidden";
    }
  }

  renderStory () {
    let paragraphs = [];
    this.props.story.story.split("\n").forEach((paragraph, index) => {
      paragraphs.push (
        <p
          key={index}
          className={"story-paragraph " + this.setStoryHidingState(index)}>
          {paragraph}
        </p>
      );
    });
    if ( paragraphs.length > 1 ) {
      paragraphs.push(this.showStoryButton(paragraphs.length + 1));
    }
    return paragraphs;
  }

  showStoryButton (index) {
    return (
      <div className="showhide-container">
        <span key={index} onClick={this.toggleShowStory} className="expand-story-button">
          {this.showStoryText()}
        </span>
      </div>
    );
  }
  toggleShowStory = () => this.setState({ showAllStory: !this.state.showAllStory });
  showStoryText () {
    if ( this.state.showAllStory ) {
      return (
        <span className="showhide-control">
          {"Show less text..."}
        </span>
      );
    } else {
      return (
        <span className="showhide-control">
          {"Show more text..."}
       </span>
      );
    }
  }


  setStoryHidingState (index) {
    if ( this.state.showAllStory ) {
      return "";
    } else {
      return index === 0 ? "" : "hidden";
    }
  }

  renderVideo () {
    if (this.props.story.video) {
      return (
        <div className="row media-row">
          <YouTube
            videoId={this.props.story.video}
            className="video-container" />
        </div>
      );
    }
  }

}

export default StoryMedia;
