import React, {Fragment} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, makeStyles, withStyles } from '@material-ui/core'

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



const List = (props) => {
  const classes = useStyles();
  
  const { services } = props;
  if (!services || services.length === 0) return <p>Não temos Serviços disponiveis no momento</p>;
    
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Servicos">
            <TableHead >
              <TableRow >
                <StyledTableCell align="center">Tipo</StyledTableCell>
                <StyledTableCell align="center">Época Do Ano</StyledTableCell>
                <StyledTableCell align="center">Preço</StyledTableCell>
              </TableRow>
            </TableHead>  
            <TableBody>      
              {services.map((service) => {
                  return (
                  <StyledTableRow key={service.id}>
                      <StyledTableCell align="center">{service.tipo}</StyledTableCell >
                      <StyledTableCell align="center">{service.epoca_ano}</StyledTableCell >
                      <StyledTableCell align="center">{service.preco}</StyledTableCell >
                  </StyledTableRow  >
                  );
              })}      
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};
export default List;
