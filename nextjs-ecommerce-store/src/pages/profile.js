import { useState, useEffect } from "react";
import { signIn, getSession, getProviders, useSession } from "next-auth/react";
import Head from "next/head";

import { getToken } from "next-auth/jwt";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/router";
import {
  Alert,
  AlertTitle,
  Avatar,
  Button,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { EmailOutlined, KeyOutlined, LockOutlined, PermIdentityOutlined, SettingsOutlined, TokenOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import moment from "moment";


export default function UserProfilePage({data}) {
    
  const router = useRouter();
  const { data: session, status } = useSession()
    
  const [ userEmail, setUserEmail ] = useState('');
  const [ userName, setUserName ] = useState('');
  const [ tokenExpiration, setTokenExpiration ] = useState('');

//   useEffect(async () => {            
              
//      if(!Boolean(session)) {
//       //router.push('/login')                          
//      }   
//      else {   
//       setUserEmail(session.user.email)
//       setUserName(session.user.name)
//       setTokenExpiration(session.expires)
//        console.log(session)
//      }                
  
//   }, [])
  
  // R E N D E R   P A G E

  if (session) {
    return (
      <>
      <Container>
            
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 305 }}>           
              
                <CardContent>
                <Typography variant="h4" sx={{mb: 5}}>
                  User Profile
                </Typography>

                <ListItemButton>
                  <ListItemIcon>
                  <PermIdentityOutlined/>
                  </ListItemIcon>
                  <ListItemText primary={userName} />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                  <EmailOutlined/>
                  </ListItemIcon>
                  <ListItemText primary={userEmail} />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                  <TokenOutlined/>
                  </ListItemIcon>
                  <ListItemText primary={moment(tokenExpiration).format('MM/DD/YYYY hh:mm')} />
                </ListItemButton>

      
                </CardContent>
              </Card>

          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 305 }}>              
                <CardContent>
                  <Typography variant="h4" >
                  Password
                  </Typography>

                  <KeyOutlined sx={{fontSize: '78px'}}/>
                    
                    <Typography variant="body2" alignItems="left">
                    Make your password stronger, or change it if someone else knows it.
                    </Typography>
                </CardContent>
              </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 305 }}>           
              <CardContent>
                <Typography variant="h4" >
                  Settings
                </Typography>

                <SettingsOutlined sx={{fontSize: '78px'}}/>
                  
                <Typography variant="body2" alignItems="left">
                Personalize your account settings and see how your data is used.
                </Typography>
                
              </CardContent>
            </Card>

          </Grid>
          <Grid item xs={8}>

          </Grid>
        </Grid>
                
        </Container>
      </>
    );
  }
  else return <Typography variant="h3" alignItems="center"> Access Denied </Typography>
    
}

export async function getServerSideProps(context) {
  const { req, res } = context;

  try {    
    const secret = process.env.NEXTAUTH_SECRET
    const token = await getToken({ req, secret })   
  
    
  } catch (e) {
    console.log('getServerSideProps Token Error')
  }
  
  
  return {
    props: {      
      data: []
    },
  };
}
  