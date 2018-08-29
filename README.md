# HTML-Contents

Vanilla JS. No dependencies.

[@psalmody](https://twitter.com/psalmody) | https://michaeltallino.us/

## Installation

We're on npm:

```bash
npm i html-contents
```

Download from GitHub: https://github.com/psalmody/html-contents

## Usage

No jQuery needed. Just include this script:

```html
<script src="html-contents.js"></script>
```

And call like this.

```html
<script>
document.addEventListener("DOMContentLoaded", function(event) {
  htmlContents('#toc')
})
</script>
```

Optionally put some options in there:

```js
//these are the defaults
document.addEventListener("DOMContentLoaded", function(event) {
  htmlContents('#toc', {
    top: 2,         // 1-6: biggest header to include in outline
    bottom: 3,      // 1-6: smallest header to include in outline
    addIds: true,   // true/false: add ids to H* that don't have them
    addLinks: true, //true/false: add links to outline? 
    listType: 'u',  // 'u' or 'o': (u)nordered or (o)rdered list type
    filter: false   // String: CSS style selector to exclude from outline
  })
})
```