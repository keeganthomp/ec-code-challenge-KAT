import axios from 'axios'

export function getArtistEvents (artist) {
  return axios.get(`https://rest.bandsintown.com/artists/${artist}/events?app_id=codechallenge`)
}

export function getArtist (artist) {
  return axios.get(`https://rest.bandsintown.com/artists/${artist}`)
}

// TODO add getArtistInfo
