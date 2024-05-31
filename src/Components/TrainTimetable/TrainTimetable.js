import React, { useEffect, useState } from 'react';
import './TrainTimetable.css';
import { useNavigate } from "react-router-dom";

const TrainTimetable = () => {
    const [trainId, settrainId] = useState("");
    const [stationName, setStationName] = useState("");
    const [arrivaltime, setArrivalTime] = useState("");
    const [departureTime, setDepartureTime] = useState("");
    const [trains, setTrains] = useState([]);

    // const formHandle = async (e) => {
        // e.preventDefault();
        
        // Add code here to handle form submission if needed
        // console.log(train);
    //    const response = await 
    // }

    const train = {trainId, stationName, arrivaltime, departureTime };

    useEffect(() => {
        fetch("http://localhost:8080/railway/getTrains")
      .then(res=>res.json())
      .then((result) => {
        setTrains(result);
      })
    }, [])
       


    return (
        
        <div className='container'>
            <div className='timetable-form'>
                <div className='train-list'>
                    <h2>Train Timetable</h2>
                    {trains.map(train => (
                        <div key={train.id} className='train-item'>
                       
                        
                       <th>Sequence</th>
                       <th>Station Name</th>
                       <th>Arrival Time</th>
                       <th>Departure Time</th>
                        <tbody className='traintable-body'>
                        <tr>{train.trainId}</tr>
                        <td key={`station-${train.id}`}>{train.stationName}</td>
                        <tr>{train.arrivaltime}</tr>
                        <tr>{train.departureTime}</tr>
                        </tbody>
                              {/* <p>Station Name: {train.stationName}</p>
                            <p>Arrival Time: {train.arrivaltime}</p>
                            <p>Departure Time: {train.departureTime}</p>*/}
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrainTimetable;
