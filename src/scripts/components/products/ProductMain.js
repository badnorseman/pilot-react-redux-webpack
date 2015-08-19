"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/routeActions";
import { createProduct, destroyProduct, getProducts, updateProduct } from "../../actions/productActions";
import ProductList from "./ProductList";
import EditProduct from "./EditProduct";
import NewProduct from "./NewProduct";

class ProductMain extends Component {
  constructor(props) {
    super(props);
    this._handleAdd = this._handleAdd.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleEdit = this._handleEdit.bind(this);
    this._handleNew = this._handleNew.bind(this);
    this._handleRemove = this._handleRemove.bind(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getProducts());
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  componentWillReceiveProps(nextProps) {
  }

  _getEditProduct(errors = [], product = {}) {
    return (
      <EditProduct
        errors={errors}
        product={product}
        onClose={this._handleClose}
        onEdit={this._handleEdit}
        onRemove={this._handleRemove}/>
    );
  }

  _getNewProduct(errors = []) {
    return (
      <NewProduct
        errors={errors}
        onAdd={this._handleAdd}
        onClose={this._handleClose}/>
    );
  }

  _getProductList(products) {
    return (
      <ProductList
        products={products}
        onNew={this._handleNew}
        onSelect={this._handleSelect}/>
    );
  }

  _handleAdd(product) {
    const { dispatch } = this.props;
    dispatch(createProduct(product));
    this._changeRoute();
  }

  _handleClose() {
    this._changeRoute();
  }

  _handleEdit(product) {
    const { dispatch } = this.props;
    dispatch(updateProduct(product));
    this._changeRoute();
  }

  _handleNew() {
    this._changeRoute("NEW");
  }

  _handleRemove(id) {
    const { dispatch } = this.props;
    dispatch(destroyProduct(id));
    this._changeRoute();
  }

  _handleSelect(id) {
    this._changeRoute("EDIT", id);
  }

  _changeRoute(route = "LIST", id = 0) {
    const { dispatch } = this.props;
    dispatch(changeRoute({ route: route, id: id }));
  }

  render() {
    const { isFetching, errors, route, products, id } = this.props;
    const product = this.props.products[id];
    let content;

    switch (route) {
      case "EDIT":
        content = this._getEditProduct(errors, product);
        break;
      case "NEW":
        content = this._getNewProduct();
        break;
      default:
        content = this._getProductList(products);
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { productReducer, routeReducer } = state;
  const {
    errors, isFetching, products } = productReducer || {
    errors: [], isFetching: true, products: {}
  };
  const { route, id } = routeReducer || { route: "LIST", id: 0 };
  return { errors, isFetching, products, route, id };
}

export default connect(mapStateToProps)(ProductMain);
