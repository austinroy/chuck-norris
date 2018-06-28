import React from 'react';
import {connect} from 'react-redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import { bindActionCreators } from 'redux';

class Categories extends React.Component{
  componentDidMount(){
    this.props.fetchCategories();
  }

  renderCard = (category, index) => {
    const categoryUrl = `/${category}`
    return(
      <div key={index}>
        <h1>
          <a href={categoryUrl}>{category}</a>
        </h1>
      </div>
    )
  }

  mapCategories = categories => {
    if (categories.length > 0){
      return categories.map((category, index) => {
        return this.renderCard(category, index)
      })
    } else {
      return (
        <div>
          Categories Not Loaded
        </div>
      )
    }
  }

  render(){
    const { categories } = this.props;
    return(
      <div>
        Categories
        {
          this.mapCategories(categories)
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories : state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(categoryActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);