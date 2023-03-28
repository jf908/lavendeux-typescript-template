// If you import something, you must remove declare module 'extension' { }
// and add declare before global
declare module 'extension' {
  global {
    // Add types for your functions and decorators here
    function exampleFunction(args: Lavendeux.Value[]): Lavendeux.Value;
    function exampleDecorator(args: Lavendeux.Value): string;
  }
}

globalThis.extension = (): Lavendeux.Extension => ({
  name: 'typescript-template',
  author: __AUTHOR__,
  version: __VERSION__,
  functions: {
    example: 'exampleFunction',
  },
  decorators: {
    example: 'exampleDecorator',
  },
});

globalThis.exampleFunction = function (args) {
  return {
    String: 'example',
  };
};

globalThis.exampleDecorator = function (args) {
  return 'example';
};
