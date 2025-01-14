import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return { toggle, changeToggle };
}
