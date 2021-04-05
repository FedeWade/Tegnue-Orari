import "./App.css";
import Employee from "./Components/Employee";
import firebase from "firebase";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.currentItem,
      user: this.state.username,
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: "",
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user,
        });
      }
      this.setState({
        items: newState,
      });
    });
  }

  render() {
    let currentDate = new Date();
    let currentDayOfWeek = currentDate.getDay();
    let currentDayOfMonth = currentDate.getDate();

    let domenica = new Date(
      new Date().setDate(currentDayOfMonth - currentDayOfWeek + 7)
    );
    let lunedi = new Date(
      new Date().setDate(currentDayOfMonth + (1 - currentDayOfWeek))
    );
    let martedi = new Date(
      new Date().setDate(currentDayOfMonth + (2 - currentDayOfWeek))
    );
    let mercoledi = new Date(
      new Date().setDate(currentDayOfMonth + (3 - currentDayOfWeek))
    );
    let giovedi = new Date(
      new Date().setDate(currentDayOfMonth + (4 - currentDayOfWeek))
    );
    let venerdi = new Date(
      new Date().setDate(currentDayOfMonth + (5 - currentDayOfWeek))
    );
    let sabato = new Date(
      new Date().setDate(currentDayOfMonth + (6 - currentDayOfWeek))
    );

    return (
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Fun Food Friends</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="What's your name?"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="text"
                name="currentItem"
                placeholder="What are you bringing?"
                onChange={this.handleChange}
                value={this.state.currentItem}
              />
              <button>Add Item</button>
            </form>
          </section>
          <section className="display-item">
            <div className="wrapper">
              <ul></ul>
            </div>
          </section>
        </div>

        <section className="display-item">
          <div className="wrapper">
            <ul>
              {this.state.items.map((item) => {
                return (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>brought by: {item.user}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
/*
    return (

      <div className="tableDiv">
        <button onClick={createElement}> add item</button>

        <table>
          <tr>
            <td></td>
            <td>Lunedì {lunedi.getDate()}</td>
            <td>Martedì {martedi.getDate()}</td>
            <td>Mercoledì {mercoledi.getDate()}</td>
            <td>Giovedì {giovedi.getDate()}</td>
            <td>Venerdì {venerdi.getDate()}</td>
            <td>Sabato {sabato.getDate()}</td>
            <td>Domenica {domenica.getDate()}</td>
          </tr>
          <tr>
            <td>9:00</td>
            <td>
              <Employee name="Federico"></Employee>
            </td>
          </tr>
          <tr>
            <td>10:00</td>
          </tr>
          <tr>
            <td>11:00</td>
          </tr>
          <tr>
            <td>12:00</td>
          </tr>
          <tr>
            <td>18:00</td>
          </tr>
          <tr>
            <td>19:00</td>
          </tr>
        </table>
      </div>
    );
  }
}
*/
export default App;
