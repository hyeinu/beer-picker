export default function beerReducer (state = {}, action) {
  switch(action.type){
    case 'RECEIVE_PROFILE': {
      return Object.assign({}, state, {
        reviews: action.payload.profile.beer_reviews,
      });
    }
    case 'RECEIVE_BEER': {
      return Object.assign({}, state, {
        one_beer: action.payload.oneBeer
      });
    }
    case 'REMOVE_PROFILE': {
      return null;
    }
    default:
      return state;
  }
}
