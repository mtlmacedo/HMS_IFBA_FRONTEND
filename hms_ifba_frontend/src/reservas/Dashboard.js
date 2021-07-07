import React, { Fragment } from 'react';
import Form from './Form';
import Reservas from './Reservas';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Reservas />
    </Fragment>
  );
}
