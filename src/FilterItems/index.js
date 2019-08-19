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
      isSelecet: true,
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
    /*this.setState({
      isActive: true,
      isClick: true,
    })*/
  this.setState(function(prevState) {
    return {
    isActive: !prevState.isActive,
    isClick: true  
    }
  })
  },

  increaseCount: function() {
    this.setState({
      count: this.state.count += 1
    })
  },

  resetIsClick: function() {
    this.setState({
      count: 0,
      isSelecet: false
    })
  },

  closeTooltipEvent: function() {
    this.setState({
      isActive: false
    })
  },

  componentWillUpdate: function(nextProps, nextState) {
    //console.log("\nNState",nextState.isActive, "\nthisState",this.state.isActive);
  },

  render: function () {
    console.log(this.state.isActive);
    const self = this;
    return (
      <li key={this.props.name}>
          <button onClick={this.openTooltipEvent} className={this.state.isClick ? 'btn-filter click' : 'btn-filter' }>{this.capitalize(this.props.name)} {this.state.count ? '('+this.state.count+')' : ''} </button>
            <div className={this.state.isActive ? 'filter-lists active' : 'filter-lists'} >
            {
              this.props.items.map(function(item) {
                return ( 
                  <Item id={item.id} title={item.title} increaseCount={self.increaseCount} isSelect={self.state.isSelect} />
                )
              })
            }
            <div>
              <button onClick={this.resetIsClick}> Cancel </button> 
            </div>
            <div><button> Apply </button> </div>
            </div>
      </li>
    );
  }
});

module.exports = FilterItems;
