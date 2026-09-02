function BoxColor({ r, g, b }) {
  const boxStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
    width: "500px",
    height: "100px",
    border: "2px solid black",
    color: "white",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };

  const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

  return (
    <div style={boxStyle}>
      <div>
        <p>rgb({r},{g},{b})</p>
        <p>{hex}</p>
      </div>
    </div>
  );
}

export default BoxColor;