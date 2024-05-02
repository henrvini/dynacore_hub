import { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { remove } from '../../store/dataBuffer';
import socket from '../utils/socketConnection';
import Cpu from './Cpu';
import Mem from './Mem';
import Info from './Info';
import MemChips from './MemChips';
import Offline from './Offline';

const Widget = ({ data }) => {
    const dispatch = useDispatch();
    const [isAlive, setIsAlive] = useState(true);
    const { freeMem, totalMem, usedMem, memUsage, osType, upTime, cpuType, numCores, cpuSpeed, cpuLoad, macA } = data;
    const cpuData = { cpuLoad };
    const memData = { freeMem, totalMem, usedMem, memUsage };
    const infoData = { macA, osType, upTime, cpuType, cpuSpeed, numCores };
    let timer;

    useEffect(() => {
        socket.on('connectedOrNot', ({ machineMacA, isAlive }) => {
            if (machineMacA === macA) {
                setIsAlive(isAlive);
            }
        });
    }, []);

    useEffect(() => {
        if (!isAlive) {
            timer = setTimeout(() => {
                console.log('a user has timed out, board removed!');
                dispatch(remove(macA));
            }, 30000);

            return () => {
                clearTimeout(timer);
            };
        }

        return () => {};
    }, [isAlive]);

    return (
        <Box
            position={'relative'}
            display="flex"
            flexGrow={1}
            alignItems="center"
            mb={5}
            p={2}
            border="2px solid grey"
            borderRadius={1}
            bgcolor={'#F5F5F5'}
            boxShadow={'2px 2px 5px rgba(0, 0, 0, 0.3)'}
        >
            {!isAlive ? <Offline /> : <></>}
            <Grid display={'flex'} flexDirection={{ xs: 'column', md: 'row', lg: 'row' }} flexGrow={1} container>
                <Grid gap={2} display={'flex'} flexDirection={'column'} item sm={12} lg={8}>
                    <Box display={'flex'} flexGrow={1} flexDirection={{ xs: 'column', md: 'row', lg: 'row' }}>
                        <Box display={'flex'} flexGrow={1} flexDirection={'column'} alignItems={'center'}>
                            <Typography fontSize={20} variant="caption" component="div">
                                CPU Load
                            </Typography>
                            <Cpu data={cpuData} isAlive={isAlive} />
                        </Box>
                        <Box gap={1} display={'flex'} flexGrow={1} flexDirection={'column'} alignItems={'center'}>
                            <Typography fontSize={20} variant="caption" component="div">
                                Memory Usage
                            </Typography>
                            <Mem data={memData} isAlive={isAlive} />
                        </Box>
                    </Box>
                    <Box display={'flex'} flexGrow={1} alignItems={'flex-end'} justifyContent={'center'}>
                        <MemChips data={memData} />
                    </Box>
                </Grid>
                <Grid display={'flex'} flexDirection={'column'} textAlign={'center'} item sm={12} lg={4}>
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        flexGrow={1}
                        justifyContent={'center'}
                    >
                        <Typography p={1} fontSize={20} variant="caption" component="div">
                            General Info
                        </Typography>
                        <Info data={infoData} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Widget;
