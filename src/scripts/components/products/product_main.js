"use strict";
import React, { Component, PropTypes } from "react";
import { createProduct, destroyProduct, getProducts, updateProduct } from "../../actions/product_actions";
import { connect } from "react-redux";
import ProductList from "./product_list";
import EditProduct from "./edit_product";
import NewProduct from "./new_product";

class ProductMain extends Component {
  constructor() {
    super();
    this.state = {
      contentSelector: "",
      id: 0
    };
    this._handleAdd = this._handleAdd.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleNew = this._handleNew.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  _getEditProduct() {
    let errors = []; // this.state.errors;
    let product = {}; // this.state.products[this.state.id];
    return (
      <EditProduct
        errors={errors}
        product={product}
        onBuy={this._handleBuy}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove}/>
    );
  }

  _getNewProduct() {
    let errors = []; // this.state.errors;
    return (
      <NewProduct
        errors={errors}
        onAdd={this._handleAdd}
        onClose={this._handleClose}/>
    );
  }

  _getProductList() {
    let products = {}; //this.state.products;
    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    );
  }

  _handleAdd(product) {
    createProduct(product)
    this.setState(this._initializeView())
  }

  _handleClose() {
    this.setState(this._initializeView())
  }

  _handleEdit(product) {
    updateProduct(product)
    this.setState(this._initializeView())
  }

  _handleNew() {
    this.setState({
      contentSelector: "NEW"
    })
  }

  _handleRemove(id) {
    destroyProduct(id)
    this.setState(this._initializeView())
  }

  _handleSelect(id) {
    this.setState({
      contentSelector: "EDIT",
      id: id
    })
  }

  _initializeView() {
    return {
      contentSelector: "",
      id: 0
    }
  }

  render() {
    const { dispatch, products } = this.props;
    let content;
    console.log("render", this.props, this.state);

    switch (this.state.contentSelector) {
      case "EDIT": content = this._getEditProduct(); break;
      case "NEW": content = this._getNewProduct(); break;
      default: content = this._getProductList();
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

function select(state) {
  return {
    products: state.products
  };
}

export default connect(select)(ProductMain);
