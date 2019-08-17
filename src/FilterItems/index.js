const React = require('react');
require('./FilterItems.css');
const Item = require('../Items');
const createReactClass = require('create-react-class');


const FilterItems = createReactClass({
  getInitialState: function() {
    return({
      name: this.props.name,
      isActive: false,
      isClick: false,
      isSelecet: false,
      count: 0
    })
  },

  capitalize: function(text){
    if (typeof text !== 'string') {
      return '';
    } else {
      return text.charAt(0).toUpperCase() + text.slice(1)  
    }
  },

  openTooltipEvent: function() {
    this.setState({
      isActive: true,
      isClick: true,
    })
  },

  increaseCount: function() {
    this.setState({
      count: this.state.count += 1,
      isSelecet: true
    })
  },


  closeTooltipEvent: function() {
    this.setState({
      isActive: false
    })
  },

  componentWillUpdate: function(nextProps, nextState) {
    //console.log("Next",nextProps, "\nNState",nextState, "\nthisState",this.state);
  },

  render: function () {
    const self = this;
    return (
      <li key={this.props.name}>
          <button onClick={this.openTooltipEvent} className={this.state.isClick ? 'btn-filter click' : 'btn-filter' }>{this.capitalize(this.props.name)} {this.state.count ? '('+this.state.count+')' : ''} </button>
            <div className={this.state.isActive ? 'filter-lists active' : 'filter-lists'} >
            {
              this.props.items.map(function(item) {
                return ( 
                  <Item id={item.id} title={item.title} increaseCount={self.increaseCount} isClick={self.state.isSelecet} />
                )
              })
            }
            </div>
      </li>
    );
  }
});

module.exports = FilterItems;
