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
import { Link } from 'react-router-dom';


const FriendTable = ({datos, setDatos}) => {

  const deleteFriend = (id) => {
    fetch(`http://localhost:8000/friends/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  //             <Link to={`/${row.name}`} style={{ textDecoration: 'none', color: 'black' }}/>

  
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
          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell align="center">
              <Link to={`/${row.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Avatar alt={row.nickname} src={`https://unavatar.io/${row.picture}`} sx={{ display: 'flex', justifyContent: 'center' }} />
              </Link>
            </TableCell>
            <TableCell align="right">
              <Link to={`/${row.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {row.name}
              </Link>
            </TableCell>
            <TableCell align="right">{row.nickname}</TableCell>
            <TableCell align="right">{row.isBestFriend ? 'Si' : 'No'}</TableCell>
            <TableCell align="center">
              <Button size='small' variant='contained' color='error' onClick={() => {(setDatos(datos.filter(a => a.id !== row.id, deleteFriend(row.id))))}}>
                ELiminar
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      </Table>
    </TableContainer>
  );
}

export default FriendTable;