import React from "react";



function Products(props) {

  const { name = 'toto', description = 'titi', price = 500 } = props;

  console.log(props);

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

// Here we define default values for the props if they are not passed to the component
// Old method to define default props.
// Products.defaultProps = {
//   name: "temitope",
//   description: "i like this feature",
//   price: 500,
// };

export default Products;