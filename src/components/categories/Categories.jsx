import React from 'react';
import {connect} from 'react-redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import { bindActionCreators } from 'redux';
import { Card, Loader } from 'semantic-ui-react';
import './categories.css';

class Categories extends React.Component{

  componentDidMount(){
    this.props.fetchCategories();
  }

  renderCard = (category, index) => {
    const categoryUrl = `/${category}`
    return(
      <div key={index}>
        <Card href={categoryUrl} color='purple' >
          <Card.Content>
            <Card.Header content={category} />
          </Card.Content>
        </Card>
      </div>
    )
  }

  mapCategories = categories => {
    if (categories.length > 0){
      return categories.map((category, index) => {
        return this.renderCard(category, index);
      })
    } else {
      return (
        <div>
          Categories Not Loaded
        </div>
      )
    }
  }

  renderLoader = () => <Loader active={this.props.loading} inline />

  render(){
    const { categories, loading } = this.props;
    return(
      <div>
        <h1>Categories</h1>
        <div className='categories'>
          { 
            (loading ? this.renderLoader() : this.mapCategories(categories) )
          }
        </div>
      </div>
    )
  }
}

Categories.defaultProps ={
  loading : true,
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories : state.categories.data,
    loading : state.categories.loading,
    error : state.categories.error,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(categoryActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);