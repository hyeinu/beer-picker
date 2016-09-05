import React , {Component} from 'react'
import { TextField, RaisedButton } from 'material-ui'

export default class BeerReviewForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: '',
      rating: null
    }

    this._submit = this._submit.bind(this);
    this._onInputChange = this._onInputChange.bind(this);
  }
  _onInputChange(e) {
    let key = e.target.dataset.statekey;
    let value = e.target.value;

    this.setState({
      [key]: value
    });
  }
  _submit(e){
    e.preventDefault();
    let obj = {
      name: this.props.name,
      db_id: this.props.id,
      comment: this.state.comment,
      rating: this.state.rating
    }
    let user_id = this.props.user_id
    this.props.addReview(user_id, obj)
  }
  render(){
    return(
      <form onSubmit={this._submit}>
        <TextField
        hintText='Rating out of 5' floatingLabelText="Rating" type='number'
        className="editInput" floatingLabelFixed={false}
        required onChange={this._onInputChange} data-statekey="rating"
        />
        <TextField
        floatingLabelText="Comments:" type='text'
        className="editInput" floatingLabelFixed={true} rows={2}
        required onChange={this._onInputChange} data-statekey="comment"
        />
        <div className="col-xs-12 text-center">
          <RaisedButton
          label="Submit"
          labelPosition="before"
          type='submit'
          className='editBtn'/>
        </div>
      </form>
    )
  }
}
