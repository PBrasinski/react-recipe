var React = require('react');
var RecipeList = require('RecipeList');
var RecipeModal = require('RecipeModal');
var RecipeSearch = require('RecipeSearch');

var RecipeApp = React.createClass({
  onSearch: function(searchText){
    this.setState({
      searchText: searchText.toLowerCase()
    })
  },
  onSubmit: function(myRecipes){
    console.log(myRecipes.recipeName, myRecipes.ingredients);
  },
  getInitialState: function(){
    return {
      searchText: '',
      recipes: [
        {
          id: 1,
          recipeName: 'Onion cream'
        },{
          id: 2,
          recipeName: 'Dumplings'
        },{
          id: 3,
          recipeName: 'Applepie'
        },{
          id: 4,
          recipeName: 'Chocolate icecream'
        }
      ]
    };
  },
  render: function(){
    var {recipes} = this.state;
    return (
      <div>
        <RecipeSearch onSearch={this.onSearch}/>
        <ul className="accordion" data-accordion data-allow-all-closed="true" data-multi-expand="true">
          <RecipeList recipes={recipes} />
        </ul>
        <RecipeModal onSubmit={this.onSubmit}/>
      </div>
    )
  }
});

module.exports = RecipeApp;
