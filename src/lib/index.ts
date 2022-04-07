import React from 'react'

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

export function If (condition: boolean | any, children: () => any) {
    let result = React.createElement(React.Fragment, {})
    let shouldContinue = true

    if (condition) {
        result = children()
        shouldContinue = false
    }

    const response = {
        ElseIf (elseCondition: boolean | any, children: () => any) {
            if (shouldContinue && elseCondition) {
                result = children()
                shouldContinue = false
            }
            return response
        },

        Else (children: () => any) {
            if (shouldContinue) {
                result = children()
            }
            return {
                EndIf: response.EndIf
            }
        },

        EndIf () {
            return result
        }
    }

    return response
}

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

export function For <T = any> (
    collection: T[] | { [key: string]: T }, 
    callbackFn: (
        item: T,
        indexOrKey: number | string,
        itemDetails: {
            isFirst: boolean
            isLast: boolean
            isEven: boolean
            isNth: (n: number) => boolean
        },
    ) => void,
    _returnArrayOnly?: boolean
): any {
    let children

    if (!collection) {
        throw new Error(`Collection passed to 'For' must be of type Array or Object and must be iterable.`)
    } 
    
    else if (Array.isArray(collection)) {
        const fn = callbackFn as any

        children = collection.map((item, i) => {
            return fn(item, i, {
                isFirst: i === 0,
                isLast: i === collection.length - 1,
                isEven: i % 2 === 0,
                isNth: (n: number) => i % n === 0
            })
        })
    } 
    
    else {
        const fn = callbackFn as any

        const keys = Object.keys(collection)
        children = keys.map((key, i) => {
            return fn(collection[key], key)
        })
    }

    if (_returnArrayOnly) return children
    
    return React.createElement(React.Fragment, {}, ...children)
}
