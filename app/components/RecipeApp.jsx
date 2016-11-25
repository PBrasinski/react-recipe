var React = require('react');
var RecipeList = require('RecipeList');
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
  render: function(){
    var {recipes} = this.state;

    return (
      <div>
        <RecipeList recipes={recipes}/>
      </div>
    )
  }
});

module.exports = RecipeApp;
