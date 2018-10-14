# typings.js

I created this small library to add typing animations to your web page. This is a simple and light weight (2Kb) library and yet highly customisable to suite your need.

## Usage

- To add this animation in your project; simply add `typings.min.js` to your project
- Add the class `typings` to the element for which you need to add the typing animation
- Add the test that you want to type as an attribute `type` on the element
- Voila and you typings are ready!!

### Simple Animation
In this mode the text will type once in the forward direction.
Example:
```html
<span class='typings' type='[" this will be typed with animation after the text inside the span!"]'>
    This is will rendered on the screen on load
</span>
```
### Multiple typings
In this mode you can type and remove a list of items.
Example:
```html
<span class='typings' type='["item 1", "item 2 (will be typed after removing item 1)", "item 3", ...]'></span>
```
### Mode - Forward
In this mode the typings will iterate through the list only once. If the mode is not specified then this is selected by default.
Example:
```html
<span class='typings' type='[...]' mode='forward'></span>
```
### Mode - Continuous
In this mode the typings will continually loop through the list. Use this if you want a never ending typing animation.
Example:
```html
<span class='typings' type='[...]' mode='continuous'></span>
```
### More Configurations:
You can control the speed at which the characters are typed by using the following attributes on the element:
#### forwardDelta
Specifies the how long typings waits before typing the next character. Default value is `100`. The value is in `ms`.
Exaxmple:
```html
<span class='typings' type='[...]' forwardDelta='90'></span>
```
#### backwardDelta
Specifies the how long typings waits before deleting the next character. This will be used when clearing a typed text. Default value is `75`. The value is in `ms`.
Exaxmple:
```html
<span class='typings' type='[...]' backwardDelta='90'></span>
```
#### switchDelta
Specifies how long the typing should wait between typing and deleting characters when it reached the end/begining of the word. Default value is `800`. The value is in `ms`.
Exaxmple:
```html
<span class='typings' type='[...]' switchDelta='250'></span>
```
## Examples:
- Check the examples provided in the examples directory; also hosted at [My Project](http://www.shrutitrivedi.com/projects/typings.html)
- Check [www.shrutitrivedi.com](http://www.shrutitrivedi.com)
