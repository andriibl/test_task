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

  clickBtnEvent: function(e) {
    this.setState({
      isClick: true
    })
    if(this.state.isClick) {
       this.setState({isClick: false})
       e.preventDefault();
       if(!this.props.isSelect) {
        this.props.increaseCount();  
      } else 
       this.props.decreaseCount();
    } else {
      this.props.increaseCount();
    }
  },

  closeTooltipEvent: function() {
    this.setState({
      isActive: false
    })
  },

  resetHighlight: function() {
    this.setState({
        isClick: this.props.isSelect
    })
  },

  componentDidUpdate: function(nextProps, nextState) {
  
  },

  render: function () {
    console.log("IS",this.state.isClick)
    const isClick = this.state.isClick ? 'filter-item click' : 'filter-item';
    const self = this;

    return (
      <button onClick={function(e) {self.clickBtnEvent(e)}} 
        className={isClick} 
        data-id={this.props.id}>
        {this.props.title}
      </button> 
    );
  }
});

module.exports = Items;
