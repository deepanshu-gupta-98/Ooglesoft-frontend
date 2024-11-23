import React from 'react';

const contents = {
  title: 'Personal Experience',
  text_1: 'I lead two innovative companies that offer cutting-edge solutions in the fields of brain technology and travel: Ooglesoft and thetriphike. At Ooglesoft, I oversee the development and marketing of a device that processes and transmits neural signals to devices like a hand bracelet or a phone. At thetriphike, I manage the operations and strategy of a platform that connects travelers with local guides and experiences. My goal is to create impactful and sustainable solutions for the society and the environment.',
  text_2: 'I am also pursuing my MBA in Electrical and Electronics Engineering from Rajasthan Technical University, Kota, where I have honed my skills in business process, data analysis, and project management. As part of the Anand-ICE Global Exposure Program, I completed an internship in Artificial Intelligence at the University of Dundee, Scotland, UK, in July-August 2022. This internship gave me the opportunity to learn from experts in AI and apply my knowledge to real-world problems. I am passionate about innovation and entrepreneurship, and I have participated and led several hackathons and competitions, such as SoftTech – HACK, where I showcased my creativity and leadership.',

  
  feature_items: [
    {
      title: 'Skills', desc: " An IT business analyst is a professional who analyzes IT systems and solves problems related to a company's technology needs.",
      lists: ['Chief Executive Officer at Acsivi be royal Pvt. Ltd.', 'Chief Executive Officer at ooglesoft',]
    },
    {
      title: 'Education', desc: "all praising uts pain was born and I will gives you a itself completed account of the system, and sed expounds the ut actual teachings of that greater",
      lists: ['University of Dundee', 'Rajasthan Technical University,kota', ]
    },
    {
      title: 'Awards', desc: "Acsivi is world's most customer oriented company,  we support our customer to get their favorite stuff in just one click and we bring it your door step.",
      lists: ['Mining Tracking or safety System in Helmets of Workers', 'The brain technology', ]
    },
  ]
}

const { title, text_1, text_2, feature_items } = contents;

const ExperienceArea = () => {
  return (
    <>
      <div className="tp-skill-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="amskill">
                <div className="amskill__title">
                  <h3 className="am-skill-title">{title}</h3>
                  <p className="pb-10">{text_1}</p>
                  <p>{text_2}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row feature-bottom-space">
            {feature_items.map((item, i) => {
              const {title,desc,lists} = item;
              return <div key={i} className="col-xl-4 col-lg-4">
                <div className="amfeature">
                  <div className="amfeature__item">
                    <h4 className="am-skill-sm-title">{title}</h4>
                    <p className={`am-p-space-${i+1}`}>{desc}</p>
                  </div>
                  <div className="amfeature__list">
                    <ul>
                      {lists.map((l,i) => <li key={i}><i className="fal fa-check"></i>{l}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceArea;