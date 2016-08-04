# jQuery-clear
Clearing forms with one call

## Usage
```javascript
$().clear(elements, noClear);
```

Both parameters must be any valid jQuery selector.

The `elements` parameter will determine which elements descendant from the form will be cleared. Useful for selective clearance.

The `noClear` parameter will filter, from the elements found, which NOT to clear. If you want to use only this parameter you can pass a falsey value for `elements` like:
```javascript
$().clear('', '.doNotClear');
```

Default behavior is picking `input`, `textarea` and `select` elements.<br>
**Checkboxes** will be **unchecked**;<br>
**Selects** will have their **first option selected**;<br>
The rest will have its value changed to `""`.

Elements cleared will trigger 'change' when they're all done.

## Custom clear
You may also define a custom clear value for each element using `data-clear`.

Elements with data will have their value changed to what's in its `data-clear` (using .data() to retrieve) instead of an empty value.

Example:
```html
<input name="age" value="18" data-clear="18"  />
```

You may use the attribute to set it on load, but remember to change its `.data('clear')` if you want dynamic values, as `.clear` will not read its attribute but its data instead.
