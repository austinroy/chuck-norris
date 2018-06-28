import React from 'react';
import {connect} from 'react-redux';
import * as jokesActions from '../../redux/actions/jokesActions';
import { bindActionCreators } from 'redux';

class Jokes extends React.Component{
  componentDidMount(){
    const category = this.props.match.params.category
    this.props.fetchJokes(category);
  }

  renderJoke = joke => {
    if (joke){
      return(
        <div key={joke.id}>
          <h1>
            {joke.value}
            <img src={joke.icon_url} alt="chuck"/>
          </h1>
        </div>
      )
    } else {
      return (
        <div>
          Joke Not Loaded
        </div>
      )
    }
  }

  mapJokes = jokes => {
    if (jokes){
      return jokes.map(joke => {
        return this.renderJoke(joke)
      })
    } else {
      return (
        <div>
          Jokes Not Loaded
        </div>
      )
    }
  }

  render(){
    const { joke } = this.props;
    console.log(joke)
    return(
      <div>
        Joke
        {
          this.renderJoke(joke)
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    joke : state.jokes
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(jokesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);