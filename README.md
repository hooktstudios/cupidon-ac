# Cupidon Autocompleter 0.1
Cupidon Autocompleter (a.k.a. cupidon-ac) is a simple jQuery UI widget that wraps the jQuery UI Autocomplete plugin to add a simple "must match" feature, ensuring the user selects a value that comes from the source. 

## Demo
[→ here](http://hooktstudios.github.com/cupidon-ac/examples.html)

## Usage

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

## Contribute
Feel free to send pull requests for any bugs / improvements / features.

## Questions? Feature request?
Use the [GitHub issues](https://github.com/hooktstudios/cupidon-ac/issues).

## License
Cupidon Autocompleter is published under the [MIT License](https://raw.github.com/hooktstudios/cupidon-ac/master/LICENSE). Credits for the first version goes to [Hookt Studios](http://www.hooktstudios.com)
