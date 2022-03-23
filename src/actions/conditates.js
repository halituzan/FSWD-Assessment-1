import axios from "axios";
export const LIST_USER = "LIST_USER";

export function conditates(users) {
  return { type: LIST_USER, payload:users };
}

export function getUser() {
  return async (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((res) => dispatch(conditates(res)))
      .catch((err) => console.log(err));
  };
}





// const receiveProducts = (products) => ({
//   type: types.RECEIVE_PRODUCTS,
//   products,
// });
// export const getAllProducts = () => (dispatch) => {
//   shop.getProducts((products) => {
//     dispatch(receiveProducts(products));
//   });
// };
