> A JavaScript utility for CSS/SCSS modules.

<p>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@anthonyjeamme/classname">
    <img alt="" src="https://img.shields.io/npm/v/@anthonyjeamme/classname.svg">
  </a>
  <a aria-label="License" href="#">
    <img alt="" src="https://img.shields.io/npm/l/classnames.svg">
  </a>
</p>

# Installation :

```bash
npm i @anthonyjeamme/classname
```

# Usage

_Component.tsx_ :

```tsx
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Component.module.scss";
const className = classNameModule(styles);

const Component = () => {
  return <div {...className("Component")}>Component</div>;
};
```

_Component.module.scss_ :

```scss
.Component {
  background: red;
}
```

# Using variables

_Component.tsx_ :

```tsx
import classNameModule from "@anthonyjeamme/classname";
import styles from "./Component.module.scss";
const className = classNameModule(styles);

const Component = () => {
  const [active, setActive] = useState(false);
  const [type, setType] = useState("user");

  return <div {...className("Component", { active, type })}>Component</div>;
};
```

_Component.module.scss_ :

```scss
.Component {
  background: red;

  &.active {
    background: blue;
  }

  &.type-user {
    border: 2px solid purple;
  }
}
```

# Global classes

Prefixing with `:` allows to use global classes :

```js
className(":flex");
```

_global.css_ :

```css
.flex {
  display: flex;
}
```

## Custom prefix

Custom prefix can be set this way :

```js
const className = classNameModule(styles, { globalPrefix: "@" });

className("@flex"); // Returns '.flex'
```

# Advanced configuration

## Log unfound classes

```js
const className = classNameModule(styles, { logUnfoundValues: true });
```

Then, this example will log a warning :

```js
className("UnknownClass");
```

## Retaining Unfound Classes

This is an alternative way to use global variables :

```js
const className = classNameModule(styles, { keepUnfoundValues: false });
className("UnknownClass"); // Returns ``
```

```js
const className = classNameModule(styles, { keepUnfoundValues: true });
className("UnknownClass"); // Returns `.UnknownClass`
```
