# hash-color-material
Hashes a string or a number to a [material color](https://material.io/guidelines/style/color.html#color-color-palette) hex code.

## Get started
First:
```
npm install hash-color-material
```
Then:
```
var hashColor = require('hash-color-material');
console.log(hashColor.getColorFromString('Hello world!'));
```
## Usage
```
hashColor.getColorFromString('Hello world!');
```
The result is: `#039BE5`

## Functions
```
hashColor.getColorFromString(str, darkColors, accentColors)
```
Hashes the passed string to a material color hex code.
* `str` (string): The string which gets hashed to a material color hex code
* `darkColors` (boolean): Whether to include brown, grey and blue-grey (optional, default: true)
* `accentColors` (boolean): Whether to include accent colors (optional, default: true)

```
hashColor.getColorFromNumber(number, darkColors, accentColors)
```
Hashes the passed string to a material color hex code.
* `number` (number): The number which gets hashed to a material color hex code
* `darkColors` (boolean): Whether to include brown, grey and blue-grey (optional, default: true)
* `accentColors` (boolean): Whether to include accent colors (optional, default: true)
