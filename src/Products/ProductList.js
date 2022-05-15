import React, { Component } from "react";
import Product from "./Product";
import Products from "./Seed";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  //   handleProductUpVote(productId) {
  //     console.log(productId + " was upvoted");
  //   }

  componentDidMount() {
    this.setState({ products: Products });
  }

  handleProductUpVote = (productId) => {
    const nextProducts = this.state.products.map((product) => {
      if (product.id === productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });

    this.setState({
      products: nextProducts,
    });
  };

  render() {
    const sortedProducts = this.state.products.sort((a, b) => {
      return b.votes - a.votes;
    });

    const allProducts = sortedProducts.map((product) => {
      return (
        <Product
          key={"product-" + product.id}
          id={product.id}
          productImageUrl={product.productImageUrl}
          title={product.title}
          description={product.description}
          votes={product.votes}
          submitAvatarUrl={product.submitAvatarUrl}
          onVote={this.handleProductUpVote}
        />
      );
    });

    return <div>{allProducts}</div>;
  }
}

export default ProductList;
