import React from "react";

function App() {
  const el = React.createElement(
    "hello",
    { toWhat: "mamad" },
    "hello to $toWhat"
  );
  /**
   * How can I use toWhat in the tird paramter of createElement?
   */
  return el;
}

export default App;
