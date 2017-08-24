import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArtistEvents } from 'api/bandsInTown'
import {
  setEvents
} from 'store/events'

export class EventsResults extends Component {
  state = {
    sortByVenueName: false,
  }
  componentWillReceiveProps (nextProps) {
    if (this.props.artist !== nextProps.artist) {
      getArtistEvents(nextProps.artist).then(({ data }) => {
        console.log('data', data)
        this.props.setEvents(data)
      })
    }
  }

  toggleSortByVenueName = () => {
    this.setState({ sortByVenueName: !this.state.sortByVenueName })
  }

  render () {
    const { events, artist } = this.props
    return (
      <div>
        <button onClick={this.toggleSortByVenueName}>Toggle sort events by venue name</button>
        {this.state.sortByVenueName && <p>Sorting events by venue name</p>}

        {events.length === 0 && artist && <div>No events found for artist</div>}

        {events.map((event) => {
          return (
            <div key={event.id}>
              <p><strong>Date:</strong> {event.datetime} <br />
                <strong>Venue</strong> {event.venue.name}
                <button>Remove</button>
                <button>Move up</button>
                <button>Move down</button>
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

EventsResults.propTypes = {
  artist : PropTypes.string
}
const mapDispatchToProps = {
  setEvents
}
const mapStateToProps = (state) => ({
  events: state.events.events,
  artist: state.events.artist
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsResults)
