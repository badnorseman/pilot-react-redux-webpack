"use strict";
import React, { Component, PropTypes } from "react";
import ProductListItem from "./product_list_item";

export default class ProductList extends Component {
  static propTypes = {
    products: PropTypes.object.isRequired,
    onNew: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this._handleNew = this._handleNew.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _getItems() {
    let items = [];
    Object.keys(this.props.products).forEach(key => {
      items.push(
        <ProductListItem key={key} item={this.props.products[key]} onClick={this._handleSelect}/>
      );
    })
    return items;
  }

  _handleNew() {
    this.props.onNew()
  }

  _handleSelect(id) {
    this.props.onSelect(id)
  }

  render() {
    let items = this._getItems();

    return (
      <div>
        <div className="mdl-grid">
          {items}
        </div>
        <button
          className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-button--floating-action"
          onClick={this._handleNew}>
          <i className="material-icons">add</i>
        </button>
      </div>
    )
  }
}
