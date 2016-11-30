var React = require('react');

var Recipe = React.createClass({
  onClick: function(){
    var {id} = this.props;
    var myId = '#' + id;
    $(myId).toggle();
  },
  render: function(){
    var {id,text} = this.props;
    return (
      <li className="accordion-item" data-accordion-item="" onClick={this.onClick}>
        <a href="#" className="accordion-title">{text}</a>
        <div className="accordion-content" data-tab-content="" id={id}>
          {id}. {text}
        </div>
      </li>
    )
  }
});

module.exports = Recipe;
