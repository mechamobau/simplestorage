import { Config as Configuration } from 'bili';

const configuration: Configuration = {
  banner: true,
  input: 'src/index.ts',
  output: {
    format: ['es', 'cjs', 'umd', 'umd-min'],
    moduleName: 'simpleStorage',
    sourceMap: true
  },
  babel: {
    minimal: true
  },
  plugins: {
    typescript2: {
      clean: true,
      tsconfig: 'tsconfig.bundle.json',
      useTsconfigDeclarationDir: true
    }
  },
  externals: ['react']
};

export default configuration;
