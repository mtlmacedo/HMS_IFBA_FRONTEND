import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { tokenConfig } from './auth';

import { ADD_RESERVAS, DELETE_RESERVAS, GET_RESERVAS } from './types';

export const getReservas = () => (dispatch, getState) => {
  axios
    .get('https://hms-ifba.herokuapp.com/reservas/', tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_RESERVAS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteReservas = (id) => (dispatch, getState) => {
  axios
    .delete(`https://hms-ifba.herokuapp.com/reservas/?id=${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteReservas: 'Reserva Deletada' }));
      dispatch({
        type: DELETE_RESERVAS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addReservas = (Reservas) => (dispatch, getState) => {
  axios
    .post('https://hms-ifba.herokuapp.com/reservas/', Reservas, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addReservas: 'Reserva Adicionada' }));
      dispatch({
        type: ADD_RESERVAS,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data, err.response.status)));
};
