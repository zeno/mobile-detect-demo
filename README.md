# Mobile-detect.js live demo 

Simple live demo page for [Mobile-detect.js](http://hgoebl.github.io/mobile-detect.js/).

#### First time

```
npm install
bower install
```


#### Serve page locally

```
grunt serve
```

#### Prepare for deploy

```
grunt
```

#### Deploy on [GitHub Pages](https://pages.github.com)

Use `git subtree` to deploy the `dist` directory to the `gh-pages` branch as explained [here](http://stephenplusplus.github.io/yeoman.io/deployment.html). Whenever you want to redeploy the `dist` directory you can run:

```
git subtree push --prefix dist origin gh-pages
```
