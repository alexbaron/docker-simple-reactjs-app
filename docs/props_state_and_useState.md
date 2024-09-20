## Props

- props means 'properties'
- props are a type of object
- props are immutable
- props can be passed between components as arguments
  - arguments are passed to function
- To access props in a component , we use this.props
- props are used both in functional and class components
- Props are passed top to bottom

In the branch

- Create a new component Product.js
- the product should show a name , a decription and a price
- name, description and price must be passed as props

```js
 <Products
    name="temitope"
    description="the product has fantastic features"
    price={1000}
  />
```

### DefaultProps

The defaultProps is a React component property that allows us to set default values for the props argument. It usually comes in handy when we don’t have any props data passed in.

But DefaultProps will be deprecated in future version. The alternative is to use [JavaScript default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)

## State

State is used in react component to define parameter(s) inside a component.

- State is a javascript object
- State aren't immutable ; state can change.
- State change asynchronously
- They hold information about the components
- They cannot be accessed by a child component
- State is used for rendering dynamic changes
- States can’t make components reusable

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
}
```

### visibility

The state is visible in its component only.

It's possible to share state between component .

Once a state is passed to the child then it's a props.

Here an example :

```js
class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <ChildComponent count={this.state.count} incrementCount={this.incrementCount} />
      </div>
    );
  }
}

function ChildComponent({ count, incrementCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```

### When use state ?

- to save a value between rendering
- to add interactivity => click, change content, ...
- in conditional rendering

## useState

- useState are used in functional react component.
- useState is a hook
- useState return an array of 2 elements
  - the first one is a current state
  - the second is a function in charge of update the first element
-

```js
const [count, setCount] = useState(0);
```

How to use it in a component

```js
import React, { useState } from 'react';

 function Counter() {
   const [count, setCount] = useState(0);

   const incrementCounter = () => {
     setCount(count + 1);
   };

   return (
     <div>
       <p>Count: {count}</p>
       <button onClick={incrementCounter}>Increment</button>
     </div>
   );
 }

 export default Counter;
```
