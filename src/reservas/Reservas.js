import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReservas, deleteReservas } from '../actions/reservas';
import {Table, Button, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, withStyles } from '@material-ui/core'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



export class Reservas extends Component {
  static propTypes = {
    reservas: PropTypes.array.isRequired,
    getReservas: PropTypes.func.isRequired,
    deleteReservas: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getReservas();
  }

  render() {
    return (
      <Fragment>
        <TableContainer component={Paper}>
          <h2>Reservas</h2>
          <Table className={useStyles.table} aria-label="Servicos">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">DataEntrada</StyledTableCell>
                <StyledTableCell align="center">DataSaida</StyledTableCell>
                <StyledTableCell align="center">Quarto</StyledTableCell>
                <StyledTableCell align="center">Quantidade de pessoas</StyledTableCell>
                <StyledTableCell align="center">servico</StyledTableCell>
                <StyledTableCell />
              </TableRow>
            </TableHead>
            <TableBody> 
              {this.props.reservas.map((Reservas) => (
                <StyledTableRow key={Reservas.id}>
                  <StyledTableCell align="center">{Reservas.dataEntrada}</StyledTableCell>
                  <StyledTableCell align="center">{Reservas.dataSaida}</StyledTableCell>
                  <StyledTableCell align="center">{Reservas.quarto}</StyledTableCell>
                  <StyledTableCell align="center">{Reservas.qtd_pessoas}</StyledTableCell>
                  <StyledTableCell align="center">{Reservas.servico}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      onClick={this.props.deleteReservas.bind(this, Reservas.id)}
                      className="btn btn-danger btn-sm"
                    >Cancelar</Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  reservas: state.reservas.reservas,
});

export default connect(mapStateToProps, { getReservas, deleteReservas })(Reservas);
