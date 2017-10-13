# AutoDllPlugin with with ProvidePlugin

related to: https://github.com/asfktz/autodll-webpack-plugin/issues/48

## Install
- `npm install`

## Usage:
- `npm start` it will:
  - Cleanup the DLL cache from the previous run
  - Build the config
  - Serve the ./dist directory on port 5000

- Go to `http://localhost:5000/` and open Chrome's devtools
- You should see `lodash version 4.17.4 is available by the ProvidePlugin: ƒ`
