import React from 'react';
import { Chip, Stack } from '@mui/material';
import { getColor } from '../utils/helper';

const MemChips = ({ data }) => {
    const { freeMem, memUsage, totalMem, usedMem } = data;
    const memUsageConverted = memUsage * 100;
    const GBinBytes = 1073741824;
    const totalMemInGB = Math.floor((totalMem / GBinBytes) * 10) / 10;
    const freeMemInGB = Math.floor((freeMem / GBinBytes) * 10) / 10;
    const usedMemInGB = Math.floor((usedMem / GBinBytes) * 10) / 10;

    return (
        <Stack alignItems="center" direction={{ xs: 'column', md: 'row', lg: 'row' }} spacing={{ xs: 1, md: 3, lg: 5 }}>
            <Chip color="primary" label={`Total Memory: ${totalMemInGB}gb`} sx={{ minWidth: '11rem' }} />
            <Chip
                color={getColor(memUsageConverted)}
                label={`Used Memory: ${usedMemInGB}gb`}
                sx={{ minWidth: '11rem' }}
            />
            <Chip
                color={getColor(memUsageConverted)}
                label={`Free Memory: ${freeMemInGB}gb`}
                sx={{ minWidth: '11rem' }}
            />
        </Stack>
    );
};

export default MemChips;
