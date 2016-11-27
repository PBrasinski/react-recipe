var React = require('react');

var AddRecipe = React.createClass({
  handleClick: function(e){
    e.preventDefault();
    this.props.onAddRecipe();
  },
  render: function(){
    return (
      <div>
        <button className="button expanded" onClick={this.handleClick}>
          Add Recipe
        </button>
      </div>
    )
  }
});

module.exports = AddRecipe;
