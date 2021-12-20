import { Container } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { render } from "react-dom";

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import FormDialog from "./popupForm";


export default function AllFlights()
{
    // const classes = useStyles();

    const [ClickedRow,setClickedRow] = useState(null);

    //Table States
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const[FlightList,setFlightList] = useState([]);

    const[Delete,setDelete] = React.useState(false);

    const [IsDeleted,setIsDeleted]=useState(false); //for successful deletion
    const [FailedDelete,setFailedDelete]=useState(false);

   const [Edit,setEdit]=useState(false)

    //delete modal states
    const [open, setOpen] = React.useState(false);

   
    useEffect(()=>{
     axios.get('http://localhost:3001/api/flight').then((response) => {
         setFlightList(response.data);
    });
    },[]);

    //column headers
    const columns = [
        {
          Label: 'Flight Number',
          id: 'flight_number',
          minWidth: 50,
          align: 'center'
        },
        {
          Label: 'Departure',
          id: 'departure',
          minWidth: 100,
          align: 'center'
        },
        {
          Label: 'Arrival',
          id: 'arrival',
          minWidth: 100,
          align: 'center'
        },
        {
          Label: 'Arrival Airport',
          id: 'arr_airport',
          minWidth: 60,
          align: 'center'
        },
        {
          Label: 'Departure Airport',
          id: 'dep_airport',
          minWidth: 60,
          align: 'center'
        },
        {
          Label: 'Arrival Terminal',
          id: 'arr_terminal',
          minWidth: 50,
          align: 'center'
        },
        {
          Label: 'Departure Terminal',
          id: 'dep_terminal',
          minWidth: 50,
          align: 'center'
        },
        {
          Label: 'Economy Seats',
          id: 'econ_seats',
          minWidth: 50,
          align: 'center'
        },
        {
          Label: 'Business Seats',
          id: 'business_seats',
          minWidth: 50,
          align: 'center'
        },
        {
            id: 'delete',
            minWidth: 30,
            align: 'center'
          },
          {
            id: 'edit',
            minWidth: 30,
            align: 'center'
          },
      ];

      //table func
      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      //delete confirmatory modal
      const handleClickOpen = (event) => {
        event.preventDefault()
        setOpen(true);
        setDelete(true); //potential delete
        console.log("handle click open: "+Delete)
      };
    
      const handleClose = () => {
        console.log("handle close")
        setDelete(false);
        // setIsDeleted(false);
        console.log("handle click open: "+ Delete)
        setOpen(false);
      };

      const handleEdit = (row) => {
        const id=row._id;
        setClickedRow(row._id);
        setEdit(true);
        console.log(row);
        console.log(ClickedRow);
        window.location.href="/api/flight/updateFlightbyadmin/"+id;
      
      };

      const handleDelete = () => {
        console.log("inside delete")
      axios.delete("http://localhost:3001/api/flight/delete/"+ClickedRow).then((response) => {
        setIsDeleted(true);
        console.log("Item deleted successfully!");
        setDelete(false);
     
     });
     setOpen(false);  //close modal
     setFlightList(FlightList.filter((item) => item._id !== ClickedRow))
     setDelete(false);
     setIsDeleted(true);
      };


     const assignId = (row, index) =>{ //identifies the currently clicked item and deletes it  
     console.log("assignId")
      if(Delete){ //if delete button is closed delete 
    //  try{
    //   console.log("inside delete")
    //   axios.delete("http://localhost:3001/api/flight/deleteFlight/"+ClickedRow).then((response) => {
    //     setIsDeleted(true);
    //     console.log("Item deleted successfully!");
     
    //  });
    //  setOpen(false);  //close modal
    //  setFlightList(FlightList.filter((item) => item._id !== ClickedRow))
    //  setDelete(false);
    //  }catch(e)
    //  {
    //    setFailedDelete(true);
    //     console.log("Error while trying to delete!")
    //  }
    
        return; //return to avoid changing the clicked row's state
    // }
      
      }
      setClickedRow(row._id);  //else only identify the clicked row
    }
       const [Visible,setVisible]=useState(false);
      const handleCloseAlert = () =>{
        setIsDeleted(false);
        setFailedDelete(false);
        setVisible(false);
      }

      

    return(
        <div>
           {IsDeleted?
             <div> <Alert onClose={handleCloseAlert}>Successful Deletion — Flight deleted successfully!</Alert></div>:FailedDelete?
             <Alert onClose={handleCloseAlert} severity="warning">Error — Failed to delete flight!</Alert>:<p></p>}
            <h1 align="center">Flight Schedule</h1>
    {/* start table */}
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.Label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {FlightList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => assignId(row, index)}>
                    {columns.map((column) => {
                        const refrenceKey = column.id;
                      const value = row[refrenceKey];
                      return (
                        <TableCell key={column.id} align={column.align}>
                     {refrenceKey === 'delete'? 
                     <div>
                     <Button onClick={handleClickOpen} size="small" color="error" variant="outlined" startIcon={<DeleteIcon fontSize="small" />} >Delete</Button>
                     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          {"Are your sure you want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Items deleted will be permenantly lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
                  </div>
                            :refrenceKey === 'edit'?  
                            // <Button size="small" variant="outlined" startIcon={<EditIcon fontSize="small" />} onClick={() => handleEdit(row)}>Edit</Button>
                             <FormDialog id={ClickedRow}/>
                             
                            : value} 
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={FlightList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>

        </div>
        );
}