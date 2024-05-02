import { Box, Typography } from '@mui/material';

const Offline = () => {
    return (
        <>
            <Box
                position={'absolute'}
                left={0}
                top={0}
                bgcolor={'grey'}
                width={'100%'}
                height={'100%'}
                sx={{ opacity: 0.8, zIndex: 1 }}
            />
            <Typography
                position={'absolute'}
                left={0}
                top={0}
                display="flex"
                justifyContent={'center'}
                alignItems={'center'}
                width={'100%'}
                height={'100%'}
                color={'red'}
                fontSize={{ xs: 70, md: 100, lg: 130 }}
                sx={{ textShadow: '1px 1.3px 2px black', zIndex: 1, opacity: 1 }}
            >
                OFFLINE
            </Typography>
        </>
    );
};

export default Offline;
