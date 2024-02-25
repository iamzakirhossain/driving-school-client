import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import {Routes, Route, useNavigate} from 'react-router-dom';
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
    createData('Name', "John Doe"),
    createData('Email', "john@email.com"),
    createData('Phone', "+46 76 076 xx xx"),
    createData('Address', "Address here")
  ];
  

const StudentProfile = () => {

  const navigate = useNavigate();
  const handleUpdate = ()=>{
    navigate("/update");
  }
  return (
    <>
    <Box sx={{ flexGrow: 1, marginTop:"70px" }}>
    <Grid container spacing={3}>
  <Grid item xs={12}>
    <Item elevation={0}>
    <Stack spacing={0}>
  <Item elevation={0} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <Avatar
  alt="Remy Sharp"
  src="./src/assets/images/john.png"
  sx={{ width: 100, height: 100 }}
/>

  </Item>
  <Item elevation={0}>
  <Button size='Large' 
  sx={{marginTop:"-20px"}} 
  variant="outlined" 
  startIcon={<AccountBalanceWalletIcon />}>
  100
</Button>

<Fab sx={{marginTop:"-20px", marginLeft:"5px"}} size="small" color="inherit" aria-label="add">
  <AddIcon />
</Fab>


</Item>
</Stack>


<Grid container spacing={0} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
  <Grid item xs={12} md={6} lg={6}>
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

    <Stack spacing={2}>
  <Item elevation={0}>
  <Button variant="contained" onClick={handleUpdate}>
  Update now
</Button>
  </Item>

</Stack>
    </Item>
  </Grid>
</Grid>



    </Item>
  </Grid>
</Grid>
    </Box>
    </>
  )
}

export default StudentProfile