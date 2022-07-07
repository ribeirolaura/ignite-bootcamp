import { useState} from 'react';

export function Counter() {

    const [counter, setCounter] = useState(0);
    
    function incrementar () {
        setCounter(counter + 1);
    }

  return (
    <>
      <p>{counter}</p>
      <button onClick={incrementar}>Incrementar</button>
    </>
  );
}
