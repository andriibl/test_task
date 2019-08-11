const React = require('react');
const Header = require('../Header');
const FilterItems = require('../FilterItems');
const createReactClass = require('create-react-class');

const App = createReactClass({
  render: function () {
    return (
      <div className='App'>
        <Header />
        <FilterItems />
      </div>
    );
  }
});

module.exports = App;
