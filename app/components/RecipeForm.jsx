var React = require('react');

var RecipeForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var myRecipes = {};

    var recipeName = this.refs.recipeName.value;
    var ingredients = this.refs.ingredients.value;

    if (recipeName.length === 0){
      this.refs.recipeName.focus()
    }else if(ingredients.length === 0){
      this.refs.ingredients.focus()
    }else{
      this.refs.recipeName.value = '';
      this.refs.ingredients.value = '';

      myRecipes.recipeName = recipeName;
      myRecipes.ingredients = ingredients;

      this.props.handleFormSubmit(myRecipes);
    }
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
