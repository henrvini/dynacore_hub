import moment from 'moment';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

const Info = ({ data }) => {
    const rows = [
        { name: 'System', value: data.osType },
        { name: 'Online at', value: moment.duration(Math.round(data.upTime), 'seconds').humanize() + ' ago' },
        { name: 'Processor', value: data.cpuType },
        { name: 'Cores', value: data.numCores },
        { name: 'Clock Speed', value: data.cpuSpeed }
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Info;
