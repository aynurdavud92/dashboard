import React,{useState} from 'react';
import {Container,Box,Grid,Typography,Link} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import './Transactions.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
  IconButton,
} from '@mui/material';
import { FirstPage, LastPage, KeyboardArrowLeft, KeyboardArrowRight, RawOff } from '@mui/icons-material';

const createData = (id,customer, date, total,method,status, action) => {
  return { id,customer, date, total,method,status,action };
};

const rows = [
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),
  createData('#5089','Joseph Wheeler','6 April 2023','$2,564','CC','Pending'),


];

function Customers() {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    const TablePaginationActions = (props) => {
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
            <FirstPage />
          </IconButton>
          <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
          >
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
          >
            <KeyboardArrowRight />
          </IconButton>
          <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
          >
            <LastPage />
          </IconButton>
        </Box>
      );
    };
  
          return (
            <Container>
              <Box className='title_cover'>
                <Box className='searchbox'>
                  <input type="text" className='search_input' id="fname" name="fname" placeholder='Search...'></input>
                  <SearchIcon />
                </Box>

                <Box style={{ borderColor: 'white' }}>
                  <FormControl style={{ borderColor: 'white' }}>

                    <Select
                      style={{ width: 200, height: 40, backgroundColor: 'white', borderColor: 'white' }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Status"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Pending</MenuItem>
                      <MenuItem value={20}>Process</MenuItem>
                      <MenuItem value={30}>Not Yet</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>



              <Box >
                <Paper >
                  <TableContainer >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ color: "grey", fontSize: "15px" }}>ID</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="left">CUSTOMER</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="left">DATE</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="left">TOTAL</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="left">METHOD</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="left">STATUS</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="left">ACTION</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                          <TableRow key={row.id}>
                            <TableCell style={{ fontSize: "15px", color: "#23272E", fontWeight: "600" }} align="left" >{row.id}</TableCell>
                            <TableCell style={{ fontSize: "15px", color: "#23272E", fontWeight: "600" }} align="left">
                              {row.customer}
                            </TableCell>
                            <TableCell style={{ fontSize: "15px", color: "#23272E", fontWeight: "600" }} align="left">{row.date}</TableCell>
                            <TableCell style={{ fontSize: "15px", color: "#23272E", fontWeight: "600" }} align="left">{row.total}</TableCell>
                            <TableCell style={{ fontSize: "15px", fontWeight: "600", color: "#23272E" }} align="left">{row.method}</TableCell>
                            <TableCell style={{ color: "#FFC600", fontSize: "15px", fontWeight: 'bold' }} align="left">{row.status}</TableCell>
                            <TableCell style={{ fontSize: "15px" }} align="left">
                              <Link href="#" underline="none">
                                View Details
                              </Link>
                            </TableCell>

                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination

                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                  />
                </Paper>
              </Box>
            </Container>
          );
        }
      
      
        

export default Customers