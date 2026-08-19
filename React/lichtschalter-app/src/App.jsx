import { useState } from "react";

function Lichtschalter() {
  const [lichtAn, setLichtAn] = useState(false);

  function lichtUmschalten() {
    setLichtAn(!lichtAn);
  }

  const seitenStyle = {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lichtAn ? "yellow" : "gray",
  };

  return (
    <div style={seitenStyle}>
      <h1>
        {lichtAn ? "Das Licht ist an" : "Das Licht ist aus"}
      </h1>

      <button onClick={lichtUmschalten}>
        {lichtAn ? "Licht ausschalten" : "Licht einschalten"}
      </button>
    </div>
  );
}

export default Lichtschalter;