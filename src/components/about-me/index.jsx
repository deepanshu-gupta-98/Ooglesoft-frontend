// import React, { useEffect } from 'react';
// import { FooterFour, FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
// import { animationCreate } from '../../utils/utils';
// import Breadcrumb from '../common/breadcrumb/breadcrumb';
// import AboutContact from './about-contact';
// import AboutMeArea from './about-me-area';
// import ExperienceArea from './experience-area';


// const AboutMe = ({team}) => {

//   useEffect(() => {
//     setTimeout(() => {
//       animationCreate();
//     }, 500);
//   }, []);

//   return (
//     <Wrapper>
//       <HeaderFour />
//       <Breadcrumb title={team?.name ? team?.name : 'Veer singh'} />
//       {/* <AboutMeArea team={team}/> */}
//       <ExperienceArea/>
//       <AboutContact/>
//       <FooterFour />
//     </Wrapper>
//   );
// };

// export default AboutMe;