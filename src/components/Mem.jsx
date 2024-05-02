import React from 'react';
import { Box } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Mem = ({ data, isAlive }) => {
    const { memUsage } = data;
    const memUsageConverted = memUsage * 100;

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} flexGrow={1} justifyContent={'center'}>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgressWithLabel data={memUsageConverted} isAlive={isAlive} />
            </Box>
        </Box>
    );
};

export default Mem;
