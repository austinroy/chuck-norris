import React from 'react';
import {connect} from 'react-redux';
import * as jokesActions from '../../redux/actions/jokesActions';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';

class Jokes extends React.Component{
  componentDidMount(){
    const category = this.props.match.params.category
    this.props.fetchJokes(category);
  }

  renderJoke = joke => {
    const category = this.props.match.params.category
    if (joke){
      return(
        <div key={joke.id}>
          <Card fluid color='purple'>
          <Card.Content>
            <Card.Header content={category} style={{margin : '0 auto'}}/>
            <Card.Description content={joke.value} />
          </Card.Content>
          </Card>
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