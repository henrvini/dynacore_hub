import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography } from '@mui/material';
import { update } from '../store/counterSlice';
import { useEffect } from 'react';
import socket from './utils/socketConnection';
import Widget from './components/Widget';

function App() {
    const payload = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    useEffect(() => {
        socket.on('perfData', (data) => {
            dispatch(update(data));
        });
    }, []);

    return (
        <Container fixed>
            <Typography align="center" fontSize={40} variant="overline" component="div">
                DYNACORE HUB
            </Typography>
            {Object.values(payload).map((data) => (
                <Widget data={data} key={data.macA} />
            ))}
        </Container>
    );
}

export default App;
