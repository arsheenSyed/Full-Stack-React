import React, { useState } from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }
  render() {
    return (
      <div className="card" styles={{ width: "18rem;" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img
                className="card-img-top"
                src={this.props.productImageUrl}
                alt="Card image cap"
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>

                <p className="card-text">{this.props.description}</p>

                <a
                  onClick={this.handleUpVote}
                  href="#"
                  className="btn btn-primary"
                >
                  {this.props.votes}
                </a>
                <span>
                  <img
                    width="50px"
                    height="50px"
                    src={this.props.submitAvatarUrl}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
