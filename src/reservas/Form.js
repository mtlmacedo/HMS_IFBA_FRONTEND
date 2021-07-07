import React, { Component } from 'react';

import { Paper, Grid, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addReservas } from '../actions/reservas';

export class Form extends Component {
  state = {
      dataEntrada: '',
      dataSaida: '',
      quarto: '',
      qtd_pessoas: '',
      servico: '',  
  };

  static propTypes = {
    addReservas: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    const { dataEntrada, dataSaida, quarto, qtd_pessoas, servico } = this.state;
    const reservas = { dataEntrada, dataSaida, quarto, qtd_pessoas, servico };
    this.props.addReservas(reservas);
    this.setState({
      dataEntrada: '',
      dataSaida: '',
      quarto: '',
      qtd_pessoas: '',
      servico: '',      
    });
  };

  render() {
    const { dataEntrada, dataSaida, quarto, qtd_pessoas, servico } = this.state;
    
    return (
      <Paper>
        <div>
        <form onSubmit={this.handleSubmit}>
            <Grid container spacing={8} alignItems="flex-end">            
                <Grid item md={true} sm={true} xs={true}>
                <TextField type="datetime-local" 
                           value={dataEntrada}
                           name="dataEntrada"
                           label="Data Entrada"
                           onChange={this.onChange}
                           InputLabelProps={{
                            shrink: true,
                          }} />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                <TextField type="datetime-local" 
                           value={dataSaida}
                           name="dataSaida"
                           label="Data Saida"
                           onChange={this.onChange}
                           InputLabelProps={{
                            shrink: true,
                          }} />
                </Grid>            
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                <TextField value={quarto} name="quarto" label="quarto" onChange={this.onChange}  />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                <TextField value={qtd_pessoas} name="qtd_pessoas" label="qtd_pessoas" onChange={this.onChange}  />
                </Grid>
            </Grid>
            <Grid container spacing={8} alignItems="flex-end">
                <Grid item md={true} sm={true} xs={true}>
                <TextField value={servico} name="servico" label="servico" onChange={this.onChange} />
                </Grid>
            </Grid>
            <Grid container justify="center" style={{ marginTop: '10px' }}>
                <Button variant="outlined" color="primary" type="submit" value="Submit" style={{ textTransform: "none" }}>Reservar</Button>
            </Grid>
            </form>
        </div>
    </Paper>
    );
  }
}

export default connect(null, { addReservas })(Form);
