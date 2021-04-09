import "./SingleDayTable.css";
import Waiter from "./Waiter";
import React from "react";

class SingleDayTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th colspan="2" id="day">
              <p>
                {this.props.day} {this.props.date}
              </p>
            </th>
          </tr>

          {this.props.sprints.map((sprint) => {
            return (
              <tr>
                <th>{sprint.hour}</th>
                <td>
                  {sprint.waiters.map((waiter) => (
                    <Waiter waiterName={waiter}></Waiter>
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
