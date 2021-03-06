import React, { Component } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
  handleSave = (text) => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1 className="page-title">Todo List</h1>

        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="What needs to be done?"
        />
      </header>
    );
  }
}

export default Header;
