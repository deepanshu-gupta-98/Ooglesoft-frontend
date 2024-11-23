import React, { useEffect } from 'react';
import { FooterFive, FooterFour, FooterThree, FooterTwo, HeaderFour, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import CtaTwo from '../../common/cta/cta-2';
import CaseArea from '../../common/recent-case-studies';
import TestimonialArea from '../../homes/home-4/testimonial-area';
import ServiceArea from './service-area';

const Service = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      {/* <HeaderFour/> */}
      <Breadcrumb title={'Service '} />
      <ServiceArea />
      <CaseArea/>
      <TestimonialArea style_2={true}/>
      <CtaTwo/>
      <FooterFour/>
      
    </Wrapper>
  );
};

export default Service;