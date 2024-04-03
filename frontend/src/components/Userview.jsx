import React, { useState, useEffect } from "react";
import axios from "axios";

const Userview = () => {
  const [userviewData, setUserviewData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/userview")
      .then((res) => {
        setUserviewData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Userview Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Movement Type</th>
          </tr>
        </thead>
        <tbody>
          {userviewData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.description}</td>
              <td>{data.date}</td>
              <td>{data.quantity}</td>
              <td>{data.movementType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userview;
