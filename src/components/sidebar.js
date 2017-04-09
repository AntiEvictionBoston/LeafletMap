import React from "react";
import { render } from "react-dom";
import StoryContainer from "./story_container";
import { browserHistory } from "react-router";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    address:    React.PropTypes.string,
    stories:    React.PropTypes.object
  };

  addressIndex = () => (
    Object.keys(this.props.stories).findIndex((a) => a === this.focusedAddress())
  );

  lastIndex = () => Object.keys(this.props.stories).length - 1;

  prevStoryIndex = () => (
    this.addressIndex() === 0 ? -1 : this.addressIndex() - 1
  );
  prevStoryUrl = () => Object.keys(this.props.stories)[this.prevStoryIndex()];

  nextStoryIndex = () => (
    this.addressIndex() === this.lastIndex() ? -1 : this.addressIndex() + 1
  );
  nextStoryUrl = () => Object.keys(this.props.stories)[this.nextStoryIndex()];

  focusedAddress () {
    let addresses = Object.keys(this.props.stories)
    if ( addresses.includes(this.props.address)) {
      return this.props.address;
    } else {
      browserHistory.push(addresses[0]);
      return addresses[0];
    }
  }
  focusedStory = () => this.props.stories[this.focusedAddress()];

  render () {
    return (
      <div id="map-sidebar">
        <StoryContainer
          story={this.focusedStory()}
          next={this.nextStoryUrl()}
          prev={this.prevStoryUrl()} />
      </div>
    );
  }
}

export default Sidebar;
