import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert'

export default function AlertMessage({message, severity}) {
    return (
        <Alert variant="filled" severity={severity}>{message}</Alert>
    )
}