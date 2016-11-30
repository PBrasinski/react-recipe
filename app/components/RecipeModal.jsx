var React = require('react');
var Boron = require('boron');
var RecipeForm = require('RecipeForm');

var Modal = require('boron/OutlineModal');
var RecipeModal = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(myRecipes){
        this.refs.modal.hide();
        this.props.onSubmit(myRecipes)
    },
    render: function() {
      return (
        <div>
          <button className="button expanded" onClick={this.showModal}>Open</button>
          <Modal ref="modal">
              <button className="button hollow float-right" onClick={this.hideModal}>x</button>
              <hr/>
              <RecipeForm handleFormSubmit={this.hideModal}/>
          </Modal>
        </div>
      );
    }
});

module.exports = RecipeModal;
