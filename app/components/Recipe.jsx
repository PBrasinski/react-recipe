var React = require('react');

var Recipe = React.createClass({
  render: function(){
    var {id,text} = this.props;
    return (
      <li className="accordion-item" data-accordion-item>
        <a href="#" className="accordion-title">{text}</a>
        <div className="accordion-content" data-tab-content>
          {id}. {text}
        </div>
      </li>
    )
  }
});

module.exports = Recipe;
