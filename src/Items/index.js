const React = require('react');
require('./Items.css');
const createReactClass = require('create-react-class');


const Items = createReactClass({
  getInitialState: function() {
    return({
      name: this.props.name,
      count: 0,
      isClick: false
    })
  },

  clickBtnEvent: function() {
    this.setState({
      isClick: true
    })
    this.props.increaseCount();
  },

  closeTooltipEvent: function() {
    this.setState({
      isActive: false
    })
  },

  resetHighlight: function() {
    if(!this.props.isSelect) {
      this.setState({
        isClick: false
      })
    } else {
      this.setState({
        isClick: true
      })
    }
  },

  componentWillUpdate: function(nextProps, nextState) {

  },

  render: function () {
    const isClick = this.state.isClick ? 'filter-item click' : 'filter-item';

    return (
      <button onClick={this.clickBtnEvent} 
        disabled={this.state.isClick ? 'disabled' : ''} 
        className={this.state.isClick ? 'filter-item click' : 'filter-item'} 
        data-id={this.props.id}>
        {this.props.title}
      </button> 
    );
  }
});

module.exports = Items;
