import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Stack,Button } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import HistoryIcon from '@mui/icons-material/History';
import TeacherClassHistory from './TeacherClassHistory';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function createData(title, value) {
    return { title, value};
  }
  
  const rows = [
    createData('Class completed', 47),
    createData('Class canceled', 5)
  ];


const TeacherHistory = () => {
    return (
        <>

        <Box component="paper" sx={{display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        marginTop:"90px",
        marginBottom:"30px"}}>
        <Button variant="outlined" startIcon={<HistoryIcon />}>
        History
</Button>
        
    </Box>

        <Box sx={{ flexGrow: 1, marginTop:"5px", marginBottom:"20px" }}>
        <Grid container spacing={2}>
  <Grid item xs={12} md={4} lg={4}>
    <Item>
    <TableContainer component={Paper} elevation={0}>
          <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableBody>
              {rows.map((row,index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Item>
  </Grid>
  <Grid item xs={12} md={8} lg={8}>
    <Item>
    <TeacherClassHistory/>
    </Item>
  </Grid>
</Grid>
        </Box>
        </>
      )
}

export default TeacherHistory