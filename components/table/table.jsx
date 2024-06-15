import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: "#fff",
        fontFamily: "Roboto-Medium",
        fontSize: ".9rem",
        border: "1px solid #ffffff14",
    },
    [`&.${tableCellClasses.body}`]: {
        color: "#ffffffbf",
        fontFamily: "Roboto-Medium",
        fontSize: ".9rem",
        border: "1px solid #ffffff14",
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#1b1b1b",
    },
}));

function createData(size, small, medium, large, extra) {
    return { size, small, medium, large, extra };
}

const rows = [
    createData('4', '35mm', '40mm', '45mm', '50mm'),
    createData('6', '38mm', '42mm', '48mm', '55mm'),
    createData('8', '40mm', '45mm', '50mm', '58mm'),
    createData('10', '42mm', '48mm', '55mm', '60mm'),
];

function Tables() {
    return (
        <TableContainer component={Paper} sx={{background: "transparent", boxShadow: "none"}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Watch Size</StyledTableCell>
                        <StyledTableCell>Small</StyledTableCell>
                        <StyledTableCell>Medium</StyledTableCell>
                        <StyledTableCell>Large</StyledTableCell>
                        <StyledTableCell>Extra Large</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.size}>
                            <StyledTableCell component="th" scope="row">{row.size}</StyledTableCell>
                            <StyledTableCell>{row.small}</StyledTableCell>
                            <StyledTableCell>{row.medium}</StyledTableCell>
                            <StyledTableCell>{row.large}</StyledTableCell>
                            <StyledTableCell>{row.extra}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Tables;