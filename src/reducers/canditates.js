import { LIST_USER } from "../actions/conditates";

export const conditates = (state = [], { type, payload }) => {
  switch (type) {
    case LIST_USER:
      return payload;
    default:
      return state;
  }
};
