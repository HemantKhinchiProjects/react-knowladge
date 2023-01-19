import React, { useState, useEffect } from 'react';
const customHooks = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `Chats (${number})`;
  });
};
export default customHooks;
