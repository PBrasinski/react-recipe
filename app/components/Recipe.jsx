var React = require('react');

var Recipe = React.createClass({
  render: function(){
    var {id,text} = this.props;
    return (
      <div>
        {id}. {text}
      </div>
    )
  }
});

module.exports = Recipe;
