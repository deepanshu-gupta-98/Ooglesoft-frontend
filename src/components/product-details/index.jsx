import React, { useEffect } from 'react';
import { FooterFour, FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ProductDetailsArea from './product-details-area';


const ProductsDetails = ({product}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={product?.title ? product?.title : 'Product Details'} />
      <ProductDetailsArea product={product}/>
      <FooterFour/>
    </Wrapper>
  );
};

export default ProductsDetails;