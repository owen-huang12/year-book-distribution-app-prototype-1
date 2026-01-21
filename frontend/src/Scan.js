import React from "react";

export default function Scan() {
  return (
    <div>
      <h2>Scan Mode</h2>
      {/* later: input autofocus + barcode scan handling */}
      <input
        autoFocus
        placeholder="Scan or type student ID..."
        style={{ fontSize: "1.2rem", padding: "10px", width: "320px" }}
      />
    </div>
  );
}