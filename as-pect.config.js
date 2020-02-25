let memory = new WebAssembly.Memory({
  initial: 32767,
});

module.exports = {
  /**
   * A set of globs passed to the glob package that qualify typescript files for testing.
   */
  include: ["assembly/__tests__/**/*.spec.ts"],
  /**
   * A set of globs passed to the glob package that quality files to be added to each test.
   */
  add: ["assembly/__tests__/**/*.include.ts"],
  /**
   * All the compiler flags needed for this test suite. Make sure that a binary file is output.
   */
  flags: {
    /** This makes testing longer, but we are only interested in testing optimized output. */
    "-O3": [],
    /** To output a wat file, uncomment the following line. */
    "--textFile": ["output.wat"],
    /** A runtime must be provided here. */
    "--runtime": ["full"] // Acceptable values are: full, half, stub (arena), and none
  },
  /**
   * A set of regexp that will disclude source files from testing.
   */
  disclude: [/node_modules/],
  /**
   * Add your required AssemblyScript imports here.
   */
  imports: {
    memory, 
  },
  /**
   * All performance statistics reporting can be configured here.
   */
  performance: {},
  /**
   * Specify if the binary wasm file should be written to the file system.
   */
  outputBinary: false,
};
