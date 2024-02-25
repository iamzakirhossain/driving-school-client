import React from 'react'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Avatar, Stack,Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import TextField from '@mui/material/TextField';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  function createData(title, value) {
    return { title, value};
  }
  
  const rows = [
    createData('Name', "John Doe"),
    createData('Email', "john@email.com"),
    createData('Phone', "+46 76 076 xx xx"),
    createData('Address', "Address here")
  ];
  
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });



const UpdateStudentProfile = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1, marginTop:"70px" }}>
        <Grid container spacing={3}>
      <Grid item xs={12}>
        <Item elevation={0}>
        <Stack spacing={0}>
      <Item elevation={0} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Avatar
      alt="Remy Sharp"
      src="./src/assets/images/john.png"
      sx={{ width: 100, height: 100 }}
    />
    
      </Item>
      <Item elevation={0}>
      <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  sx={{marginTop:"-20px"}}
  size='small'
  startIcon={<CloudUploadIcon />}
>
  Upload
  <VisuallyHiddenInput type="file" />
</Button>
    </Item>
    </Stack>
    
    
    <Grid container spacing={0} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Grid item xs={12} md={6} lg={6}>
        <Item >

          <Box
      sx={{
       
        maxWidth: '100%',
      }}
    >
      <TextField size="small" fullWidth label="Name" id="name" />
    </Box>

    <Box
      sx={{
        
        maxWidth: '100%',
        marginTop:"20px"
      }}
    >
      <TextField size="small" fullWidth label="Email" id="email" />
    </Box>

    <Box
      sx={{
       
        maxWidth: '100%',
        marginTop:"20px"
      }}
    >
      <TextField size="small" fullWidth label="Phone number" id="phone" />
    </Box>

    <Box
      sx={{
        
        maxWidth: '100%',
        marginTop:"20px"
      }}
    >
      <TextField size="small" fullWidth label="Address" id="address" rows={4}  multiline />
    </Box>
    
        <Stack spacing={2}>
      <Item elevation={0}>
      <Button variant="contained">
      Update
    </Button>
      </Item>
    
    </Stack>
        </Item>
      </Grid>
    </Grid>
    
    
    
        </Item>
      </Grid>
    </Grid>
        </Box>
        </>
      )
}

export default UpdateStudentProfile