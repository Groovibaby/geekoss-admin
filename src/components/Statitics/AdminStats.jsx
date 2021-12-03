import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const AdminStats = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/stats/admins`)
      .then((response) => response.data)
      .then((data) => setNumber(data[0].admins));
  }, []);

  return (
    <Link to="/admin/admins" className="Statistics-Blocks-Overall Admins col-4">
      <div className="Statistics-Blocks-Left col-8">
        <div className="Statistics-Blocks-Number">{number}</div>
        <div className="Statistics-Blocks-notice">
          <p>
            <strong>Adminstrateurs</strong> sur la plateforme
          </p>
        </div>
      </div>
      <div className="Statistics-Blocks-Fas col-4">
        <span className="fas fa-users-cog fa-4x" />
      </div>
    </Link>
  );
};

export default AdminStats;
