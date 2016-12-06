var $ = require('jquery');

module.exports = {
  setRecipes: function(recipes){
    if($.isArray(recipes)){
      localStorage.setItem('recipes', JSON.stringify(recipes));
      return recipes;
    }
  },
  getRecipes: function(){
    var stringRecipes = localStorage.getItem('recipes');
    var recipes = [];

    try{
      recipes = JSON.parse(stringRecipes);
    }catch (e){

    }

    return $.isArray(recipes) ? recipes : []
  }
}
