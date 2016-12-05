var React = require('react');

var RecipeSearch = React.createClass({
  handleSearch: function(){
    var searchText = this.refs.searchText.value;

    this.props.onSearch(searchText);
  },
  render: function(){
    return (
      <div>
        <input type="text" ref="searchText" onChange={this.handleSearch} placeholder="Search recipes..."/>
      </div>
    )
  }
});

module.exports = RecipeSearch;
