const React = require('react');
const styles = require('./Items.css');
const createReactClass = require('create-react-class');


const Items = createReactClass({
  getInitialState: function() {
    return({
      name: this.props.name,
      isClick: false,
      count: 0
    })
  },

  clickBtnEvent: function() {
    this.setState({
      isClick: true,
      count: this.state.count += 1
    })
    console.log(this.state.count);
    this.props.onIncreaseCount(this.state.count);
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
      <button onClick={this.clickBtnEvent} className={this.state.isClick ? 'filter-item click' : 'filter-item'} data-id={this.props.id}>{this.props.title}</button> 
    );
  }
});

module.exports = Items;
