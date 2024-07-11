import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {Container}  from '@mui/material';
import './OrderManagement.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import SearchIcon from '@mui/icons-material/Search';

import ArrowDropDownCircleOutlined from '@mui/icons-material/ArrowDropDownCircleOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function OrderManagement() {
  const [status, setStatus] = React.useState('');
const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const [isOpen, setIsOpen] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(6); 
  
    const toggleRow = (id) => {
      setIsOpen((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  

  const data = [
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'},
    { id: '#6548', created: '2 min ago', customer:'Joseph Wheeler', total: '$654',profit:'$154'}
  ];
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>

      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box>
            <Box className='searchbox'>
              <input type="text" className='search_input' id="fname" name="fname" placeholder='Search...'></input>
              <SearchIcon />
            </Box>
            <Box>
            </Box>
          </Box>
          <Box>
            <Box >
              <Table className='table_cover'>
                <TableHead >
                  <TableRow >
                    <TableCell style={{ color: "grey" }} > ORDER ID</TableCell>
                    <TableCell style={{ color: "grey" }}>CREATED</TableCell>
                    <TableCell style={{ color: "grey" }}>CUSTOMER</TableCell>
                    <TableCell style={{ color: "grey" }}>TOTAL</TableCell>
                    <TableCell style={{ color: "grey" }}>PROFIT</TableCell>
                    <TableCell style={{ color: "grey" }}>STATUS</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentRows.map((row) => (
                    <React.Fragment key={row.id}>
                      <TableRow onClick={() => toggleRow(row.id)}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.created}</TableCell>
                        <TableCell>{row.customer}</TableCell>
                        <TableCell>{row.total}</TableCell>
                        <TableCell>{row.profit}

                          <Box className='profit'>16%</Box>
                        </TableCell>
                        <TableCell> <select name="status" id="status">
                          <option value="Pending">Pending</option>
                          <option value="Not Yet">Not Yet</option>
                          <option value="Process">Process</option>

                        </select></TableCell>
                        <TableCell>
                          <button>{isOpen[row.id] ? <ArrowCircleUpOutlinedIcon /> : <ArrowDropDownCircleOutlined />}</button>
                        </TableCell>
                      </TableRow>
                      {isOpen[row.id] && (

                        <Box className='spanning_table'>
                          <Table >
                            <TableHead>
                              <TableRow>
                                <TableCell>
                                  #
                                </TableCell>
                                <TableCell>
                                  SKU
                                </TableCell>
                                <TableCell>
                                  NAME
                                </TableCell>
                                <TableCell>
                                  Price
                                </TableCell>
                                <TableCell>
                                  QTY
                                </TableCell>
                                <TableCell>
                                  DISC
                                </TableCell>
                                <TableCell>
                                  TOTAL
                                </TableCell>
                                <TableCell>
                                  PRINT
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell></TableCell>
                                <TableCell>#6548</TableCell>
                                <TableCell>Apple iPhone 13</TableCell>
                                <TableCell>$999.29</TableCell>
                                <TableCell>x1</TableCell>
                                <TableCell style={{ color: "red" }}>5%</TableCell>
                                <TableCell>$949.32</TableCell>
                                <TableCell>...</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell></TableCell>
                                <TableCell>#6548</TableCell>
                                <TableCell>Apple iPhone 13</TableCell>
                                <TableCell>$999.29</TableCell>
                                <TableCell>x1</TableCell>
                                <TableCell style={{ color: "red" }}>5%</TableCell>
                                <TableCell>$949.32</TableCell>
                                <TableCell>...</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell></TableCell>
                                <TableCell>#6548</TableCell>
                                <TableCell>Apple iPhone 13</TableCell>
                                <TableCell>$999.29</TableCell>
                                <TableCell>x1</TableCell>
                                <TableCell style={{ color: "red" }}>5%</TableCell>
                                <TableCell>$949.32</TableCell>
                                <TableCell>...</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          <Box>
                            <table>
                              <tr>
                                <td><Box className='list_item__title' >Subtotal</Box>
                                </td>
                                <td><Box className='list_item__price'>
                                  $2,847.96
                                </Box></td>
                              </tr>
                              <tr>
                                <td><Box className='list_item__title' >Shipping</Box></td>

                                <td><Box className='list_item__price'>
                                  $5.50
                                </Box></td>
                              </tr>
                              <tr>
                                <td><Box className='list_item__title'>Discount</Box>
                                </td>
                                <td><Box style={{ color: "red" }} className='list_item__price'>
                                  $150.32
                                </Box></td>
                              </tr>
                              <tr>
                                <td><Box className='list_item__title' >Total</Box>
                                </td>
                                <td><Box className='list_item__price'>
                                  $2647.32
                                </Box></td>
                              </tr>

                            </table>
                          </Box>
                        </Box>
                      )}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
              <Box className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                  <button key={index} onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </button>
                ))}
              </Box>
            </Box>
          </Box>



        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </Container>
          );
        }
      
      
        

export default OrderManagement