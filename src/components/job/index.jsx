import React, { useEffect, useState } from 'react';
import { FooterFour, FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import Cta from '../common/cta/cta';
import JobArea from './job-area';


const Job = () => {
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
      <Breadcrumb title={'Ooglesoft Job List'} />
      <JobArea/>
      <Cta/>
      <FooterFour />
    </Wrapper>
  );
};

export default Job;