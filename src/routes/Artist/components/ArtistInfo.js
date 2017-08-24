import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtist } from "api/bandsInTown";

export class ArtistInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistData: []
    };
  }
  componentDidMount() {
    getArtist(this.props.params.artist).then(({ data }) => {
      this.setState({ artistData: data });
    });
  }

  render() {
    return (
      <div className="artist-container">
        <h1>
          {this.state.artistData.name}
        </h1>
        <p>
          <img src={this.state.artistData.image_url} alt="" />
        </p>
        <p />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  artist: state.events.artist,
  isLoading: state.events.isLoading
});

export default connect(mapStateToProps)(ArtistInfo);
