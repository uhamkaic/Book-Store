import React, {Component} from 'react';

class BaseHeader extends Component {
  state = {
    brand: 'Uhamka Club',
    desc: "lorem ipsum blabla",
    item: 0
  }

  handleAddItem = () => {
    this.setState({
      item: this.state.item + 1
    })
  }

  handleMinItem = () => {
    if(this.state.item > 0) {
      this.setState({
        item: this.state.item - 1
      })
    }
  }

  render() {
    return(
      <header id="header">
        <h1>{this.state.brand}</h1>
        <p>{this.state.desc}</p>
        <span>Cart: {this.state.item}</span>

        <div>
          <button onClick={this.handleAddItem}>Add</button>
          <button onClick={this.handleMinItem}>Min</button>
        </div>

      </header>
    )
  }
}

export default BaseHeader;
