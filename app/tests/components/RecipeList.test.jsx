var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var RecipeList = require('RecipeList');
var Recipe = require('Recipe');
describe('RecipeList', () => {
  it('should exist', () => {
    expect(RecipeList).toExist();
  });

  it('should render one Recipe components for each recipe items', () => {
    var recipes = [{
      id: 1,
      text: 'applepen'
    },{
      id: 2,
      text: 'pineapplepen'
    }];
    var recipeList = TestUtils.renderIntoDocument(<RecipeList recipes={recipes}/>);
    var recipeComponents = TestUtils.scryRenderedComponentsWithType(recipeList, Recipe);

    expect(recipeComponents.length).toBe(recipes.length)
  })
});
