## Creating a Component in React

Goal : create a component to show an image related to a customer.

1. Add some fixtures in the json data
   1. Create a folder to store images : assets/img
   2. Add one jpg file per customer in the folder
   3. Add reference to each image in the json

ex : customer1.json

```json
   "picture": "customer1.jpg"
```

2. Create a new class in charge of displaying the image when loading the customer details
  ie: ImageDisplay.js
1. Important : here we use props to be able to inject variables in the constructor.

```js
const { width, height, imageName } = this.props;
```

1. Import the ImageDisplay to be able to use it.
   1. the import is done in the CustomerDetails.js file
2. Use the new component to load and display the image

```js
<Image width='200' height='200' imageName={customerDetails.picture}></Image>
```
