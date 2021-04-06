import "./App.css";
import Employee from "./Components/Employee";
import firebase from "firebase";

import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sprints: [],
    };
  }

  componentDidMount() {
    const sprintsRef = firebase.database().ref("lunedi");
    sprintsRef.on("value", (snapshot) => {
      let sprints = snapshot.val();
      let newState = [];
      for (let sprint in sprints) {
        newState.push({
          day: sprint,
          waiter: sprints[sprint].waiter,
          hour: sprints[sprint].hour,
        });
      }
      this.setState({
        sprints: newState,
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
        <section className="display-item">
          <div className="wrapper">
            <h2>Lunedi</h2>
            <ul>
              {this.state.sprints.map((sprint) => {
                return (
                  <li key={sprint.id}>
                    <h3>{sprint.waiter}</h3>
                    <p>hour: {sprint.hour}</p>
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
