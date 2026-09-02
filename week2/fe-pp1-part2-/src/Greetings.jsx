function Greetings({ lang, children }) {
  const greetings = {
    fi: "Terve",
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour"
  };

  return (
    <div style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
      <p>{greetings[lang]} {children}</p>
    </div>
  );
}

export default Greetings;