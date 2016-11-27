var React = require('react');
var RecipeList = require('RecipeList');
var AddRecipe = require('AddRecipe');
var RecipeModal = require('RecipeModal');

var RecipeApp = React.createClass({
  getInitialState: function(){
    return {
      recipes: [
        {
          id: 1,
          text: 'Onion cream'
        },{
          id: 2,
          text: 'Dumplings'
        },{
          id: 3,
          text: 'Applepie'
        },{
          id: 4,
          text: 'Chocolate icecream'
        }
      ]
    };
  },
  handleAddRecipe: function(){
    return (
      <RecipeModal/>
    )
  },
  render: function(){
    var {recipes} = this.state;

    return (
      <div>
        <RecipeList recipes={recipes}/>
        <AddRecipe onAddRecipe={this.handleAddRecipe}/>
      </div>
    )
  }
});

module.exports = RecipeApp;
