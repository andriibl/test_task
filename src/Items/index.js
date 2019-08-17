const React = require('react');
require('./Items.css');
const createReactClass = require('create-react-class');


const Items = createReactClass({
  getInitialState: function() {
    return({
      name: this.props.name,
      count: 0
    })
  },

  clickBtnEvent: function() {
    this.setState({
      count: this.state.count += 1
    })
    //this.props.onIncreaseCount(this.state.count);
  },

  closeTooltipEvent: function() {
    this.setState({
      isActive: false
    })
  },

  componentWillUpdate: function(nextProps, nextState) {
    
  },

  render: function () {
    console.log(this.state.isSelecet);
    return (
      <button onClick={this.props.increaseCount} 
        disabled={this.props.isSelecet ? 'disabled' : ''} 
        className={this.props.isSelecet ? 'filter-item click' : 'filter-item'} 
        data-id={this.props.id}>
        {this.props.title}
      </button> 
    );
  }
});

module.exports = Items;
