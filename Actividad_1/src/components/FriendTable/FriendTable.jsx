import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


const FriendTable = ({datos, setDatos}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Foto</TableCell>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Sobrenombre</TableCell>
            <TableCell align="right">Es mejor amigo</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datos.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <Avatar src={row.picture} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.nickname}</TableCell>
              <TableCell align="right">{row.isBestFriend ? 'Si' : 'No'}</TableCell>
              <TableCell align="center"><Button size='small' variant='outlined' color='error' onClick={() => {setDatos(datos.filter(a => a.name !== row.name))}}>ELiminar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FriendTable;