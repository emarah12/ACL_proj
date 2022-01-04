import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ArticleIcon from '@mui/icons-material/Article';
import WcIcon from '@mui/icons-material/Wc';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} style={{fontSize:'11px',marginRight:'-10px'}}>Select seat</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 450,height:500 }}>
          <h2 id="child-modal-title">Checkout seats</h2>
          <p id="child-modal-description">
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.5}>
      <Grid item xs={4}>
          <Item >Front Door</Item>
        </Grid>
      <Grid item xs={8}>
          <Item >Front Cabin</Item>
        </Grid>
      <Grid item xs={1}>
      <ArticleIcon style={{marginBottom:'-63px'}}/>
        </Grid>
        <Grid item xs={1.5}>
         <h5>A</h5> 
          <Item ></Item>
        </Grid>
        <Grid item xs={1.5}>
        <h5>B</h5> 
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
        <h5>C</h5> 
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        
        </Grid>
        <Grid item xs={1.5}>
        <h5>D</h5> <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
        <h5>E</h5> 
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
        <h5>F</h5> 
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ArticleIcon style={{marginBottom:'-63px'}}/>
        </Grid>
         {/* 2nd row */}
         <Grid item xs={12}>
        </Grid>
        <Grid item xs={12}>
        </Grid>
         <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
         <Grid item xs={1.5}>
          <Item style={{backgroundColor:'#05004E'}}></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item style={{backgroundColor:'#05004E'}}></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item style={{backgroundColor:'#05004E'}}></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item style={{backgroundColor:'#05004E'}}></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
        {/* 3rd row */}
        <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
         <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
        {/* 5th row */}
        <Grid item xs={1}>
        <ExitToAppIcon style={{color:'red'}} />
        </Grid>
         <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ExitToAppIcon style={{color:'red'}}/>
        </Grid>
        {/* 4th row */}
        <Grid item xs={1}>
        <ExitToAppIcon style={{color:'red'}} />
        </Grid>
         <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ExitToAppIcon style={{color:'red'}}/>
        </Grid>
         {/* 6th row */}
         <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
         <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
       {/* 7th row */}
       <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
         <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
          {/* 8th row */}
          <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
         <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
          
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1.5}>
          <Item></Item>
        </Grid>
        <Grid item xs={1}>
        <ArticleIcon />
        </Grid>
        {/* last row */}
        <Grid item xs={4}>
          <Item>Rear Door</Item>
        </Grid>
        <Grid item xs={8}>
          <Item><WcIcon style={{fontSize:'16px'}}/> Toilet</Item>
        </Grid>
      </Grid>
    </Box>
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}