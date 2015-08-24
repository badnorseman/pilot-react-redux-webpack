"use strict";
import React, { Component } from "react";
import ProductMain from "../components/products";
import Footer from "../components/Footer";

export default class Main extends Component {
  componentDidUpdate() {
    componentHandler.upgradeDom()
  }

  render() {
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header mdl-layout--overlay-drawer-button">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <span className="mdl-layout-title">
                FitBird
              </span>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation">
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">FitBird</span>
            <nav className="mdl-navigation">
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <ProductMain/>
            </div>
            <div className="mdl-layout-spacer"></div>
            <Footer/>
          </main>
        </div>
      </div>
    )
  }
}
