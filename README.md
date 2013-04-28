# cupidon-ac

> Cupidon Autocompleter (a.k.a. cupidon-ac) is an extended
[jQuery UI Autocomplete](http://jqueryui.com/autocomplete/)
widget with a "must match" feature.

[![Build Status](https://travis-ci.org/hooktstudios/cupidon-ac.png?branch=master)](https://travis-ci.org/hooktstudios/cupidon-ac)
[![NPM version](https://badge.fury.io/js/cupidon-ac.png)](https://npmjs.org/package/cupidon-ac)

## Demo
[→ here](http://hooktstudios.github.com/cupidon-ac/examples.html)

## Usage

Cupidon Autocompleter ensure the user selects a value that comes from your source list.

### Empty input
```html
<input id="input1" type="text" value="">
```

```javascript
// The source is *required*
$('#input1').cupidon({
  source: [{label: "Ruby", value: 1}, {label: "Python", value: 3}]
});
// Source could also be a URL, or any valid jQuery UI Autocompleter source
$('#input1').cupidon({ source: '/cupidon-find-me-a-lover' });
```

### Pre-filled input
```html
<input id="input2" type="text" data-ac-token="Ninja" value="1337">
```

```javascript
$('#input1').cupidon({ source: '/cupidon-find-me-a-lover' });
```

See the demos for more usage information.

## Features

Basically mimicks the behaviour of a `select` tag with an arbitrary source
(URL or fixed JSON dataset):
* Does not accept values that are not in the `source`,
* Shows the selected value at load without any additionnal HTTP request,
* Supports key-value pairs (just like `select` tags).
* Tested ([here](http://hooktstudios.github.com/cupidon-ac/test.html))

## Options
* `changeText`: specify the text to use for the `edit` link

## Contributing
Use [GitHub issues](https://github.com/hooktstudios/cupidon-ac/issues) for questions, issues and feature requests.

See [CONTRIBUTING.md](https://github.com/hooktstudios/cupidon-ac/blob/master/CONTRIBUTING.md) for more details on contributing and running test.

## Credits
![hooktstudios](http://hooktstudios.com/logo.png)

cupidon-ac is maintained and funded by [hooktstudios](http://github.com/hooktstudios)