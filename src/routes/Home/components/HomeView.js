import React from 'react'
import SearchBox from './SearchBox'
import EventsResults from './EventsResults'

import './HomeView.scss'

export const HomeView = () => (
  <div>
    <SearchBox />
    <EventsResults />
  </div>
)

export default HomeView
