import "./SingleDayTable.css";
import React from "react";

class SingleDayTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <th></th>
            <th>
              {this.props.day} {this.props.date}
            </th>
          </tr>

          {this.props.sprints.map((sprint) => {
            return (
              <tr>
                <th>{sprint.hour}</th>
                <td>{sprint.waiters.map((waiter) => waiter)}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default SingleDayTable;
