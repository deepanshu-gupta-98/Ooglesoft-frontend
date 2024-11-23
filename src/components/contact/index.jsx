import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FooterFour, FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ContactArea from './contact-area';


const Contact = () => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     animationCreate();
  //   }, 500);
  // }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
 }, 500);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    console.log(e,"e")
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:4035/api/contact-us-add', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Contact'} />
      <ContactArea
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        responseMessage={responseMessage}
      />
      <FooterFour />
    </Wrapper>
  );
};

//   return (
//     <Wrapper>
//       <HeaderFour />
//       <Breadcrumb title={'Contact'} />
//       <ContactArea/>
//       <FooterFour />
//     </Wrapper>
//   );
// };

export default Contact;