import React from 'react';
import {Container,Box,Grid,Typography,Link} from '@mui/material'
import './Dashboard.css';
import FirstChart from '../../components/FirstChart/FirstChart';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SessionsChart from '../../components/Charts/SessionsChart';
import TotalOrdersChart from '../../components/Charts/TotalOrdersChart';
import ProfitChart from '../../components/Charts/ProfitChart';
import DiscountChart from '../../components/Charts/DiscountChart';
import ReportsChart from '../../components/Charts/ReportsChart';
import UsersChart from '../../components/Charts/UsersChart';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function createData(id, issueddata, total, actions) {
  return { id, issueddata, total, actions };
}

const rows = [
  createData('#5089', '31 March 2023', '$1200', 'View Detail'),
  createData('#5089', '31 March 2023', '$1200', 'View Detail'),
  createData('#5089', '31 March 2023', '$1200', 'View Detail'),
  createData('#5089', '31 March 2023', '$1200', 'View Detail'),
  createData('#5089', '31 March 2023', '$1200', 'View Detail'),
];
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
function Dashboard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  
          return (
            <Container>
              <Box>
                <Grid container spacing={2}>



                  <Grid item xs={8} >
                    <Box className='cover'>
                      <Box >
                        <h3>Total Sales & Costs</h3>
                        <Typography className='item_subtitle'>Last 7 days</Typography>
                        <Box className="item_cost">
                          $350K
                        </Box>
                        <Box className='increasing_cover'>
                          <Box className='increasing'>
                            <ArrowUpwardIcon color="success" />
                            <Typography className='increasing_amount'>8.56K</Typography>
                          </Box>
                          <Typography className='item_subtitle'>vs Last 7 days</Typography>
                        </Box>
                      </Box>
                      <Box className='total_sales__chart'>
                        <FirstChart />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className='cover' >
                      <Box className='item'>
                        <h3>Sessions</h3>
                        <Typography className='item_subtitle'>Last 7 days</Typography>
                        <Box className="item_cost">
                          $16,5K
                        </Box>
                        <Box className='descending_cover'>
                          <Box className='descending'>
                            <ArrowDownwardIcon color="disabled" />
                            <Typography className='descending_amount'>8.56K</Typography>
                          </Box>
                          <Typography className='item_subtitle'>vs Last 7 days</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <SessionsChart />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={4}>
                    <Box className='cover'>
                      <Box className='item'>
                        <h3>Total Order</h3>
                        <Typography className='item_subtitle'>Last 7 days</Typography>
                        <Box className="item_cost">
                          $25.7K
                        </Box>
                        <Box className='increasing_cover'>
                          <Box className='increasing'>
                            <ArrowUpwardIcon color="success" />
                            <Typography className='increasing_amount'>6%</Typography>
                          </Box>
                          <Typography className='item_subtitle'>vs Last 7 days</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <TotalOrdersChart />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className='cover'>
                      <Box >
                        <h3>Total Profit</h3>
                        <Typography className='item_subtitle'>Last 7 days</Typography>
                        <Box className="item_cost">
                          $50K
                        </Box>
                        <Box className='increasing_cover'>
                          <Box className='increasing'>
                            <ArrowUpwardIcon color="success" />
                            <Typography className='increasing_amount'>12%</Typography>
                          </Box>
                          <Typography className='item_subtitle'>vs Last 7 days</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <ProfitChart />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className='cover'>
                      <Box >
                        <h3>Discounted Amount</h3>
                        <Typography className='item_subtitle'>Last 7 days</Typography>
                        <Box className="item_cost">
                          $12K
                        </Box>
                        <Box className='descending_cover'>
                          <Box className='descending'>
                            <ArrowDownwardIcon color="disabled" />
                            <Typography className='descending_amount'>2%</Typography>
                          </Box>
                          <Typography className='item_subtitle'>vs Last 7 days</Typography>
                        </Box>
                      </Box>
                      <Box>
                        <DiscountChart />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={8}>
                    <Box className='item_cover'>
                      <Box className='item'>
                        <h3>Reports</h3>
                        <Box className='item_subtitle'>Last 7 days</Box>
                      </Box>
                      <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="24K customers" {...a11yProps(0)} />
                            <Tab label="1.5K products" {...a11yProps(1)} />
                            <Tab label="250K revenue" {...a11yProps(2)} />
                          </Tabs>
                        </Box>
                        <CustomTabPanel value={value} index={0}>
                          <ReportsChart />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                          Item Three
                        </CustomTabPanel>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className='item_cover'>
                      <Box >
                        <h3>Users in last 30 minutes</h3>
                        <Box className="item_cost">
                          $16.5K
                        </Box>
                        <Typography className='item_subtitle'>Users per minute</Typography>

                      </Box>
                      <Box>
                        <UsersChart />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Box className='item'>

                      <h3>Popular Products</h3>
                      <Typography className='item_subtitle'>Total 10.4k Visitors</Typography>
                      <table>
                        <tr>
                          <td><Box style={{ color: 'black', fontWeight: 'bold', marginRight: '64px' }}>Apple iPhone 13</Box>
                            <Box className='list_item__description'>Item: #FXZ-4567</Box></td>
                          <td><Box className='list_item__price' >
                            $999.29
                          </Box></td>
                        </tr>
                        <tr>
                          <td><Box style={{ color: 'black', fontWeight: 'bold' }}>Apple iPhone 13</Box>
                            <Box className='list_item__description'>Item: #FXZ-4567</Box></td>
                          <td><Box className='list_item__price'>
                            $999.29
                          </Box></td>
                        </tr>
                        <tr>
                          <td><Box style={{ color: 'black', fontWeight: 'bold' }}>Apple iPhone 13</Box>
                            <Box className='list_item__description'>Item: #FXZ-4567</Box></td>
                          <td><Box className='list_item__price'>
                            $999.29
                          </Box></td>
                        </tr>
                        <tr>
                          <td><Box style={{ color: 'black', fontWeight: 'bold' }}>Apple iPhone 13</Box>
                            <Box className='list_item__description'>Item: #FXZ-4567</Box></td>
                          <td><Box className='list_item__price'>
                            $999.29
                          </Box></td>
                        </tr>
                        <tr>
                          <td><Box style={{ color: 'black', fontWeight: 'bold' }}>Apple iPhone 13</Box>
                            <Box className='list_item__description'>Item: #FXZ-4567</Box></td>
                          <td><Box className='list_item__price'>
                            $999.29
                          </Box></td>
                        </tr>
                        <tr>
                          <td><Box style={{ color: 'black', fontWeight: 'bold' }}>Apple iPhone 13</Box>
                            <Box className='list_item__description'>Item: #FXZ-4567</Box></td>
                          <td><Box className='list_item__price'>
                            $999.29
                          </Box></td>
                        </tr>
                      </table>


                    </Box>
                  </Grid>
                  <Grid item xs={8}>
                    <Box class='item_cover'>
                      <Box class='table_title__cover'>
                        <h3>Last Transactions</h3>
                        <Link href="#">View All</Link>
                      </Box>
                      <TableContainer >
                        <Table sx={{ maxWidth: 800 }} aria-label="simple table">
                          <TableHead>
                            <TableRow class='table_title'>
                              <TableCell align="right">ID</TableCell>
                              <TableCell align="right">Issued Date</TableCell>
                              <TableCell align="right">Total</TableCell>
                              <TableCell align="right">Actions</TableCell>

                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {rows.map((row) => (
                              <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >

                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell align="right">{row.issueddata}</TableCell>
                                <TableCell align="right">{row.total}</TableCell>
                                <TableCell align="right"><Link href='#' style={{ cursor: 'point', textDecoration: 'none' }}>
                                  {row.actions}</Link></TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Grid>
                </Grid>


              </Box>
            </Container>
          );
        }
      
      
        

export default Dashboard