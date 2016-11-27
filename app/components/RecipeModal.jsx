var React = require('react');
var ReactDOM = require('react-dom');
var reactDOMServer = require('react-dom/server');

var RecipeModal = React.createClass({
  componentDidMount: function(){
    var modalMarkup = (
      <div id="recipe-modal" className="reveal text-center" data-reveal="">
        <p>
          Hello
        </p>
        <p>
          <button className="button hollow" data-close="">
            Add Recipe
          </button>
        </p>
      </div>
    );
    var $modal = $(reactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);
    var modal = new Foundation.Reveal($('#recipe-modal'));
    modal.open();
  },
  render: function(){
    return (
      <div>

      </div>
    )
  }
})

module.exports = RecipeModal;
