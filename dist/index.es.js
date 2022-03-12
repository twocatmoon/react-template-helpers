import React from "react";
function If(condition, children) {
  let result = React.Fragment({});
  let shouldContinue = true;
  if (condition) {
    result = children();
    shouldContinue = false;
  }
  const response = {
    ElseIf(elseCondition, children2) {
      if (shouldContinue && elseCondition) {
        result = children2();
        shouldContinue = false;
      }
      return response;
    },
    Else(children2) {
      if (shouldContinue) {
        result = children2();
      }
      return {
        EndIf: response.EndIf
      };
    },
    EndIf() {
      return result;
    }
  };
  return response;
}
function For(collection, callbackFn, _returnArrayOnly) {
  let children;
  if (!collection) {
    throw new Error(`Collection passed to 'For' must be of type Array or Object and must be iterable.`);
  } else if (Array.isArray(collection)) {
    const fn = callbackFn;
    children = collection.map((item, i) => {
      return fn(item, i, {
        isFirst: i === 0,
        isLast: i === collection.length - 1,
        isEven: i % 2 === 0,
        isNth: (n) => i % n === 0
      });
    });
  } else {
    const fn = callbackFn;
    const keys = Object.keys(collection);
    children = keys.map((key, i) => {
      return fn(collection[key], key);
    });
  }
  if (_returnArrayOnly)
    return children;
  return React.Fragment({ children });
}
export { For, If };
