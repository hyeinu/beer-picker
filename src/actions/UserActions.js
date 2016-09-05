import axios from 'axios'
import RouteActions from './RouteActions'

export function receiveProfile(profile) {
  return {
    type: 'RECEIVE_PROFILE',
    payload: { profile }
  }
}
export function randomBeer(oneBeer) {
  return {
    type: 'RECEIVE_BEER',
    payload: { oneBeer }
  }
}

export function removeProfile() {
  return {
    type: 'REMOVE_PROFILE'
  }
}

export function register(user) {
  return dispatch =>
    axios.post('/api/users/register', user)
      .then(() => {
        RouteActions.route('/login');
      })
      .catch(console.error)
}

export function getRanBeer() {
  return dispatch =>
    axios.get('/api/beers/random')
      .then(res => {
        return res.data;
      })
      .then(data => {
        dispatch(randomBeer(data))
      })
      .catch(console.error)
}

export function addReview(id, obj) {
  return dispatch =>
    axios.put(`/api/beers/${id}/addReview`, obj)
      .then(() => {
        dispatch(getProfile())
      })
      .catch(console.error)
}

export function getProfile() {
  return dispatch =>
    axios.get(`/api/users/profile`)
      .then(res => {
        dispatch(receiveProfile(res.data));
        RouteActions.route('/profile');
      })
      .catch(console.error)
}

export function login (user) {
  return dispatch => {
    axios.post('/api/users/login', user)
    .then(() => {
      dispatch(getProfile())
    })
    .catch(console.error)
  }
}

export function logout() {
  return dispatch => {
    axios.post('/api/users/logout')
    .then(() => {
      RouteActions.route('/');
      dispatch(removeProfile());
    })
    .catch(console.error)
  }
}
