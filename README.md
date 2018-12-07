# is-internal-link

![npm-badge](https://img.shields.io/npm/v/is-internal-link.svg)
[![GitHub issues](https://img.shields.io/github/issues/muhajirframe/is-internal-link.svg)](https://github.com/muhajirframe/is-internal-link/issues)
[![GitHub license](https://img.shields.io/github/license/muhajirframe/is-internal-link.svg)](https://github.com/muhajirframe/is-internal-link/blob/master/LICENSE)
![npm type definitions](https://img.shields.io/npm/types/is-internal-link.svg)
[![CircleCI](https://circleci.com/gh/muhajirframe/is-internal-link.svg?style=svg)](https://circleci.com/gh/muhajirframe/is-internal-link)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/muhajirframe/is-internal-link.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fmuhajirframe%2Fis-internal-link)

## Installation

```bash
npm install --save is-internal-link
```

## Usage

```javascript
import { isInternalLink } from "is-internal-link";
```
or

```javascript
import isInternalLink from "is-internal-link";
```

```javascript
isInternalLink("https://www.google.com"); // false
```

```javascript
isInternalLink("/page1"); // true
```

## Test

```bash
npm run test
```

## Why ?

I found my self doing this every time I started new project.
That's why I decided to make this logic to abstract the logic and share it with the world

## How does it fit in my App?

This is one example, if you're using React. And just want to have a single component.
Instead of sometimes using `<Link>` and sometimes using `<a>`. Just create new `Link` component and use it everywhere.

Another pattern I usually use. Usually I add `target="_blank"` for external link.
So every external link will be opened in new tab

```javascript
import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import { isInternalLink } from "is-internal-link";

const Link = ({ children, to, activeClassName, ...other }) => {
  if (isInternalLink(to)) {
    return (
      <ReactRouterLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </ReactRouterLink>
    );
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  );
};

export default Link;
```

## Contributors

- [muhajirframe](https://github.com/muhajirframe)
- [franciscop-invast](https://github.com/franciscop-invast)

## Contributing

Please do not hesitate to submit an issue or pull request.

## Question?

Submit an issue || ping me [@muhajirframe](https://twitter.com/muhajirframe) on twitter

## License

MIT

**Enjoy**
