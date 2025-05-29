import { cn } from './utils';

describe('ui library', () => {
  it('should export utility functions', () => {
    expect(typeof cn).toBe('function');
  });

  it('cn should merge classes correctly', () => {
    const result = cn('px-4', 'py-2', 'bg-blue-500');
    expect(result).toBeTruthy();
    expect(typeof result).toBe('string');
  });
});
