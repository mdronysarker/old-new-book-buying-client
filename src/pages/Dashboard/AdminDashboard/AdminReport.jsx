import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

export default function AdminReport() {
  const [report, setReport] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getReport")
      .then((res) => {
        setReport(res.data);
        // console.log('report ', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {report.length > 0 && (
        <h2 className="text-3xl">
          Total {report[1].totalQuantity} New book sells and Total{" "}
          {report[0].totalQuantity} old books sells in last 10 days.
        </h2>
      )}
    </div>
  );
}
