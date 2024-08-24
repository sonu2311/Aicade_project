import React from 'react';
import {Box,Grid,Card,CardContent,Typography,Button,IconButton,Divider,Paper,
  AppBar,Toolbar,Badge,useTheme,Tooltip,CardMedia} from '@mui/material';
import {Dashboard,Description,Work,ExitToApp,Notifications,Settings,HelpOutline,
  Search} from '@mui/icons-material';
import TextSnippetRoundedIcon from '@mui/icons-material/TextSnippetRounded'; 
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { styled } from '@mui/system';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useMediaQuery } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


const Header2 = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: 'black',  }}>
      <Toolbar sx={{  }}>
        <Typography variant="h1" component="div" sx={{ flexGrow: 1, fontSize: '18px',fontWeight: 700,color: '#333333',transition: 'color 0.3s ease','&:hover': {color: '#1976d2',}, }}>
          My Dashboard
        </Typography>
        <IconButton color="inherit" sx={{color: '#333333',transition: 'color 0.3s ease','&:hover': { color: '#1976d2'}}}>
          <Search />
        </IconButton>
        <IconButton color="inherit" sx={{color: '#333333',transition: 'color 0.3s ease','&:hover': {color: '#1976d2', },}}>
          <Badge variant="dot" color="success">
            <Notifications />
          </Badge>
        </IconButton>
        <Button variant="contained" color="primary" sx={{ marginLeft: '20px' }}>
          + Create New
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const CardForTrendingJob = ({ job }) => (
  <Grid item xs={12} sm={12} lg={6} md={6}>
    <Paper elevation={2} sx={{ padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img src={job.logo} alt={`${job.company} logo`} style={{ width: '40px', marginRight: '6px',borderRadius:'50%'  }} />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold" sx={{textAlign:'left'}}>{job.title}</Typography>
          <Typography variant="body2" color="textSecondary" sx={{textAlign:'left'}}>{job.company}</Typography>
        </Box>
      </Box>
      <Button variant="text" color="inherit" sx={{ fontWeight: 'bold' }}>Apply</Button>
    </Paper>
  </Grid>   
);

const SideBarButton =({text, icon}) => {
  return (
    <Button
    startIcon={icon}
    fullWidth
    sx={{
      justifyContent: 'flex-start',
      color: '#1F2937',
      mb: 2,
      borderRadius: '8px',
      padding: '12px',
      transition: 'background 0.3s ease',
      '&:hover': { bgcolor: '#eee' },    
    }}   
  >
    {text}
  </Button>
  )
}

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 350,
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRight:'solid #eee 1px',
      }}
      >
      <Box>
        <Typography variant="h5" fontWeight="bold" mb={4}>
          Builder.io
        </Typography>
        <Box>    
          <SideBarButton text='Dashboard' icon={<Dashboard />}  />
          <SideBarButton text='Templates' icon={<Description />}  />
          <SideBarButton text='Jobs' icon={<Work  />}  />
          <SideBarButton text='Job Applications' icon={<ExitToApp  />}  />       
        </Box>
      </Box>
      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 ,flexDirection: 'column',}}>
          <SideBarButton text='Settings' icon={<Settings/>}  />
          <SideBarButton text='Help & support' icon={<HelpOutline/>}  />
        </Box>
        <Button
          variant="contained"   
          fullWidth
          sx={{
            borderRadius: '8px',
            padding: '12px',  
          }}
        >
          Upgrade to Pro
        </Button>
      </Box>
   </Box>
  )
}

const TrendingJob =() => {
  const jobs = [
    { title: 'Sales Engineer', company: 'Adobe Technologies', logo: 'images/image1.jpeg' },
    { title: 'SEO Executive', company: 'Dropbox Inc.', logo: 'images/image2.jpeg' },
    { title: 'Senior Designer', company: 'Blinkist', logo: 'images/image1.jpeg' },
    { title: 'Sales Engineer', company: 'Adobe Technologies', logo: 'images/image1.jpeg' },
    { title: 'SEO Executive', company: 'Dropbox Inc.', logo: 'images/image2.jpeg' },
    { title: 'Senior Designer', company: 'Blinkist', logo: 'images/image1.jpeg' }
  ];
  return (
    <Grid  container spacing={2} >      
      <Grid  item xs={12} md={8} >
        <Paper elevation={2} sx={{ padding: '20px 32px', textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <Typography variant="h6" fontWeight="bold" sx={{fontSize:'25px'}} >
              Trending Jobs
            </Typography>
            <Box>
            <IconButton color="inherit" sx={{color: '#333333',transition: 'color 0.3s ease','&:hover': { color: '#1976d2'}}}>
              <ArrowCircleUpIcon  sx={{transform: 'rotate(-90deg)'}} fontSize="large"/>
            </IconButton>
            <IconButton color="inherit" sx={{color: '#333333',transition: 'color 0.3s ease','&:hover': { color: '#1976d2'}}}>
              <ArrowCircleRightIcon   fontSize="large"/>
            </IconButton>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {jobs.map((job, index) => (
              <CardForTrendingJob key={index} job={job} />
            ))}
          </Grid>   
          <Button variant="text" color="inherit" sx={{ fontWeight: 'bold'}}>
            View All Jobs
          </Button>
        </Paper>
      </Grid>    
      <Grid item xs={12} md={4}>
        <Paper elevation={2} sx={{ padding: '30px', textAlign: 'center' }}>
          <Box sx={{ marginBottom: '16px', }}>
            <img src="images/image1.jpeg" alt="Create job application icon"
            style={{ width: '80px' }} />
          </Box>
          <Typography variant="h6" fontWeight="bold">
            Create your own job application
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '24px' }}>
            Save time job hunting, get more out of it.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started    
          </Button>
        </Paper>
      </Grid>
    </Grid>
  )
}

const TypeOfLetter = () => {
  return (
    <Grid  item xs={12} md={8} >  
    <Grid container spacing={2}>   
      <Grid item xs={12} sm={12} lg={3} md={3}>  
        <Box sx={{ display: 'flex', alignItems: 'center' }}>  
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Hey, Anita
            </Typography>
            <Typography variant="body2" color="textSecondary">
              What do you want to create
            </Typography>
          </Box>
        </Box>    
      </Grid>   
      <Grid item xs={12} sm={12} lg={3} md={3}>
        <Box sx={{ display:'flex',alignItems:'center',padding:'5px 10px'
        , border:'solid #eee 1px' ,borderRadius:'5px' }}>
          <TextSnippetRoundedIcon color="primary" sx={{padding:'10px'}} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              Resume
            </Typography>
            <Typography variant="body2" color="textSecondary">
              This is Resume.
            </Typography>
          </Box>
        </Box>  
      </Grid>   
      <Grid item xs={12} sm={12} lg={3} md={3}> 
        <Box sx={{ display: 'flex', alignItems:'center',padding:'5px 10px'
        , border:'solid #eee 1px' ,borderRadius:'5px' }}>
          <TextSnippetRoundedIcon color="secondary" sx={{padding:'10px'}} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              title
            </Typography>
            <Typography variant="body2" color="textSecondary">
              company
            </Typography>
          </Box>
        </Box>    
      </Grid>   
      <Grid item xs={12} sm={12} lg={3} md={3}>  
        <Box sx={{ display: 'flex', alignItems: 'center',padding:'5px 10px', border:'solid #eee 1px' ,borderRadius:'5px' }}>
          <FileCopyIcon color="success" sx={{padding: '10px', }} />
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                Regin Letter
              </Typography>
              <Typography variant="body2" color="textSecondary">
                This is Regin Letter
              </Typography>
            </Box>
        </Box>  
      </Grid>   
    </Grid>    
  </Grid>
  )
}

const Tabs = () => {
  return (      
    <Box elevation={0}
    sx={{
      mb: 2,
      mt: 4,
    }}
    > 
    <Grid container spacing={4}>
      <Grid item xs={6} sm={6} md={8} lg={8} >    
        <Typography color="textPrimary" fontWeight="bold">
        <span>Resume</span>
        <span style={{paddingLeft:'20px'}}>
          Cover Letters
        </span>
        </Typography>   
      </Grid>
      <Grid item xs={6} sm={6} md={4} lg={4} style={{textAlign:'right'}}>
        <Typography variant="caption" color="textSecondary" >
          <Button
            variant="outlined"
            endIcon={<ChevronRightRoundedIcon />}
            sx={{
              borderColor: '#333',
              color: '#333',
              borderRadius: '6px',
              padding: '6px',
              fontWeight:'bold',       
              '&:hover': { bgcolor: 'rgba(59, 130, 246, 0.1)', color:'#1976d2' },
            }}
          >
            View All 
          </Button>
        </Typography>
      </Grid>
    </Grid>
  </Box>
  )
}
 
const ResumeCard = ({ image, title, subtitle }) => {
  return (
    <Box sx={{maxWidth: 320,  borderRadius: 5,
       }}>   
      <CardMedia
        width= '100%'
        height= '200'
        position= 'absolute'
        component="img"
        image={image}
        alt={title} 
        sx={{borderRadius:2, objectFit:'cover',
        objectPosition:'top'}}
      />
      <CardContent sx={{px :0}} >
        <Typography gutterBottom variant="h6" component="div">
            {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {subtitle}
        </Typography>
      </CardContent>
    </Box>
  );
};

const resumeList = [
  { image: 'images/new_resume1.jpeg',title: 'Resume1', subtitle: 'Last Updated 2 days ago' },
  { image: 'images/new_resume5.jpeg', title: 'Resume2', subtitle: 'Last Updated 2 days ago' },
  { image: 'images/new_resume8.jpeg', title: 'Resume3', subtitle: 'Last Updated 2 days ago' },
  { image: 'images/new_resume4.jpeg', title: 'Resume4', subtitle: 'Last Updated 2 days ago' },
];

const Main = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {!isSmallScreen && (
        <Sidebar/> 
      )}
      <Box sx={{ flexGrow: 1,  overflowY: 'scroll' }}>
        <Header2/>
        <Divider/>
        <Box  sx={{ p:4 }}  > 
          <TypeOfLetter/>
          <Tabs/>
          <Typography variant="h6" sx={{ mb: 2, color: '#1F2937' }}>
            Resumes
          </Typography>
          <Grid container spacing={4}>
          {resumeList.map((resume, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <ResumeCard 
                image={resume.image} 
                title={resume.title} 
                subtitle={resume.subtitle} 
              />     
            </Grid>
            ))}
          </Grid> 
          <Divider sx={{ my: 4 }} />
          <TrendingJob/>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;

