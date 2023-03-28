import { test, expect } from 'vitest';
import '../src/index';

test('example', () => {
  expect(globalThis.exampleFunction([]).String).toBe('example');

  expect(globalThis.exampleDecorator({ String: 'test' })).toBe('example');
});
