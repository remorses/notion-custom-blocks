import { test, expect } from 'vitest'

test('ready', () => {
    expect(true).toBe(true)
    expect({ x: 3 }).toMatchSnapshot()
})

test('two', () => {
    expect(true).toBe(true)
    console.log('hello')
    expect({ x: 3 }).toMatchSnapshot()
})


