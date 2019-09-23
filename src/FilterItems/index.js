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
      isSelect: true,
      count: 0,
      isShow: false
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
  this.setState(function(prevState) {
    return {
    isClick: !prevState.isClick  
    }
  })
  },

  increaseCount: function() {
    this.setState({
      count: this.state.count += 1
    })
  },

  decreaseCount: function() {
    this.setState({
      count: this.state.count -= 1
    })
  },

  resetIsClick: function() {
    this.setState({
      count: 0,
      isSelect: false
    })
  },

  componentDidMount: function() {
    //console.log("MOUNT", this.state.isShow)
    this.setState({
      isShow: true
    })
  },

  componenDidUnmount: function() {
    //console.log("UNMOUNT", this.state.isShow)
    this.setState({
      isShow: false
    })
  },

  render: function () {
    //console.log("RENDER", this.state.isShow)
    const self = this;
    return (
      <li key={this.props.name}>
          <button onClick={this.openTooltipEvent} className={this.state.isClick ? 'btn-filter click' : 'btn-filter' }>{this.capitalize(this.props.name)} {this.state.count ? '('+this.state.count+')' : ''} </button>
            <div className={this.state.isClick ? 'filter-lists active' : 'filter-lists'} >
            {
              this.props.items.map(function(item) {
                return ( 
                  <Item 
                    id={item.id} 
                    title={item.title} 
                    increaseCount={self.increaseCount}
                    decreaseCount={self.decreaseCount}  
                    isSelect={self.state.isSelect} />
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
