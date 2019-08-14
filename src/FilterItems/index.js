const React = require('react');
const styles = require('./FilterItems.css');
const Item = require('../Items');
const createReactClass = require('create-react-class');


const FilterItems = createReactClass({
  getInitialState: function() {
    return({
      name: this.props.name,
      isActive: false,
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
      isActive: true
    })
  },

  increaseCount: function(val) {
    this.setState({
      count: val
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
    console.log("PROPS",this.state.count);

    return (
      <li onClick={this.openTooltipEvent} key={this.props.name}>
          <button className='btn-filter'>{this.capitalize(this.props.name)} {this.state.count ? '('+this.state.count+')' : ''} </button>
            <div className={this.state.isActive ? 'filter-lists active' : 'filter-lists'} >
            {
              this.props.items.map(function(item) {
                return ( 
                  <Item id={item.id} title={item.title} onIncreaseCount={self.increaseCount} />
                )
              })
            }
            </div>
      </li>
    );
  }
});

module.exports = FilterItems;
