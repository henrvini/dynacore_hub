import React from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Cpu = ({ data, isAlive }) => {
    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} flexGrow={1} justifyContent={'center'}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgressWithLabel data={data.cpuLoad} isAlive={isAlive} />
            </Box>
        </Box>
    );
};

export default Cpu;
