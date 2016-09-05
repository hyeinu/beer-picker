import React , {Component} from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'

import { getProfile } from '../../actions/UserActions';

class ViewProfile extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.getProfile();
  }

  render(){
    let reviewsList
    if(!this.props.user){
      return(<h1>Loading</h1>)
    }
    if(!this.props.reviews){
      reviewsList = (<h1>Make a Review</h1>)
    }
    let { username } = this.props.user;
    let { reviews } = this.props;

    reviewsList = reviews.map(review => {
      return (
        <div key={review._id}>
          <h3>beer name: {review.name}</h3>
          <h3>rating: {review.rating}</h3>
          <h5>comment: {review.comment}</h5>
        </div>
      )
    })

    return(
      <div className='row'>
        <div className="col-xs-12 col-md-6 col-md-offset-3">
          <h1 className="text-center">Hello {username}</h1>
        </div>
        <div className="col-xs-12 col-md-6 col-md-offset-1">
          <h1>Beer Reviews</h1>
          {reviewsList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  reviews: state.beer.reviews
})

const mapDispatchToProps = (dispatch) => ({
  getProfile: (state) => dispatch(getProfile(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewProfile)
