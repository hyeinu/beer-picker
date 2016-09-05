import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRanBeer, addReview } from '../actions/UserActions';

import BeerReviewForm from './BeerReviewForm'

class BeerReview extends Component {
  componentWillMount(){
    this.props.getRanBeer()
  }
  render(){

    if(!this.props.one_beer){
      return(<h1>Loading...</h1>)
    }
    let { _id } = this.props.user
    let { description, name, ibu, id } = this.props.one_beer.data
    let { addReview } = this.props
    return(
      <div className="container">
        <h1>{name}</h1>
        <h1>IBU: {ibu}</h1>
        <h4>{description}</h4>
        <BeerReviewForm user_id={_id} name={name} id={id} addReview={addReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  one_beer: state.beer.one_beer,
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  getRanBeer: () => dispatch(getRanBeer()),
  addReview: (id, obj) => dispatch(addReview(id, obj))
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerReview)
