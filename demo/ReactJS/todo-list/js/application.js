/**================================================
JS : MY CUSTOM SCRIPTS
===================================================*/

/** @jsx React.DOM */

var TodoList = React.createClass({
  render: function() {
    
    var createItem = function(itemText, index) {
      return <li key={index + itemText}>{itemText}</li>;
    };
    
    return <ul className="list-container">{this.props.items.map(createItem)}</ul>;
  }
});

var ToDoApp = React.createClass({
	
	//Create an array and empty text on intialization
	getInitialState: function() {
		return {items: [], text: ''};
	},
	
	//Added a new list
	addToList: function(e) {
		if(this.state.text === '') {
			return;
		}
		var nextItems = this.state.items.concat([this.state.text]);
    
    var nextText = '';

    this.setState({items: nextItems, text: nextText});
		
		//Create new element to append to list
		var createNewEle = function(itemText, index) {
			return <p key={index + itemText}>{itemText}</p>
		}

		return this.props.items.map(createNewEle);
	},
	//On change of test update the text 
	onChange: function(e) {
		this.setState({text: e.target.value});
	},
	//To Render the todo list app
	render: function() {
	  return (
	  	//HTML content to be rendered
	  	<div className="main-container">
	  		<h2>Todo List</h2>
	  		<input className="add-to-list" placeholder="Add to list" onChange={this.onChange} value={this.state.text}/>
	  		<button className="add-btn" onClick={this.addToList}>Add</button>

			<TodoList items={this.state.items}/>
	  	</div>  	

	  );
	}
});

//Instruct the page to use above created component
React.render(<ToDoApp />, document.body);