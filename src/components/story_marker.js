import React from "react";
import { hashHistory } from "react-router";
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
    currentUrl:   React.PropTypes.string.isRequired,
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

  activeIcon = () => this.faIcon('home', 'red');
  inactiveIcon = () => this.faIcon('home', 'blue');

  isActive = () => (
    this.props.currentUrl === this.props.urlForStory
  );

  handleClick = () => hashHistory.push(this.props.urlForStory);

  storyLocation () {
    let {Latitude, Longitude} = this.props.story;
    return [Latitude, Longitude];
  }
}

export default StoryMarker;
