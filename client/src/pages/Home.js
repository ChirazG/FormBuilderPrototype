import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Home.css'

const Home = () => {
  return (

    <div className="is-preload">

    {/* Wrapper */}
    <div id="wrapper">

      {/* Main */}
      <div id="main">
        <div className="inner">



          {/* Banner */}
          <section className="main-banner">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="banner-content">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="banner-caption">
                          <h4>The ultimate online<em> Form Builder</em> that's easy to use !</h4>
                          <span>Create beautiful forms in minutes!</span>
                          <p>Our form builder lets you create forms for any occasion,
                             like signing up for an event, collecting contact details, or taking feedback.</p>
                          <div className="primary-button">
                            <a href="#">Read More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="services">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4">
                  <div className="service-item first-item">
                    <div className="icon"></div>
                    <h4>Create beautiful online forms without the need for a developer</h4>
                    <p>Intuitive and easy to use panel allow you to customize the look & feel and create beautifully effective online forms</p>
                  </div>
                </div> 
              </div>
            </div>
          </section>

          {/* Top Image */}
          <section className="top-image">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <img src="./assets/formb.svg" alt="" />
                  <div className="down-content">
                  <Typography sx={{ width: '100%', maxWidth: '100%', textAlign:'center'}} variant="h3" component="div" gutterBottom>Easily build powerful forms</Typography>
                  <Typography sx={{ width: '100%', maxWidth: '100%', textAlign:'center'}} variant="h4" component="div" gutterBottom>Experience our easy-to-use online form builder for free </Typography>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>



    </div>
  </div>

)
}

export default Home



//     <Box sx={{ width: '100%', maxWidth: 500 }}>
//       <Typography variant="h1" component="div" gutterBottom>
//         h1. Heading
//       </Typography>
//       <Typography variant="h2" gutterBottom component="div">
//         h2. Heading
//       </Typography>
//       <Typography variant="h3" gutterBottom component="div">
//         h3. Heading
//       </Typography>
//       <Typography variant="h4" gutterBottom component="div">
//         h4. Heading
//       </Typography>
//       <Typography variant="h5" gutterBottom component="div">
//         h5. Heading
//       </Typography>
//       <Typography variant="h6" gutterBottom component="div">
//         h6. Heading
//       </Typography>
//       <Typography variant="subtitle1" gutterBottom component="div">
//         subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur
//       </Typography>
//       <Typography variant="subtitle2" gutterBottom component="div">
//         subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
//         neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
//         quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="body2" gutterBottom>
//         body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
//         neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
//         quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="button" display="block" gutterBottom>
//         button text
//       </Typography>
//       <Typography variant="caption" display="block" gutterBottom>
//         caption text
//       </Typography>
//       <Typography variant="overline" display="block" gutterBottom>
//         overline text
//       </Typography>
//     </Box>
//   );
// }

// export default Home
