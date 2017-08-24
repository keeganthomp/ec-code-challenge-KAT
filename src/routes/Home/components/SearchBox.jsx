import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  setArtist
} from 'store/events'

export class EventsResults extends Component {
  state = {
    artist: ''
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.setArtist(this.state.artist)
  }
  onTypeChange = (e) => {
    this.setState({ artist: e.target.value })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder='Enter Artist Name' type='text' value={this.state.artist} onChange={this.onTypeChange} />
        </form>
        <h6>Artist: {this.props.artist}</h6>
      </div>
    )
  }
}

EventsResults.propTypes = {
  artist : PropTypes.string
}
const mapDispatchToProps = {
  setArtist
}
const mapStateToProps = (state) => ({
  artist: state.events.artist
})
export default connect(mapStateToProps, mapDispatchToProps)(EventsResults)
