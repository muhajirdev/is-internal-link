# is-internal-link
![npm-badge](https://img.shields.io/npm/v/is-internal-link.svg)
## Installation

```bash
npm install --save is-internal-link
```

## Usage

```javascript
import { isInternalLink } from "./main"
```

```javascript
isInternalLink('https://www.google.com') // false
```

```javascript
isInternalLink('/page1') // true
```

## Why ?

I found my self doing this everytime I started new project. 
That's why I decided to make this logic to abstract the logic and share it with the world

## How does it fit in my App?

This is one example, if you're using React. And just want to have a single component.
Instead of sometimes using `<Link>` and sometimes using `<a>`. Just create new `Link` component and use it everywhere.

Another pattern I usually use. Usually I add `target="_blank"` for external link. 
So every external link will be opened in new tab

```javascript
import React from 'react'

import { Link as ReactRouterLink} from 'react-router-dom'
import { isInternalLink } from 'is-internal-link'

const Link = ({ children, to, activeClassName, ...other }) => {
  if (isInternalLink(to)) {
    return (
      <ReactRouterLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </ReactRouterLink>
    )
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  )
}

export default Link
```

## Contributing

Please do not hesitate to submit an issue or pull request.

## Question?

Submit an issue || ping me [@muhajirframe](https://twitter.com/muhajirframe) on twitter


## License

MIT

**Enjoy**
