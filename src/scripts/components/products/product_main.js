"use strict";
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { changeRoute } from "../../actions/route_actions";
import { createProduct, destroyProduct, getProducts, updateProduct } from "../../actions/product_actions";
import ProductList from "./product_list";
import EditProduct from "./edit_product";
import NewProduct from "./new_product";

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
    this._initializeView();
  }

  _handleClose() {
    this._initializeView();
  }

  _handleEdit(product) {
    const { dispatch } = this.props;
    dispatch(updateProduct(product));
    this._initializeView();
  }

  _handleNew() {
    const { dispatch } = this.props;
    dispatch(changeRoute({ nextRoute: "NEW" }));
  }

  _handleRemove(id) {
    const { dispatch } = this.props;
    dispatch(destroyProduct(id));
    this._initializeView();
  }

  _handleSelect(id) {
    const { dispatch } = this.props;
    dispatch(changeRoute({ nextRoute: "EDIT", productId: id }));
  }

  _initializeView() {
    const { dispatch } = this.props;
    dispatch(changeRoute({
      prevRoute: "", nextRoute: "LIST", productId: 0
    }));
  }

  render() {
    const { isFetching, errors, nextRoute, products, productId } = this.props;
    const product = this.props.products[productId];
    let content;

    switch (nextRoute) {
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
    errors, isFetching, products
  } = productReducer || {
    errors: [], isFetching: true, products: {}
  };
  const {
    prevRoute, nextRoute, productId } = routeReducer || {
    prevRoute: "", nextRoute: "LIST", productId: 0
  };
  return {
    errors, isFetching, nextRoute, prevRoute, products, productId
  };
}

export default connect(mapStateToProps)(ProductMain);
