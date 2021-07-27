const axios = require('axios').default;

const generateNumberWithinRange = (min, max) => (Math.floor(Math.random() * (max - min) + min));

const rooms = ['lobby', 'cafe', 'gym', 'conferenceRoom'];
const serialNumbers = ['5001', '5002', '5003', '5004'];
const maxCapacity = [30, 20, 100, 15];
const randomUppoerRange = [30, 10, 75, 5];
const randomLowerRange = [20, 5, 25, 0];


(() => {
  setInterval(async ()=>{

    let randomMonitorIndex = generateNumberWithinRange(0, 5);

    let dataObj = {
      name: rooms[randomMonitorIndex],
      serialNumber: serialNumbers[randomMonitorIndex],
      maxCapacity: maxCapacity[randomMonitorIndex],
      currentCapacity: generateNumberWithinRange(randomLowerRange[randomMonitorIndex], randomUppoerRange[randomMonitorIndex]),
    };

    try {
      await axios.post('http://localhost:8000/api/heartbeats/', dataObj);
    } catch (err) {
      console.log(err);
    }
  }, 500);
})();
