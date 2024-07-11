import React,{useState} from 'react';
import {Container,Box,Grid,Typography,Link} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '../../img/edit.svg'
import './Customers.css';
import Account from '../../img/account.png'
import DeleteIcon from '../../img/trash.svg'
import LockIcon from '../../img/lock.svg'
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

const createData = (name,mail, number, created, action) => {
  return { name,mail, number, created,action };
};

const rows = [
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),
  createData('Robert Fox','robert@gmail.com','(201) 555-0124','6 April 2023'),

];

function Customers() {

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
              <Box className='searchbox'>
                <input type="text" className='search_input' id="fname" name="fname" placeholder='Search...'></input>
                <SearchIcon />
              </Box>
              <Box >
                <Paper >
                  <TableContainer >
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell style={{ color: "grey", fontSize: "15px" }}>NAME</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="right">PHONE NUMBER</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="right">CREATED</TableCell>
                          <TableCell style={{ color: "grey", fontSize: "15px" }} align="right">ACTION</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              <Box className='account_cover'>
                                <img className='account_image' src={Account} alt="" />
                                <Box>
                                  <Box className='account_name' variant='body1'>{row.name}</Box>
                                  <Box className='account_email'>{row.mail}</Box>
                                </Box>
                              </Box>
                            </TableCell>
                            <TableCell style={{ fontSize: "15px" }} align="right">{row.number}</TableCell>
                            <TableCell style={{ fontSize: "15px" }} align="right">{row.created}</TableCell>
                            <TableCell align="right">
                              <Box className='actions'>
                                <a href="#">
                                  <img src={EditIcon} alt="" />
                                </a>
                                <button type="button">
                                  <img src={LockIcon} alt="" />
                                </button>
                                <button type="button">
                                  <img src={DeleteIcon} alt="" />
                                </button>

                              </Box>
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