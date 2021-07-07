import { GET_RESERVAS, DELETE_RESERVAS, ADD_RESERVAS, CLEAR_RESERVAS } from '../actions/types.js';

const initialState = {
  reservas: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_RESERVAS:
      return {
        ...state,
        reservas: action.payload,
      };
    case DELETE_RESERVAS:
      return {
        ...state,
        reservas: state.reservas.filter((reservas) => reservas.id !== action.payload),
      };
    case ADD_RESERVAS:
      return {
        ...state,
        reservas: [...state.reservas, action.payload],
      };
    case CLEAR_RESERVAS:
      return {
        ...state,
        reservas: [],
      };
    default:
      return state;
  }
}
