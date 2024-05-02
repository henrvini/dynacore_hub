import React from 'react';
import { Box, CircularProgress, Typography, circularProgressClasses } from '@mui/material';
import { getColor } from '../utils/helper';

const CircularProgressWithLabel = ({ data, isAlive }) => {
    const size = 200;
    const thickness = 2.5;

    return (
        <Box
            sx={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <CircularProgress
                variant={'determinate'}
                sx={{ color: (theme) => theme.palette.grey[200], position: 'absolute' }}
                size={size}
                thickness={thickness}
                value={100}
            />
            <CircularProgress
                color={isAlive ? getColor(data) : 'primary'}
                size={200}
                thickness={thickness}
                variant={isAlive ? 'determinate' : 'indeterminate'}
                value={data}
                sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round'
                    },
                    animationDuration: '3s'
                }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Typography fontSize={30} variant="caption" component="div">{`${Math.round(data)}%`}</Typography>
            </Box>
        </Box>
    );
};

export default CircularProgressWithLabel;
