import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-running"></i>
          <span>Course à pied</span>
        </li>
        <li className="hobby">
          <i className="fas fa-hiking"></i>
          <span>Randonnées</span>
        </li>
        <li className="hobby">
          <i className="fas fa-basketball-ball"></i>
          <span>basketball</span>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin"></i>
          <span>Crypto-monnaies</span>
        </li>
        <li className="hobby">
          <i className="fas fa-chess-board"></i>
          <span>Jeux de Societés</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
