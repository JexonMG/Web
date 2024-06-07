import React from 'react';
import { Box, Card, CardContent, Avatar, Typography, Button, Link } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import './Amigo_Page.css';

export default function Amigo_Page({ amigo }) {
    console.log('')

    return (
        <Box className="amigo-page-container">
            <Card className="amigo-page-card">
                <CardContent>
                    <Typography variant="h4" component="h1" gutterBottom color="text.primary">
                        {amigo.name}
                    </Typography>
                    <Avatar
                        alt={amigo.name}
                        src={`https://unavatar.io/${amigo.picture}`}
                        className="amigo-page-avatar"
                    />
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                        {amigo.nickname}
                    </Typography>
                    <Button
                        variant="contained"
                        disableElevation
                        className="amigo-page-button"
                        component = {RouterLink}
                        to = "/"
                    >
                        Ir a la página principal
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
