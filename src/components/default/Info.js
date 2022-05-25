import { Box, Typography, Container } from "@mui/material"
import SecurityIcon from '@mui/icons-material/Security';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ShareIcon from '@mui/icons-material/Share';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';






import image from "../images/security2.jpg"
import image2 from "../images/padlock.png"


/*

        <Box sx={{alignItems: 'left', m : 0}}>

            <img src={image} alt="security wallpaper" />

        </Box>



        todo info: 


        <Box sx={{
      
        }} >
            <Box
                sx={{
                    backgroundImage: `url(${image2})`,
                    backgroundSize: "cover",
                    margin: 0,
                    height: "40vh",
                    color: "#f5f5f5",
                    alignItems: 'left',
                    width: '100%',
                }}>
                <Typography color="common.white">
                    SecFinance

                    </Typography>



            </Box>

            <Box>
                Aca van los bullets
            </Box>

        </Box>

        <Container sx={{marginTop:"67px", paddingLeft:0}} id="containerinfo"> 
         </Container>
*/

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor, velit quis rutrum egestas, lorem quam dapibus sapien, vel dapibus leo purus et sem. Nulla molestie, felis id lobortis consequat, lectus risus cursus mi, ac dignissim enim dolor a leo. Nunc dictum semper tellus, id dictum quam dictum non. Donec non turpis sollicitudin, tempus elit in, dignissim diam. Mauris viverra magna purus, id vehicula orci pellentesque quis. Fusce elementum orci nisi, id egestas nisl luctus viverra. Nullam efficitur pretium ante, ut lacinia erat dictum a. Nullam egestas mi lorem, sed tincidunt diam viverra ac. Vivamus congue dui non interdum rutrum. Ut accumsan nisi nec fringilla volutpat"+"Integer id pulvinar dui. Nunc at enim lectus. Aenean dictum sit amet purus et vehicula. Suspendisse potenti. Sed feugiat ante nec nunc pretium ultricies. Phasellus sit amet neque id felis sodales vestibulum. Cras suscipit elit tortor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In a massa tortor. Ut aliquet, nisl vitae semper venenatis, augue nibh fringilla odio, ut convallis massa felis et libero. Morbi mattis cursus iaculis. Vestibulum pulvinar, sapien non ornare imperdiet, velit tellus ullamcorper odio, id vehicula nibh leo et lectus. Donec sed ante at lorem finibus cursus. In in magna quis dui hendrerit eleifend vel a libero."

function Info() {
    return (


        <Box sx={{ marginTop: "63px", backgroundColor:"black"}}>

            <Box sx={{ height: "40vh", backgroundImage: `url(${image2})`,
                backgroundSize: "cover", backgroundPosition: "center 25%",}}> 
                    <Typography variant="h2" sx={{color: "white", p: 10}}>
                        Cybersecurity for Banks and Fintech
                    </Typography>
            </Box>

            <Box sx={{ height: "30vh", display: "flex", flexDirection: "row", justifyContent: 'center', alignItems: "center"}}> 

                <Box sx={{display:"flex", width: "20vw", height: "10vh", m: 2, color: "#4154FF"}}> 
                    <SecurityIcon sx={{fontSize: "9vh"}}/>
                    <Box sx={{display:"flex", justifiy: "center", alignItems: "center", m:1}}>Threat Intelligence</Box>
                </Box>

                <Box sx={{display:"flex", width: "20vw", height: "10vh", m: 2, color: "#4154FF"}}> 
                    <ShareIcon sx={{fontSize: "9vh"}}/>
                    <Box sx={{display:"flex", justifiy: "center", alignItems: "center", m:1}}>Sharing Information</Box>
                </Box>

                <Box sx={{display:"flex", width: "20vw", height: "10vh", m: 2, color: "#4154FF"}}> 
                    <FingerprintIcon sx={{fontSize: "9vh"}}/>
                    <Box sx={{display:"flex", justifiy: "center", alignItems: "center", m:1}}>Protection Toolkit</Box>
                </Box>


            
            </Box>
           
            <Box sx={{ height: "30vh", display:"flex", justify: "center", alignItems: "center", justifyContent: "center", marginBottom: "5vh"}} > 
                 <Typography color="white" sx={{backgroundColor:"black", width: "70%"}}>{lorem}</Typography>
            </Box>





        </Box>










    )
}

export default Info;