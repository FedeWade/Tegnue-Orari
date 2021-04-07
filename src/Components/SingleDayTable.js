import "./SingleDayTable.css";
import React from "react";

import PropTypes from "prop-types";

class SingleDayTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <th></th>
            <th>Lunedì {this.props.day}</th>
          </tr>
          <tr>
            <th>9:00</th>
            <td>sprints info</td>
          </tr>
          <tr>
            <th>10:00</th>
            <td>sprints info</td>
          </tr>
          <tr>
            <th>12:00</th>
            <td>sprints info</td>
          </tr>
          <tr>
            <th>18:00</th>
            <td>sprints info</td>
          </tr>
          <tr>
            <th>19:00</th>
            <td>sprints info</td>
          </tr>
        </table>
      </div>
    );
  }
}

SingleDayTable.defaultProps = {
  day: 99,
  sprints: [],
};
SingleDayTable.propTypes = {
  day: PropTypes.number,
  sprints: PropTypes.array,
};

export default SingleDayTable;
