import React from 'react'
import { If } from '.'

test('If with truthy If', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If with falsey If', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .EndIf()

  expect(result).not.toBe('IF')
})

/* --- */

test('If/Else with truthy If', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/Else with falsey If', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE')
})

/* --- */

test('If/ElseIf with truthy If', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf with truthy ElseIf', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'bar', () => ('ELSE IF'))
    .EndIf()

  expect(result).toBe('ELSE IF')
})

test('If/ElseIf with truthy If and ElseIf', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'foo', () => ('ELSE IF'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf with falsey If and falsey ElseIf', () => {
  const state = 'baz'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF'))
    .EndIf()

  expect(result).toEqual(expect.objectContaining({
    props: expect.any(Object)
  }))
})

/* --- */

test('If/ElseIf/ElseIf with truthy If', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/ElseIf with truthy ElseIf A', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toBe('ELSE IF A')
})

test('If/ElseIf/ElseIf with truthy ElseIf B', () => {
  const state = 'baz'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toBe('ELSE IF B')
})

test('If/ElseIf/ElseIf with truthy If and ElseIf A', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'foo', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/ElseIf with truthy If and ElseIf B', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    .ElseIf(state === 'foo', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/ElseIf with truthy ElseIf A and ElseIf B', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    .ElseIf(state === 'bar', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toBe('ELSE IF A')
})

test('If/ElseIf/ElseIf with falsey If and ElseIf A/B', () => {
  const state = ''

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .EndIf()

  expect(result).toEqual(expect.objectContaining({
    props: expect.any(Object)
  }))
})

/* --- */

test('If/ElseIf/Else with truthy If', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/Else with truthy If and ElseIf', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'foo', () => ('ELSE IF'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/Else with truthy ElseIf', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'bar', () => ('ELSE IF'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE IF')
})

test('If/ElseIf/Else with falsey If and ElseIf', () => {
  const state = 'baz'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE')
})

/* --- */


test('If/ElseIf/ElseIf/Else with truthy If', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/ElseIf/Else with truthy ElseIf A', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE IF A')
})

test('If/ElseIf/ElseIf/Else with truthy ElseIf B', () => {
  const state = 'baz'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE IF B')
})

test('If/ElseIf/ElseIf/Else with truthy If and ElseIf A', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'foo', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/ElseIf/Else with truthy If and ElseIf B', () => {
  const state = 'foo'

  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    .ElseIf(state === 'foo', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('IF')
})

test('If/ElseIf/ElseIf/Else with truthy ElseIf A and ElseIf B', () => {
  const state = 'bar'

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    .ElseIf(state === 'bar', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE IF A')
})

test('If/ElseIf/ElseIf/Else with falsey If and ElseIf A/B', () => {
  const state = ''

  // @ts-ignore
  const result = If(state === 'foo', () => ('IF'))
    // @ts-ignore
    .ElseIf(state === 'bar', () => ('ELSE IF A'))
    // @ts-ignore
    .ElseIf(state === 'baz', () => ('ELSE IF B'))
    .Else(() => ('ELSE'))
    .EndIf()

  expect(result).toBe('ELSE')
})
