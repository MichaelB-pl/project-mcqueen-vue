# project-mcqueen-vue

## Run app

### https://project-mcqueen.herokuapp.com/alphabet

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Heroku deploy

### Add `dist` folder.
Remove this line from `.gitignore`:
```
/dist
```

Run:
```
npm run build
```

Commit all changes.

### Follow instructions on [heroku website](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

#### If `git push heroku master` command isn't working, probably your local branch name is different than _master_. To fix this, use this command inserting your local branch name: 
```
git push heroku your-branch-name:master
```