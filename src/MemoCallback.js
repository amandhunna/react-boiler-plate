import React, { useState, useCallback } from 'react';

/* useCallback and useMemo are so useful because they allow lazy evaluation */
/* 
useCallback or useMemo whenever you depend on referential equality between renders. Mostly using it for useEffect, 
React.memo and useMemo to replace shouldComponentUpdate from React.PureComponent 
because the dependencies of these Hooks get checked for referential equality. 
*/

function MemoCallback(props) {
    const [val1, setVal1] = useState(0);
    const [val2, setVal2] = useState(0);
    const [name, setName] = useState('Jim');
  
    const result = useCallback(sum(val1, val2), [val1, val2]);
    console.log('-----------MemoCallback---------------')
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
        <input
          placeholder="Name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <p>{result}</p>
      </div>
    );
}

export default MemoCallback;

function sum(a, b) {
    console.log('sum() ran');
    return a + b;
  }