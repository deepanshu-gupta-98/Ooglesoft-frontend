import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import WishlistArea from './wishlist-area';



const Wishlist = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'My Wishlist'} />
      <WishlistArea/>
      <FooterFour/>
    </Wrapper>
  );
};

export default Wishlist;