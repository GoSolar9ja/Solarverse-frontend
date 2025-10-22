import { UploadField } from "@solarverse/ui";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UploadField fieldProps={{ name: "images" }} />
    </>
  );
}

export default App;
