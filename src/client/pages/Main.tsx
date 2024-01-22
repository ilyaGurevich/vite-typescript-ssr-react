import React, { useEffect, useState } from "react";

const Main = () => {

  const [count, setCount] = useState(0);

  const htmlString = `
    <div id="server-test">server</div>
    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const serverTestElement = document.getElementById("server-test");
        serverTestElement.textContent = "client";
      });
    </script>
  `;
  
  const handleClick = () => {
    setCount((c) => c + 1);
  };
  
  return (
    <>
      <button onClick={handleClick}>{count}</button>
      <div dangerouslySetInnerHTML={{ __html: htmlString }}>
      </div>
    </>
  );
};

export default Main;
