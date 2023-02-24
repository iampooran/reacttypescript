import React, { useCallback, useEffect, useState } from "react";


const HooksExample = () => {
  //TS with useState
  const [state, setState] = useState<string>("This is state");

  //TS with useState
  const [value, setValue] = useState<string | number>("hello");

  useEffect(() => {
    setState("This is new value");
    setValue(123);
  }, []);


  /*
  //TS with useCallback
  const memorizedCallback = useCallback(
    (parms1: string, parms2: string): boolean => {
      console.log(parms1, parms2);
      return true;
    },
    []
  );
  */

  //Any type in useCallback
  useCallback((e) => {}, []);
  useCallback((e: any) => {}, []);

  /*
  //ACTION in Reducer
  type ACTIONTYPE =
    | { type: "increment"; payload: number }
    | { type: "decrement"; payload: string };
    */



/*
  // Define the initial state using that type
  interface CounterState {
    value: number;
  }

  const initialState: CounterState = {
    value: 0,
  };

  // Use Reft with TS
  // const divRef = useRef<HTMLDivElement>(null);
*/

  return (
    <div>
      <p>{state}</p>
      <p>{value}</p>
    </div>
  );
};

export default HooksExample;
