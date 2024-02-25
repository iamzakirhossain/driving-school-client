import React,{useEffect} from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Stack, Button } from '@mui/material';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LoginIcon from '@mui/icons-material/Login';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  sessionStorage.setItem("userType","student");
const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
    let [userType, setUserType] = React.useState("student");

    const handleUserType =(e)=>{
        setUserType(e);
    }

    const handleNavigation=()=>{
        navigate("/home");
    }

   useEffect(()=>{
    sessionStorage.removeItem("userType");
    sessionStorage.setItem("userType",userType);
   },[userType,setUserType])

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={5} lg={5} sx={{display:{xs:"none",md:"flex",lg:"flex"},justifyContent:"center",alignItems:"center"}}>
              <Item sx={{padding:"10px", marginTop:{lg:"100px", md:"100px",xs:"20px"}}} elevation={0}>
                <img 
                    style={{width:"400px", height:"auto"}} 
                    src={"./src/assets/images/drivingschool.webp"} 
                    alt={""}/>
              </Item>
              
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{display:{xs:"flex",md:"none",lg:"none"},justifyContent:"center",alignItems:"center"}}>
              <Item sx={{padding:"10px", marginTop:{lg:"100px", md:"100px",xs:"20px"}}} elevation={0}>
                <img 
                    style={{width:"200px", height:"auto"}} 
                    src={"./src/assets/images/drivingschool.webp"} 
                    alt={""}/>
              </Item>
            </Grid>

            <Grid item xs={12} md={5} lg={5} sx={{marginLeft:"10px", marginRight:"10px"}}>
              <Item elevation={1} sx={{ padding:"20px", marginTop:{lg:"150px", md:"150px",xs:"20px"}}}>
              <Box
      sx={{
       
        maxWidth: '100%',
      }}
    >
      <TextField size="small" fullWidth label="Email" id="email" />
    </Box>

    <Box
      sx={{
        
        maxWidth: '100%',
        marginTop:"20px",
        textAlign:"start"
      }}
    >
    
    <FormControl size='small' fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          
        </FormControl>
        <Button sx={{fontSize:"12px",textTransform:"none"}}>Forgot password?</Button>
      
    </Box>

    <FormGroup>
      <FormControlLabel  control={<Checkbox defaultChecked size="small"/>} label="Remember me" />
    </FormGroup>
    
        <Stack spacing={2}>
      <Item elevation={0}>
      <Button variant="contained" onClick={handleNavigation} startIcon={<LoginIcon />} sx={{marginTop:"10px"}}>
      Login
    </Button>
    
      </Item>
    
    </Stack>
              </Item>
            </Grid>
          </Grid>
        </Box>
        <Box component="section" sx={{ p: 2, m:5, border: '1px dashed red' }}>
      <p>Just for development purpose.</p>
      <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Login as a</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="student"
        name="radio-buttons-group"
      >
        <FormControlLabel value="student" id='userType' onChange={(e)=> handleUserType(e.target.value)} control={<Radio />} label="Student" />
        <FormControlLabel value="teacher" id='userType' onChange={(e)=> handleUserType(e.target.value)} control={<Radio />} label="Teacher" />
      </RadioGroup>
    </FormControl>
    </Box>
        </>
      );
}

export default Login