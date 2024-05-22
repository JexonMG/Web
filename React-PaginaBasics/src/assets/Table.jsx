import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

export default function BasicTable(datos) {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    /*
    const eliminarRow = (nombre, sobrenombre, foto, mejorAmigo) => {
        return () => {
            setDatos(datos.value.filter((row) => row.nombre !== nombre && row.sobrenombre !== sobrenombre && row.foto !== foto && row.mejorAmigo !== mejorAmigo))
        }
    }
                <StyledTableCell align="center"></StyledTableCell>

                    <TableCell align="center"><button onClick={eliminarRow(row.nombre, row.sobrenombre, row.foto, row.mejorAmigo)}>Eliminar</button></TableCell>

    */
    // * Tabla de usuarios
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
            <TableHead>
            <TableRow>
                <StyledTableCell>Foto</StyledTableCell>
                <StyledTableCell align="center">Nombre</StyledTableCell>
                <StyledTableCell align="center">Sobrenombre</StyledTableCell>
                <StyledTableCell align="center">Mejor amigo</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {datos.value.length === 0 ? (<TableRow>
                <TableCell colSpan={4} align="center">
                    <Typography variant="h5" gutterBottom>
                        <strong>No hay amigos 😱</strong>
                    </Typography>
                </TableCell>
                </TableRow>):
            (datos.value.map((row) => (

                <TableRow
                key={row.nombre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="center">
                  <Avatar alt={row.sobrenombre} src={`https://unavatar.io/${row.foto}`}  sx={{ display: 'flex', justifyContent: 'center' }}/>
                </TableCell>
                <TableCell align="center">{row.nombre}</TableCell>
                <TableCell align="center">{row.sobrenombre}</TableCell>
                <TableCell align="center">{row.mejorAmigo ? 'Si' : 'No'}</TableCell>
                </TableRow>
            )))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    }