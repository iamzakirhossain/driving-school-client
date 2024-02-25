import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  function createData(date, start, end, classType, student, status) {
    return { date, start, end,classType, student, status};
  }
  
  const rows = [
createData('02-24-2024', "09:00","10:00","Special", 'Michael Johnson', "completed"),
createData('02-24-2024', "14:00","15:00","General", 'Daniel Martinez', "canceled"),
createData('07-12-2024', "10:00","11:00","General", 'Emily Taylor', "completed"),
createData('11-05-2024', "13:00","14:00","General", 'David Thomas', "canceled"),
createData('09-30-2024', "16:00","17:00","General", 'Olivia Jackson', "completed"),
createData('03-17-2024', "11:00","12:00","Special", 'James Martin', "completed"),
createData('06-08-2024', "15:00","16:00","Special", 'John White', "canceled"),
createData('05-23-2024', "10:00","11:00","General", 'Matthew Wilson', "completed"),
createData('08-19-2024', "14:00","15:00","General", 'Sophia Thompson', "canceled"),
createData('10-03-2024', "08:00","09:00","General", 'Andrew Anderson', "completed"),
createData('04-01-2024', "12:00","13:00","General", 'Jessica Davis', "completed"),
createData('11-15-2024', "09:00","10:00","General", 'Robert Garcia', "canceled"),
createData('08-07-2024', "16:00","17:00","General", 'Christopher Brown', "completed"),
createData('07-29-2024', "14:00","15:00","General", 'Emma Harris', "canceled"),
createData('06-21-2024', "10:00","11:00","General", 'Hannah Moore', "completed"),
createData('05-09-2024', "13:00","14:00","General", 'Michael Johnson', "canceled"),
createData('09-05-2024', "09:00","10:00","General", 'Daniel Martinez', "completed"),
createData('02-15-2024', "15:00","16:00","General", 'Olivia Jackson', "canceled"),
createData('12-20-2024', "11:00","12:00","General", 'John White', "completed"),
createData('08-31-2024', "10:00","11:00","General", 'Matthew Wilson', "completed"),
createData('03-07-2024', "16:00","17:00","General", 'David Thomas', "canceled"),
createData('11-28-2024', "14:00","15:00","General", 'Sophia Thompson', "completed"),
createData('06-12-2024', "09:00","10:00","General", 'James Martin', "completed"),
createData('10-24-2024', "12:00","13:00","General", 'Andrew Anderson', "canceled"),
createData('04-19-2024', "11:00","12:00","General", 'Jessica Davis', "completed"),
createData('07-03-2024', "15:00","16:00","General", 'Robert Garcia', "canceled"),
createData('01-10-2024', "10:00","11:00","Special", 'Christopher Brown', "completed"),
createData('05-30-2024', "13:00","14:00","Special", 'Emma Harris', "completed"),
createData('09-12-2024', "08:00","09:00","General", 'Hannah Moore', "canceled"),
createData('12-02-2024', "14:00","15:00","General", 'Michael Johnson', "completed"),
createData('08-25-2024', "09:00","10:00","General", 'Daniel Martinez', "completed"),
createData('03-28-2024', "15:00","16:00","General", 'Olivia Jackson', "canceled"),
createData('11-08-2024', "10:00","11:00","General", 'John White', "completed"),
createData('06-01-2024', "12:00","13:00","General", 'Matthew Wilson', "completed"),
createData('04-12-2024', "16:00","17:00","General", 'David Thomas', "canceled")
  ].sort((a, b) => (a.date < b.date ? -1 : 1));
  

const TeacherClassHistory = (props) => {
    
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="center">Start</TableCell>
            <TableCell align="center">End</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell align="center">Student</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row,index) => (
              <TableRow key={index}>
                <TableCell style={{ width: 160, textWrap:"nowrap" }} component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.start}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.end}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.classType}
                </TableCell>
                <TableCell style={{ width: 160, textWrap:"nowrap" }} align="center">
                  {row.student}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.status}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
}

export default TeacherClassHistory