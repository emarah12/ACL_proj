import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#E5E5E5',
  border: '2px solid white',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
export default function LoginModal() {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <div>
          <Link href="#" onClick={handleOpen} underline="always">
        {'Already have an account? Sign in to autofill your data'}
      </Link>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 250,height: 300 }}>
             <h1 style={{marginLeft:'110px',marginBottom:'-25px'}}><PeopleAltIcon style={{fontSize:'40px'}}/></h1> 
            <h2 id="parent-modal-title" style={{marginLeft:'80px'}}>SIGN IN</h2>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
  
      <div style={{marginLeft:'20px'}}>
        
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">Username</InputLabel>
          <FilledInput
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange('username')}
            aria-describedby="filled-username-helper-text"
            inputProps={{
              'aria-label': 'username',
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' ,marginTop:'1px'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button style={{backgroundColor:'#FCA311',color:'#FFFFFF',marginTop:'12px'}}>Continue</Button>
        </FormControl>
     
      </div>
 
  
    </Box>
            
          </Box>
        </Modal>
      </div>
    );
  }
