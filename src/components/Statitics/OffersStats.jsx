import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const OffersStats = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/stats/offers`)
      .then((response) => response.data)
      .then((data) => setNumber(data[0].offers));
  }, []);

  return (
    <Link to="/admin/offers" className="Statistics-Blocks-Overall Offers col-4">
      <div className="Statistics-Blocks-Left col-8">
        <div className="Statistics-Blocks-Number">{number}</div>
        <div className="Statistics-Blocks-notice">
          <p>
            <strong>Annonces</strong> publiées sur Geekoss
          </p>
        </div>
      </div>
      <div className="Statistics-Blocks-Fas col-4">
        <span className="fas fa-bullhorn fa-4x" />
      </div>
    </Link>
  );
};

export default OffersStats;
