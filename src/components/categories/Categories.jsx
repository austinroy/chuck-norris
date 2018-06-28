import React from 'react';
import {connect} from 'react-redux';
import * as categoryActions from '../../redux/actions/categoryActions';
import { bindActionCreators } from 'redux';
import { Card, Icon } from 'semantic-ui-react';
import './categories.css'

class Categories extends React.Component{
  componentDidMount(){
    this.props.fetchCategories();
  }

  renderCard = (category, index) => {
    const categoryUrl = `/${category}`
    return(
      <div>
        <Card key={index} href={categoryUrl} color='red' >
          <Card.Content>
            <Icon name={category} /> 
            <Card.Header content={category} />
          </Card.Content>
        </Card>
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
        <h1>Categories</h1>
        <div className='categories'>
          {
            this.mapCategories(categories)
          }
        </div>
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