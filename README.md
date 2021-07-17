# Assignment React Native

## Open assignment
The assignment is quite open. Preferably it is a small app build in React Native.

Things we would like to see implemented in the solution:

- At least one external API  
It could be a dummy API, weather, public transportation og any other publicly available API. The choice is yours. The important thing to demonstrate is that you’re able to integrate and connect a remote API and process and display data from the chosen API.
- Some sort of state management in the app  
It doesn’t have to be a fully fleshed Redux solution, actually we typically stick with React Context API or Overmind, but something that demonstrates that you’re able to consider how to handle state in the app you’re building
- Some sort of project scope and task estimation  
This is to demonstrate that you’re able to set a realistic scope for your solution, cut it into smaller more approvable tasks and finally put a realistic estimate on the tasks for how long you think it will take to implement each task.
- Use git to commit and track changes  
Project should be submitted as a link to a git repo.

We’re aware of and understands that you have a full-time job already and the work on this assignment probably will happen in your free time which likely will affect the scope so we do not expect a fully polished ready-to-publish application.

1. Project idea  
Decide on a small project which could possibly be made in a few days.  
Ideas could be things like a to-do app, calculator, time tracker or similar. Doing something silly and/or fun is encouraged!

2. Scope & Estimate  
Break the project down into component parts and detail the scope of features.  
Estimate the project components. Please submit the estimate and scope before starting work on the prototype.

3. MVP  
Build a prototype. Don't worry about building a complete project - but try and stick to your initial scope.  
Please keep track of how much time you ended up spending on each component part. It does not matter if this is close to the estimated time - this is just to have a close-to-real experience of a project.

This repository is read-only so a given solution should be pushed to a different repo.  
  
  
----------
  

## This repository
React Native application using [Expo's Managed Workflow](https://docs.expo.io/introduction/managed-vs-bare/#managed-workflow).

### Getting started
Since the project is based on Expo's Managed workflow you will need to install Expo locally - as well as install the project's dependencies.

-   [Install Expo](https://docs.expo.io/get-started/installation/)
-   Get familiar with the [Expo CLI](https://docs.expo.io/workflow/expo-cli/)
-   Install dependencies: `npm install`
-   Run: `npm run [ios|android]`

### Prettier & Husky

[Prettier](http://prettier.io/), [Husky](https://github.com/typicode/husky) and [Pretty Quick](https://github.com/prestontighe/pretty-quick) are used to provide formatting on the fly (on every commit). These are used in order to ensure consistent and streamlined formatting of files. Husky will automatically run when running `git commit -m []"` and will then format any files (that have not been formatted already). You might therefore have to re `git add [.]` and `git commit -m []` if Pretty Quick find one or more files that are not properly formatted. This is done in order for you to be able to inspect the Prettier formatting updates. Although this is rarely needed.

Example of Pretty Quick avoiding a commit due to lack of formatting:

```bash
husky > pre-commit (node v14.14.0)
🔍  Finding changed files since git revision b1caead.
🎯  Found 8 changed files.
✍️  Fixing up README.md.
✍️  Fixing up src/hooks/useSignUp.js.
✗ File had to be prettified and prettyQuick was set to bail mode.
husky > pre-commit hook failed (add --no-verify to bypass)
```
