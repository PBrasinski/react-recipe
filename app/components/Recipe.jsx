var React = require('react');

var Recipe = React.createClass({
  onClick: function(){
    var {id} = this.props;
    var myId = '#' + id;
    $(myId).toggle();
  },
  render: function(){
    var {id,recipeName} = this.props;
    return (
      <li className="accordion-item" data-accordion-item="" onClick={this.onClick}>
        <a href="#" className="accordion-title">{recipeName}</a>
        <div className="accordion-content" data-tab-content="" id={id}>
          {id}. {recipeName}
        </div>
      </li>
    )
  }
});

module.exports = Recipe;
