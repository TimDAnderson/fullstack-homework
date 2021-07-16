import * as React from "react";
import axios from 'axios';
import { SensorTable } from './SensorTable.jsx';

export const App = () => {

  var [sensors, setSensors] = React.useState([]);

  // I ran out of time and will only grab the latest time stamp for each sensor, this function is not very pretty
  // I was hoping I could graph a room capacity percentage for each sensor
  const dataSorter = (array) => {
    let dataObj = {};
    for (let i = 0; i < array.length; i++) {
      if (dataObj[array[i]['name']] === undefined) {
        dataObj[array[i]['name']] = array[i];
      } else {
        dataObj[array[i]['name']] = array[i];
      }
    }
    setSensors(Object.values(dataObj))
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      axios.get('/api/heartbeats/')
        .then((response) => {
          dataSorter(response.data)
        })
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>This table updates once a second while the heartbeat generator is running</h3>
      <SensorTable sensors={sensors}/>
    </div>

  )
}