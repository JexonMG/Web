import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {
    function createData(foto, nombre, sobrenombre, mejoramigo) {
        return { foto, nombre, sobrenombre, mejoramigo};
    }
    
    
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size='small'>
            <TableHead>
            <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell align="right">Sobrenombre</TableCell>
                <TableCell align="right">Foto</TableCell>
                <TableCell align="right">Mejor amigo</TableCell>
            </TableRow>
            </TableHead>
        </Table>
        </TableContainer>
    );
    }