var React = require('react');

var RecipeForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var recipeName = this.refs.recipeName.value;
    console.log(recipeName)
    this.props.handleFormSubmit();
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <h6>Recipe Name:</h6>
        <input type="text" ref="recipeName" id="recipeName" placeholder="name of your recipe..."/>
        <h6>Ingredients:</h6>
        <input type="text" ref="ingredients" placeholder="ingredients separated by comma..."/>
        <button className="button hollow">Add Recipe</button>
      </form>
    )
  }
});

module.exports = RecipeForm;
