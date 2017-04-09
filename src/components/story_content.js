import React from "react";
import { render } from "react-dom";
import StoryMedia from "./story_media";

class StoryContent extends React.Component {
  render () {
    return (
      <div id="story-content">
        {this.basicInfo()}

        <StoryMedia {...this.props} />
        
        {this.callToAction()}
      </div>
    );
  }

  basicInfo () {
    return (
      <table id="story-basic-info">
        <tbody>
          <tr id="rent-row" className="row">
            <td id="rent-col-one" className="cell">
              Latest Rent <i className="fa fa-arrow-up"></i>
            </td>
            <td id="rent-col-two" className="cell">
              {this.props.story.rent}
            </td>
          </tr>
          <tr id="landlord-row" className="row">
            <td id="landlord-col-one" className="cell">
              Landlord
            </td>
            <td id="landlord-col-two" className="cell">
              {this.props.story.owner}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
  
  callToAction () {
    return (
      <div className="call-to-action">
        <h3>Want to support this household?</h3>
        <a href="http://www.bostondisplacement.org/take-action/" target="_blank">Call</a> or <a href="http://www.bostondisplacement.org/take-action/" target="_blank">write</a> your City Councillor today and tell them that tenants need better protections from evictions for profit. Or <a href="http://www.justcauseboston.org/sign_the_petition" target="_blank" title="Sign a petition supporting a Just Cause Eviction Ordinance">sign the petition</a>.
      </div>
    )
  }
}

export default StoryContent;
