// import { useState } from 'react'
import { AppBar, Button, Card, CardActionArea, CardContent, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


function App() {
  const tutorial_list = [
    'Tutorial1: basics', 
    'Tutorial2: Intermediate1', 
    'Tutorial3: Intermediate2', 
    'Tutorial4: Advanced1',
    'Tutorial5: Advanced2',
    'Free Play'
  ];

  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppBar position="static" sx={{margin: 0}}>
          <Toolbar>
            <Typography varient="h6" component="div" sx={{ flexGrow: 1, mr: 2 }}>Home</Typography>
            {/* <Button color="inherit" onClick={showCode}>Show Code</Button> */}
            {/* <CodeDialogue handleClose={handleClose} open={open} tutorial="tutorial1" /> */}
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          </Toolbar>
        </AppBar>
      </Grid>
      {
        tutorial_list.map((tutorial, index) => {
          return (
            <Grid item xs={3} sx={{height: '80px', ml: 1}} onClick={() => navigate(`/tutorial${index+1}`)} key={index}>
              <Card>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {tutorial}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })
}   
    </Grid>
  )
}

export default App
