import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function createData(date, start, end, student) {
    return { date, start, end, student };
  }
  
  const rows = [
    createData('02-24-2024', "09:00", "10:00", "Benjamin Hayes"),
    createData('02-24-2024', "11:00", "12:00", "Ethan Brooks"),
    createData('02-25-2024', "14:00", "15:00", "Gabriel Martinez"),
    createData('02-26-2024', "16:00", "17:00", "Alexander Chang"),
    createData('02-27-2024', "18:00", "19:00", "Liam Patel"),
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const UpcomingTeacherClass = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <><Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Warning!
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Are you sure want to cancel this class?
      </Typography>
      <Container  sx={{display:"flex",justifyContent:"center", alignItems:"center", marginTop:"20px"}}>
      <Button variant="contained" sx={{mr:1}} onClick={handleClose}>
                    Yes
              </Button>
      <Button variant="contained" color="error" onClick={handleClose}>
                    No
              </Button>
      </Container>
   

    </Box>
  </Modal>

         <Typography
          sx={{ flex: '1 1 100%',marginTop:"90px",marginLeft:"10px" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Upcoming classes
        </Typography>
        <TableContainer component={Paper} sx={{m:1}}>

      <Table sx={{ minWidth: 650,marginLeft:"10px",marginRight:"10px"}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Start</TableCell>
            <TableCell align="center">End</TableCell>
            <TableCell align="center">Student</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{textWrap:"nowrap" }} component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="center">{row.start}</TableCell>
              <TableCell align="center">{row.end}</TableCell>
              <TableCell style={{textWrap:"nowrap" }} align="center">{row.student}</TableCell>
              <TableCell align="center">
              
              <Button onClick={handleOpen} variant="contained" color="error">
                    Cancel
              </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default UpcomingTeacherClass