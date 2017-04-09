import React from "react";
import { browserHistory } from "react-router";
import { Marker } from "react-leaflet";
import * as actions from "../actions/actions";

class StoryMarker extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  static propTypes = {
    map:          React.PropTypes.object.isRequired,
    story:        React.PropTypes.object.isRequired,
    currentUrl:   React.PropTypes.string,
    urlForStory:  React.PropTypes.string.isRequired
  };

  render() {
    return (
      <Marker
        icon={this.pickIcon()}
        onClick={this.handleClick}
        map={this.props.map}
        position={this.storyLocation()} />
    );
  }

  faIcon (icon, color) {
    return L.AwesomeMarkers.icon(
      { icon: icon, prefix: 'fa', markerColor: color }
    );
  }

  pickIcon = () => (
    this.isActive() ? this.activeIcon() : this.inactiveIcon()
  );

  activeIcon = () => this.faIcon(this.pickSymbol(), 'red');
  inactiveIcon = () => this.faIcon(this.pickSymbol(), 'blue');

  pickSymbol = () => (
    this.props.story.type === "story" ? 'home' : 'star'
  );

  isActive = () => (
    this.props.currentUrl === this.props.urlForStory
  );

  handleClick = () => browserHistory.push(this.props.urlForStory);

  storyLocation () {
    let {Latitude, Longitude} = this.props.story;
    return [Latitude, Longitude];
  }
}

export default StoryMarker;
