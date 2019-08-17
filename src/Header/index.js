const React = require('react');
require('./Header.css');
const logo = require('../images/logo.png');
const createReactClass = require('create-react-class');

const Header = createReactClass({
  render: function () {
    return (
      <header className='header'>
        <h1>
          <a href="/" className='link'>
            <img src={logo} alt='logo' />  
          </a>
        </h1>
        </header>
    );
  }
});

module.exports = Header;
