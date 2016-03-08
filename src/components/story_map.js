import React from "react";
import { connect } from "react-redux";
import { Map, Popup, TileLayer } from 'react-leaflet';
import Sidebar from "./sidebar";
import { setFocusedStory } from "../actions/actions";
import StoryMarkers from "../components/story_markers";
import StoryContainer from "../components/story_container";
import Images from "../images/images";

class StoryMap extends React.Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    position:       React.PropTypes.array.isRequired,
    zoom:           React.PropTypes.number.isRequired,
    dispatch:       React.PropTypes.func.isRequired
  };

  componentWillMount () {
    Images.eagerLoad();
  }

  refreshStoryMap () {
    this.forceUpdate();
  }

  render() {
    const { dispatch, focusedStory, stories } = this.props;
    return (
      <div id="map-container">
        <Map center={this.props.position} zoom={this.props.zoom}>
          <TileLayer
            url="http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          />
          <StoryMarkers
            stories={stories}
            map={this.props.map}
            handleOnClick={index => {
              dispatch(setFocusedStory(index));
              this.refreshStoryMap();
            }} />
        </Map>
        <Sidebar>
          <StoryContainer
            focusedStory={focusedStory}
            story={stories[focusedStory]}
            stories={stories}
            setFocus={index => dispatch(setFocusedStory(index))} />
        </Sidebar>
      </div>
    );
  }
}

function mapState (state) {
  return {
    stories:      state.stories,
    focusedStory:  state.focusedStory
  }
}

export default connect(mapState)(StoryMap);
