const React = require('react');
const styles = require('./ListItems.css');
const FilterItems = require('../FilterItems');
const data = require('../data.json');
const createReactClass = require('create-react-class');

const ListItems = createReactClass({

  getPropertyName: function(obj) {
    let propertyName = [];

    for(let key in obj) {
      propertyName.push(key)
    };

    return propertyName;
  },

  getPropertyValue: function(obj, name) {
      let objArray = [];

        obj[name].map(function(item) {
            objArray.push(item);
        });

      return objArray;
  },

  render: function () {
    const getNames = this.getPropertyName(data);
    const getValues = this.getPropertyValue;


    return (
      <section className='filter-items-list'>
          <ul className=''>
            {
              getNames.map(function(item) {
                return ( <FilterItems name={item} items={getValues(data, item)} /> )
              })
            }
          </ul>
      </section>
    );
  }
});

module.exports = ListItems;
