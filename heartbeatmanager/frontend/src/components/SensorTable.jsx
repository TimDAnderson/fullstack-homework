import * as React from "react";

export const SensorTable = props => {

  return (
    <table>
      <tr>
        <th>Sensor</th>
        <th>Max Capactity</th>
        <th>Current Capacity</th>
        <th>Last Updated</th>
      </tr>
      {props.sensors.map((sensor) => {
        return (
          <tr>
            <td>{sensor.name}</td>
            <td>{sensor.maxCapacity}</td>
            <td>{sensor.currentCapacity}</td>
            <td>{sensor.created_at}</td>
          </tr>
        )
      })}
    </table>
  )
}
