import * as React from 'react';
import { Checkbox, FormControlLabel, Grid, Paper, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Ipbase from '@everapi/ipbase-js'
import Location from './Location';
import { toast } from 'react-toastify';
import { tailspin } from 'ldrs'

export default function Hero() {
  tailspin.register()
  const [ip, setIp] = React.useState('')
  const [myIp, setMyIp] = React.useState(false)
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [check, setCheck] = React.useState(false)

  const handelCheckIp = () => {
    setLoading(true)
    setMyIp(myIp => !myIp)
  }

  const localiseUserByIp = () => {
    setCheck(true)
    const ipBase =  new Ipbase('ipb_live_gPv47X0geZyLkRiRsKUyxRxs781rqrCt0oOt0o3H')
    if(ip.length <= 2){
      toast.error('Adresse IP invalide')
      setCheck(false)
    }else{
      ipBase.info({
        ip: ip,
      }).then(response => {
          const data = response.data
          if (data === undefined) {
            toast.error('Adresse IP invalide')
            setCheck(false)
          }else{
            setData(data)
            console.log(data)
            setCheck(false)
          }
      }).catch(err => {
        console.log(err)
        const resp = err.response
      
        console.log(resp)
        setCheck(false)
      });
    }
  }

  React.useEffect(() => {
    if (myIp) {
      setLoading(true);
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
          setIp(data.ip);
          setLoading(false);
          
        })
        .catch(error => {
          toast.error('Une erreur s\'est produite : ' + error.message);
          setLoading(false);
        });
    } else {
      setIp('');
      setLoading(false);
    }
  }, [myIp]);


  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            Localisation par &nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              Adresse IP
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            Géoloc vous permet d'obtenir instantanément des détails précis sur la localisation : ville, région, pays et FAI à partir d'une adresse IP. Simple, rapide et précis.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}
          >
            <Stack direction="column" spacing={0} sx={{ width: '100%' }}>
              <TextField
                onChange={(e) => setIp(e.target.value)}
                value={ip}
                id="outlined-basic"
                hiddenLabel
                size="small"
                variant="outlined"
                aria-label="Entrez une adresse IP"
                placeholder="Entrez une adresse IP"
                inputProps={{
                  autoComplete: 'off',
                  'aria-label': 'Entrez une adresse IP',
                }}
              />
              <FormControlLabel 
                control={<Checkbox onChange={() => handelCheckIp()}/>} 
                label="Récupérer mon adresse IP" 
              />
            </Stack>
            {
              loading ? (
                // Default values shown
                <l-tailspin
                  size="30"
                  stroke="5"
                  speed="0.9" 
                  color="black" 
                ></l-tailspin>
              ) :
              (
                <Button 
                  variant="contained" 
                  color="primary"
                  onClick={() => localiseUserByIp()}
                >
                  Localiser {
                    check && (
                        <l-tailspin
                          size="15"
                          stroke="5"
                          speed="0.9" 
                          color="white" 
                        ></l-tailspin>
                    )
                  }
                </Button>
              )
            }
            
          </Stack>
          {
            data && (
              <Grid item xs={12}>
                <Paper sx={{ mt: 5, p: 2, display: 'flex', flexDirection: 'column', background: 'rgb(245, 245, 245)' }}>
                  <Location data={ data }/>
                </Paper>
              </Grid>
            )
          }
          
        </Stack>
      </Container>
    </Box>
  );
}
