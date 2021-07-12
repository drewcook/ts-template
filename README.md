# TypeScript Template

This is a template for new TypeScript projects.

## Requirements

This project uses a locally installed version of `tsc` to compile the code into JavaScript. Please run the following if it it not installed globally to your machine:

```bash
# Install globally with npm
npm i -g typescript
# Check current version and verify
tsc -v
```

## How To Run

The project must be compiled before running, and the dist directory is not checked into git. To run the project locally, use the following command:

```bash
npm start
```

This will compile the TypeScript into JavaScript into a `dist/` directory, and it will run the code with `nodemon`.

## What Is Included?

It includes the following:

- Prettier config
- Editor config
- Git ignore
