import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      items: []
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.trim() === "") {
      return;
    }
    this.setState({ items: [this.state.text, ...this.state.items] });
    this.setState({ text: "" });
  };

  // const { todos } = this.state;
  //       const newTodos = todos.filter((todo, i) => i !== index);
  //       this.setState({ todos: newTodos});

  deleteTodo = (index) => {
    const newTodos = this.state.items.filter((itesm, i) => i !== index);
    this.setState({ items: newTodos });
  };

  // handleSubmit = (e) => {
  //   e.preventDefault();
  // if (this.state.text.trim() === "") {
  //   return;
  // }
  //   const newText = {
  //     text: this.state.text,
  //     id: Date.now()
  //   };
  //   this.setState((prevState) => {
  //     return {
  //       items: prevState.items.concat(newText)
  //     };
  //   });
  //   this.setState({ text: "" });
  // };

  // deleteTodo = (name, i) => {
  //   let todos = this.state.items.slice();
  //   todos.splice(i, 1);
  //   this.setState({
  //     items: todos
  //   });
  // };

  render() {
    console.log(this.state.items);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.text}
            onChange={this.handleChange}
            type="text"
          />
          <button>Add</button>
        </form>
        <TodoList items={this.state.items} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => {
          return (
            <li
              style={{ cursor: "pointer" }}
              key={(item, index)}
              onClick={() => this.props.deleteTodo(index)}>
              {item}
              {/* {item.text} */}
            </li>
          );
        })}
      </div>
    );
  }
}
