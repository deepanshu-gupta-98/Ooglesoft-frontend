import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import BlogArea from './blog-area';


const Blog = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour/>
      <Breadcrumb title={'Blog & Article'} />
      <BlogArea/>
      <FooterFour />
    </Wrapper>
  );
};

export default Blog;