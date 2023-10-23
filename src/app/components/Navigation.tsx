// Navigation.js
import React from "react";

function Navigation() {
  return (
    <nav className="bg-blue-600 p-4 ">
      <ul className="flex space-x-4">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
