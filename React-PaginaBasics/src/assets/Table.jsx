import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function BasicTable(datos) {

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
            <TableHead>
            <TableRow>
                <TableCell>Foto</TableCell>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Sobrenombre</TableCell>
                <TableCell align="center">Mejor amigo</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {datos.value.length === 0 ? (<TableRow>
                <TableCell colSpan={4} align="center">
                    <Typography>
                        No hay datos
                    </Typography>
                </TableCell>
                </TableRow>):
            (datos.value.map((row) => (

                <TableRow
                key={row.nombre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="center">
                  <Avatar alt={row.sobrenombre} src={row.foto}  sx={{ display: 'flex', justifyContent: 'center' }}/>
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