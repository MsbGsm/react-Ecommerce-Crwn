import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';


const CollectionItem = ({ item, addItemToCart }) => (
  <div className="collection-item">
    <div 
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`
      }}
    />
    <div className="collection-footer">
      <span className="name">{ item.name }</span>
      <span className="price">{ item.price }$</span>
    </div>
    <CustomButton inverted onClick={ () => addItemToCart(item) } >Add to cart</CustomButton>
  </div>
);


const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItem(item)) 
});

export default connect(null, mapDispatchToProps)(CollectionItem);