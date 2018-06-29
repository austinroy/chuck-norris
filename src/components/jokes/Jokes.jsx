import React from 'react';
import { connect } from 'react-redux';
import * as jokesActions from '../../redux/actions/jokesActions';
import { bindActionCreators } from 'redux';
import { Loader, Segment } from 'semantic-ui-react';

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
          <Segment piled color='purple'>
            <h1>{category}</h1>
            <p>{joke.value}</p>
          </Segment>
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

  renderLoader = () => <Loader active={this.props.loading} inline />

  render(){
    const { joke, loading } = this.props;
    return(
      <div>
        {
          (loading ? this.renderLoader() : this.renderJoke(joke) )
        }
      </div>
    )
  }
}

Jokes.defaultProps ={
  loading : true,
}

const mapStateToProps = (state, ownProps) => {
  return {
    joke : state.jokes.data,
    loading : state.jokes.loading,
    error : state.jokes.error,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(jokesActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);