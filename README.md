# React "Add Option" app

A simple "Add option" app, with React, using [Babel](https://babeljs.io/) to convert JSX into executable javascript code (test)

## Prerequisites

* [live-server](https://www.npmjs.com/package/live-server) 
* [babel-cli](https://www.npmjs.com/package/babel-cli)

## Getting Started

After clonning the repository:

```
git clone https://github.com/pankaryp/React-add-option-app-babeltest.git
```

Open the live server on _public_ folder

```
cd react-add-option-app-babetest/public

live-server
```

Configure babel for live compiling

```
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
```

