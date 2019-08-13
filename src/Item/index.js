const React = require('react');
const styles = require('./Item.css');
const createReactClass = require('create-react-class');


const Item = createReactClass({
  getInitialState: function() {
    return({
      name: ''
    })
  },

  render: function () {
    console.log(this.props);
    return (
      <li>
          <button>Test</button>
      </li>
    );
  }
});

module.exports = Item;
