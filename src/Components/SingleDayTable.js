import "./SingleDayTable.css";
import Waiter from "./Waiter";
import React from "react";
import callLogo from "../callicon.png";

class SingleDayTable extends React.Component {
  chiamata(h) {
    if (h === "12Chiamata") {
      return (
        <span>
          12
          <img src={callLogo} width="40" height="40" alt="Chiamata"></img>
        </span>
      );
    }
    if (h === "19Chiamata") {
      return (
        <span>
          19
          <img src={callLogo} width="40" height="40" alt="Chiamata"></img>
        </span>
      );
    }

    return h;
  }

  checkWaiterPresence(filter, waiters) {
    for (let i = 0; i < waiters.length; i++)
      if (waiters[i] === filter) return true;
    return false;
  }

  render() {
    if (this.props.sprints.length === 0) return null;
    const _ = require("lodash");

    let clonedArray = _.cloneDeep(this.props.sprints);

    if (this.props.filter !== "") {
      for (let i = 0; i < clonedArray.length; i++) {
        if (
          //if waiter of filter not present remove full hour sprint
          !this.checkWaiterPresence(this.props.filter, clonedArray[i].waiters)
        ) {
          clonedArray.splice(i, 1);
          i--;
        } else {
          //if present remove other waiters of same sprints
          for (let j = 0; j < clonedArray[i].waiters.length; j++) {
            if (clonedArray[i].waiters[j] !== this.props.filter) {
              clonedArray[i].waiters.splice(j, 1);
              j--;
            }
          }
        }
      }
    }

    return (
      <div className="tableContainer" id={this.props.day}>
        <table>
          <tr>
            <th colspan="2" id="day">
              <p>
                {this.props.day} {this.props.date}
              </p>
            </th>
          </tr>

          {clonedArray.map((sprint) => {
            if (sprint.hour === "18:00") {
              return (
                <tr className="sprint18">
                  <th>{this.chiamata(sprint.hour)}</th>
                  <td>
                    {sprint.waiters.map((waiter) => (
                      <Waiter
                        waiterName={waiter}
                        filter={this.props.filter}
                      ></Waiter>
                    ))}
                  </td>
                </tr>
              );
            } else
              return (
                <tr>
                  <th>{this.chiamata(sprint.hour)}</th>
                  <td>
                    {sprint.waiters.map((waiter) => (
                      <Waiter
                        waiterName={waiter}
                        filter={this.props.filter}
                      ></Waiter>
                    ))}
                  </td>
                </tr>
              );
          })}
        </table>
      </div>
    );
  }
}

export default SingleDayTable;
