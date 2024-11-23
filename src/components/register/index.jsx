import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import RegisterArea from './register-area';


const Register = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Register Page'} />
      <RegisterArea/>
      <Footerfour />
    </Wrapper>
  );
};

export default Register;