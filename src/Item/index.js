const React = require('react');
const styles = require('./Item.css');
const createReactClass = require('create-react-class');

const Item = createReactClass({
  getInitialState: function() {
    return {message: 'Hello!'};
  },

  render: function () {
    return (
      <li>
        <button>{this.state.message}</button>
      </li>     
    );
  }
});

module.exports = Item;
