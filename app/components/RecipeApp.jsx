var React = require('react');
var RecipeList = require('RecipeList');
var RecipeModal = require('RecipeModal');
var RecipeSearch = require('RecipeSearch');
var uuid = require('node-uuid');
var RecipeAPI = require('RecipeAPI');

var RecipeApp = React.createClass({
getInitialState: function(){
  return {
    searchText: '',
    recipes: RecipeAPI.getRecipes()
  };
},
  onSearch: function(searchText){
    this.setState({
      searchText: searchText.toLowerCase()
    })
  },
  handleAddRecipe: function(myRecipes){
    console.log(myRecipes.recipeName, myRecipes.ingredients);
    this.setState({
      recipes: [
        ...this.state.recipes,
        {
          id: uuid(),
          recipeName: myRecipes.recipeName,
          ingredients: myRecipes.ingredients
        }
      ]
    });
  },
  componentDidUpdate: function(){
    RecipeAPI.setRecipes(this.state.recipes);
  },
  render: function(){
    var {recipes} = this.state;
    return (
      <div>
        <RecipeSearch onSearch={this.onSearch}/>
        <ul className="accordion" data-accordion data-allow-all-closed="true" data-multi-expand="true">
          <RecipeList recipes={recipes} />
        </ul>
        <RecipeModal onSubmit={this.handleAddRecipe}/>
      </div>
    )
  }
});

module.exports = RecipeApp;
