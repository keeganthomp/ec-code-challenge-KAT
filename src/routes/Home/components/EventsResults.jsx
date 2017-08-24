import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArtistEvents, getArtist } from 'api/bandsInTown'
import moment from 'moment';
import {
  setEvents,
  removeEvent,
  moveEventUp,
  moveEventDown,
  sortByVenue,
  loadingData,
  doneLoading
} from 'store/events'


export class EventsResults extends Component {
  componentWillReceiveProps (nextProps) {
    if (this.props.artist !== nextProps.artist) {
      this.props.loadingData()
      getArtistEvents(nextProps.artist).then(({ data }) => {
        console.log('data', data)
        this.props.setEvents(data)
        this.props.doneLoading()
      })
    }
  }

  render () {
    console.log(this.props);
    const { events, artist } = this.props

     if(this.props.isLoading){
        return(
          <div>Loading</div>
        )
      }

    return (
      
      <div className="main-container">
      <div className="btn-container">
        <button onClick={()=>this.props.sortByVenue()}>Toggle sort events by venue name</button>
        </div>
        
        

        {events.length === 0 && artist && <div>No events found for artist</div>}

        {events.map((event, index) => {
          return (
            <div key={event.id}>
              <p><strong>Date:</strong> {moment(event.datetime).format("MMM Do YY")}<br />
                <i>Event is in {moment(event.datetime).endOf('day').fromNow()}</i><br/>
                <strong>Venue</strong> {event.venue.name}<br/>
                <button className="edit-btn" onClick={()=>this.props.removeEvent(index)}>Remove</button>
                <button className="edit-btn" onClick={()=>this.props.moveEventUp(index)}>Move up</button>
                <button className="edit-btn" onClick={()=>this.props.moveEventDown(index)}>Move down</button>
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
  setEvents,
  moveEventUp,
  removeEvent,
  moveEventDown,
  sortByVenue,
  loadingData,
  doneLoading
}
const mapStateToProps = (state) => ({
  events: state.events.events,
  artist: state.events.artist,
  isLoading: state.events.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsResults)
