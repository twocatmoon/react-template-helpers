import React from 'react';
/**
 * Template helper function for branching template logic.
 * Returns a function that takes in a JSX, which in turn returns chainable functions (ElseIf, Else).
 * The chain must always be terminated by calling `EndIf()`.
 *
 * @param {boolean} condition - Display condition
 *
 * @return {function} Chainable generator
 *
 * @example
 * ```tsx
 * export default function () {
 *     const state = 'foo'
 *
 *     return (
 *         <div>
 *         {
 *             If(state === 'foo', () => (
 *                 <div>Foo</div>
 *             ))
 *             .ElseIf(state === 'bar', () => (
 *                 <div>Bar</div>
 *             ))
 *             .ElseIf(state === 'baz', () => (
 *                 <div>Baz</div>
 *             ))
 *             .Else(() => (
 *                 <div>Other</div>
 *             ))
 *             .EndIf()
 *         }
 *         </div>
 *     )
 * })
 * ```
 */
export declare function If(condition: boolean | any, children: () => any): {
    ElseIf(elseCondition: boolean | any, children: () => any): any;
    Else(children: () => any): {
        EndIf: () => React.FunctionComponentElement<{}>;
    };
    EndIf(): React.FunctionComponentElement<{}>;
};
/**
 * Template helper function for handling iteration.
 * Returns a function with the value, key/index, and helper utilities.
 *
 * @param {(array|object)} collection - Collection of items to display
 *
 * @return {function} Iteration handler
 *
 * @example
 * ```tsx
 * export default function () {
 *   const collection = [1, 2, 3]
 *
 *   return (
 *     <div>
 *       {
 *         For(collection, (value, key, { isFirst, isLast, isEven }) => (
 *           <div key={key}>{key}: {value}</div>
 *         ))
 *       }
 *     </div>
 *   )
 * })
 * ```
 */
export declare function For<T = any>(collection: T[] | {
    [key: string]: T;
}, callbackFn: (item: T, indexOrKey: number | string, itemDetails: {
    isFirst: boolean;
    isLast: boolean;
    isEven: boolean;
    isNth: (n: number) => boolean;
}) => void, _returnArrayOnly?: boolean): any;
