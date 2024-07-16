//***** Written by: Angelo Dato ******/
//***** Difficulty: Entry Level *****/
//***** Est. Time: 45 minutes ******/

// ----------------------------------------------------------------------------------//
//******************* Problem Title: Problem Title: TailwindCSS & MaterialUI ********************/

//======================= Pre-Requisites ==========================/
//1. Figma account

//======================= Problem Description ==========================/
//For this test, you will be translating a mockup from Figma to html, with MUIv5 and TailwindCSS.

//******************* Solution Requirements ********************/
//1.) Use TailwindCSS.
//2.) Use MUIv5.
//3.) Translate the Figma mockup as best you can.
//4.) Layout must be responsive, mobile first.
//5.)All necessary assets can be found in the public folder.
//6.) Limit your work to this file.

//******************** Tips ********************
//1.) You may export icons and other assets from the provided Figma mockup.
//2.) You can use either function declaration or function expression.
//2.) Some MUIv5 elements may have built in padding and margin.

// ----------------------------------------------------------------------------------//
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Typography, createTheme, ThemeProvider, Box, Button, Container, Grid, TextField } from "@mui/material";
import heroImage from "../../public/images/yay.svg";
import download from "../../public/images/download.svg";
import login from "../../public/images/login.svg";
import pickup from "../../public/images/pickup.png";
import cashless from "../../public/images/cashless.png";
import transpo from "../../public/images/transpo.png"
import safety from "../../public/images/safety.png"
import play from "../../public/images/play.svg"
import app from "../../public/images/app.svg"
import twitter from "../../public/images/twitter.svg"
import facebook from "../../public/images/facebook.svg"
import insta from "../../public/images/insta.svg"

const theme = createTheme({
  typography: {
    fontFamily: "'Archivo', sans-serif",
  },
});

export default function Test6Screen() {
  return (
    <ThemeProvider theme={theme}>
      <Box className='h-screen'>
      <Container maxWidth="1600px">
      <Box className="h-screen flex flex-col-reverse md:flex-row items-center justify-center">
        <Box className="flex flex-col items-center text-center md:items-start md:text-left">
          <Typography
            variant="p"
            className="text-sm leading-normal w-screen max-w-full md:max-w-[603px] md:leading-[48px] font-normal md:text-4xl line-clamp-3 overflow-hidden text-primary"
          >
            Drive the nation to a more <span className="font-bold">seamless, convenient mobility</span> and <span className="font-bold">efficient logistics.</span>
          </Typography>
          <Box className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-4">
            <Button
              variant="contained"
              sx={{ width: '207px', backgroundColor: '#182C75', borderRadius: '3px', textTransform: 'none', padding: '12px 32px', fontWeight: '200' }}
            >
              <img src={download} alt="download" className="w-[15px] h-[15px] mr-4" />Get The App Now
            </Button>
            <Button
              variant="outlined"
              sx={{ width: '207px', color: '#182C75', border: '1px solid #182C75', borderRadius: '3px', textTransform: 'none', padding: '12px 32px', fontWeight: '200', ml: { xs: 0, md: '24px' }, mt: 1 }}
            >
              <img src={login} alt="download" className="w-[15px] h-[15px] mr-4" />Admin Login
            </Button>
          </Box>
        </Box>
        <Box className="flex justify-center bg-[#EAEDFB] mb-12 w-[300px] h-[300px] md:w-[642px] md:h-[739px] rounded-2xl">
          <img 
            src={heroImage} 
            alt="Hero Image"
            className="w-[300px] h-[300px] md:w-[456px] md:h-[773px]"
          />
        </Box>
      </Box>
      <Box className="flex justify-center mt-32">
  <Grid container maxWidth="1200px" justifyContent="center" spacing={2}>
    {/* First Box */}
    <Grid item md={4} className="hidden md:flex justify-center">
      <Grid sx={{ width: '100%', height: '367px' }} className="bg-[#CCD5F5] rounded-2xl flex items-center justify-center">
        <img src={pickup} alt="Pick up" className="w-full h-full object-cover" />
      </Grid>
    </Grid>

    {/* Second Box */}
    <Grid item xs={12} md={8} className="flex justify-center">
      <Grid
        sx={{ width: '100%', height: '367px', display: 'flex', flexDirection: 'column' }}
        className="bg-[#F1F5F9] rounded-2xl items-center justify-center"
      >
        <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '54px' }, fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>
          Pick Up And Delivery
        </Typography>
        <Typography variant="p" className="text-[#334155] text-center text-[12px] md:text-base md:text-start max-w-[532px] font-extralight">
          Taking good control of the delivery process in order to make sure that the parcel is delivered to you on time.
        </Typography>
      </Grid>
    </Grid>

    {/* Third Box */}
    <Grid item xs={12} md={6} className="flex justify-center items-center">
      <Grid sx={{ width: '100%', height: '567px' }} className="bg-[#F1F5F9] rounded-2xl flex items-center justify-center">
        <img src={cashless} alt="Cashless" className="w-[153px] h-[300px] md:w-[193px] md:h-[400px] object-cover" />
        <Box maxWidth="200px" className="flex items-center justify-center flex-col ml-12">
          <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '44px' }, fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>
            Cashless Payments
          </Typography>
          <Typography variant="p" className="text-[#334155] text-[12px] md:text-base text-start font-extralight">
            Hassle-free experience by using a cashless payment through Gcash
          </Typography>
        </Box>
      </Grid>
    </Grid>

    {/* Fourth Box */}
    <Grid item xs={12} md={6} className="flex justify-center">
      <Grid
        sx={{
          width: '100%',
          height: '567px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(to bottom, #e5ffd9, #e5ffd9, #e5ffd9, #e5ffd9, #304D23)',
        }}
        className="rounded-2xl items-center justify-center"
      >
        <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '54px'}, fontWeight: 'bold', color: '#334155', marginBottom: '1rem', mt: '3rem'}}>
          Transportation
        </Typography>
        <Typography variant="p" className="text-[#334155] font-extralight text-[12px] md:text-base text-start max-w-[532px]">
          Provide a convenient and secure local transportation
        </Typography>
        <img src={transpo} alt="Transportation" className="mt-auto"/>
      </Grid>
    </Grid>

    {/* Fifth Box */}
    <Grid item xs={12} className="flex-col md:flex-row flex justify-center">
      <Grid
        sx={{
          width: '100%',
          height: '467px',
          display: 'flex',
          background: '#CCD5F5',
          flexDirection: { xs: 'column', md: 'row'}
        }}
        className="rounded-2xl items-center justify-center"
      >
        <img src={safety} alt="Safety" className="ml-4 h-[200px] w-[400px] object-cover"/>
        <Box className="ml-12">
          <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '44px'}, fontWeight: 'bold', color: '#334155', marginBottom: '1rem', mt: '3rem'}}>
            Customer Safety
          </Typography>
          <Typography variant="p" className="text-[#334155] text-[12px] font-extralight text-start md:text-[20px]">
            GPS tracking ensures that drives are always on the right track
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Grid>
</Box>

      </Container>
        {/* Form */}
        <Box
          sx={{
            
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '12rem',
            backgroundColor: 'rgba(204, 213, 245, 0.2)',
            flexDirection: 'column',
            padding: '6rem',
            overflow: 'hidden'
            
          }}
        >
          <Typography variant="h2" sx={{ fontSize: { xs: '24px', md: '44px'}, fontWeight: 'bold', color: '#334155', marginBottom: '1rem' }}>
                      Contact Us
                    </Typography>
          <Typography variant="p" className="text-[#334155] text-[12px] md:text-[20px] font-extralight text-start ">
            Feel free to contact us anytime. We will get back to you as soon as we can.
          </Typography>
          <Box className="mt-16 flex flex-col w-[350px] md:w-[650px]">
          <Typography variant="p" className="text-[#64748B] text-base font-extralight text-start text-[18px]">
            Name
          </Typography>
          <TextField placeholder="John Doe"/> 
          <Typography variant="p" className="text-[#64748B] text-base font-extralight text-start text-[18px]" sx={{mt: '1rem'}}>
            Email Address
          </Typography>
          <TextField placeholder="johndoe@gmail.com"/> 
          <Typography variant="p" className="text-[#64748B] text-base font-extralight text-start text-[18px]" sx={{mt: '1rem'}}>
            Message
          </Typography>
            <TextField
            placeholder="Input message here"
            variant="outlined"
            multiline
            rows={4} 
            fullWidth
          />
          <Button variant="contained" sx={{ mt: 4, width: '100%', backgroundColor: '#182C75', borderRadius: '3px', textTransform: 'none', padding: '12px 32px', fontWeight: '200', fontSize: '18px'}}>
               Send Message
              </Button>
          
          </Box>
        </Box>
        {/* Footer */}
        <footer className="hidden md:flex bg-white h-[300px] justify-center p-12">
          <Container maxWidth="1300px">
            <Box className="flex items-start justify-between">
              <Box className="flex items-start justify-center flex-col">
                    <Typography
                    variant="p"
                    className="text-[#64748B] text-base font-extralight"
                    sx={{ mt: '1rem' }}
                  >
                    We bring convenience to you.
                  </Typography>
                  <Box className="mt-10">
                  <Typography
                    variant="p"
                    className="text-[#64748B] font-bold"
                    sx={{ mt: '4rem' }}
                  >
                    Dashboard
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-[#64748B] font-bold"
                    sx={{ mt: '4rem', ml: '1rem'}}
                  >
                    Pricing
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-[#64748B] font-bold"
                    sx={{ mt: '4rem', ml: '1rem' }}
                  >
                    Login
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-[#64748B] font-bold"
                    sx={{ mt: '4rem', ml: '1rem' }}
                  >
                    Register
                  </Typography>
                  <Typography
                    variant="p"
                    className="text-[#64748B] font-bold"
                    sx={{ mt: '4rem', ml: '1rem' }}
                  >
                    Lock
                  </Typography>
                  </Box>
                  <Box className="mt-32 ">
                  <Typography
                    variant="p"
                    className="text-[#64748B] text-sm font-extralight"
                  >
                    © Copyright Lorem Ipsum. All rights reserved. 
                  </Typography>
                </Box>
                
            </Box>
            <Box className="mt-[1rem] flex flex-col items-start justify-start">
            <Typography
                    variant="p"
                    className="text-[#64748B] font-bold"
                
                  >
                    Get the App
                  </Typography>
                  <Button variant="outlined" sx={{ mt: 3, width: '171px', color: '#182C75', border: '1px solid #182C75', borderRadius: '3px', textTransform: 'none', padding: '12px 32px', fontWeight: '200' }}>
                <img src={play} alt="Play Store" className="w-[15px] h-[15px] mr-4" />Google Play
              </Button>
              <Button variant="outlined" sx={{ mt: 1, width: '171px', color: '#182C75', border: '1px solid #182C75', borderRadius: '3px', textTransform: 'none', padding: '12px 32px', fontWeight: '200' }}>
                <img src={app} alt="App Store" className="w-[15px] h-[15px] mr-4" />App Store
              </Button>
              <Box className='flex mt-12'>
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook" className="ml-4"/>
                <img src={insta} alt="insta" className="ml-4"/>
              </Box>
                  
            </Box>
           
            </Box>
            
         
           
          </Container>
        </footer>

      </Box>
    </ThemeProvider>
  );
}
