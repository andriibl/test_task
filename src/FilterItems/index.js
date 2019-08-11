const React = require('react');
const styles = require('./FilterItems.css');
const Item = require('../Item');
const date = require('../date.json');
const createReactClass = require('create-react-class');

const FilterItems = createReactClass({

 /* sizeObj: function(obj) {
    let size = 0, key;
    for(key in obj) {
    if(obj.hasOwnProperty(key))
    size++;
    return size;
  }*/

  testFunc: function() {
    console.log("Here is the test message");
  },

  render: function () {
    console.log(this.testFunc());
    return (
      <section className='filter-items-list'>
          <ul className=''>
            <li>
               <Item />
            </li>
            <li>
                <button>Test</button>
            </li>
            <li>
                <button>Test</button>
            </li>
            <li>
                <button>Test</button>
            </li>
            <li>
                <button>Test</button>
            </li>
          </ul>
      </section>
    );
  }
});

module.exports = FilterItems;
