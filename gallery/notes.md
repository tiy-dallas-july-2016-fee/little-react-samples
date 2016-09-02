# Notes

These are some things of note that I've picked up along the way.

## `class` vs `className`

In JSX, you can't use `class`. You have to use `className`.

## You have to return one parent element.

This will not work.

```
class SomeComponent extends React.Component {

  render() {
    return (
      <p>First paragraph.</p>
      <p>Second paragraph.</p>
    )
  }

}
```

When you render a React component, it must have one parent element.

```
class SomeComponent extends React.Component {

  render() {
    return (
      <div>
        <p>First paragraph.</p>
        <p>Second paragraph.</p>
      </div>
    )
  }

}
```
