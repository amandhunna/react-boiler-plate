import React from 'react';

function sum(a, b) {
    console.log('sum() ran');
    return a + b;
}
  
function ReactCallback() {
  const [val1, setVal1] = useState(0);
  const [val2, setVal2] = useState(0);
  // no result state

  const result = useCallback(sum(val1, val2), [val1, val2]);

  return (
    <div className="App">
      <input
        value={val1}
        onChange={({ target }) =>
          setVal1(parseInt(target.value || 0, 10))
        }
      />
      <input
        value={val2}
        onChange={({ target }) =>
          setVal2(parseInt(target.value || 0, 10))
        }
      />
      <p>{result}</p>
    </div>
  );
}

export default ReactCallback;