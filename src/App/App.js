const React = require('react');
const Header = require('../Header');
const ListItems = require('../ListItems');
const createReactClass = require('create-react-class');

const App = createReactClass({
  render: function () {
    return (
      <div className='App'>
        <Header />
        <ListItems />
      </div>
    );
  }
});

module.exports = App;
