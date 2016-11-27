var React = require('react');

var RecipeForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    this.props.handleFormSubmit();
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="recipeName" placeholder="name of your recipe..."/>
        <input type="text" ref="ingredients" placeholder="ingredients separated by comma..."/>
        <button className="button hollow">Add Recipe</button>
      </form>
    )
  }
});

module.exports = RecipeForm;
