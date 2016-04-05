# angular-disable-animate

An Angular directive that disables ng-animate on selected elements.

In the past I have needed a way to easily disable Angular's `$animate` for a specific element. This
tiny directive is the result of that need and the dislike for copy & pasting code across projects.

Further reading: [$animate documentation][animate_docs]

- - -

_[Comments and Pull Requests welcome!][issues]_

## Installation

```
$ bower install angular-disable-animate --save
$ npm install angular-disable-animate --save
```

Or

Include the JavaScript file in the head of your document:

```
<script src="angular-disable-animate.js"></script>
```

## Usage

Include the module as a dependency of your application:

```
angular.module('myModule', ['bc.AngularDisableAnimate']);
```

Use directive as an attribute:

```html
<div bc-disable-animate>Foo</div>
```


### Scripts

* `npm run build` - produces production version of your library under the `dist` folder
* `npm run watch` - produces development version of your library under the `dist` folder and runs a
    watcher


[animate_docs]: https://docs.angularjs.org/api/ng/service/$animate
[issues]: https://github.com/benjamincharity/angular-disable-animate/issues

