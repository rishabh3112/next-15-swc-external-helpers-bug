import { useEffect } from "react";
import b from "backbone";

const Component = () => {
  useEffect(() => {
    console.log(b);
    b.Modal();
  }, []);
  return <div>Hello</div>;
};

export default Component;
