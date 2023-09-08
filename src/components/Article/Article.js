import React from 'react';
import img1 from '../../images/achivement/1.png';
import img2 from '../../images/achivement/2.png';
import img3 from '../../images/achivement/3.png';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import './Article.css'; 

const Article = () => {
    return (
        <div>
        <div className="article-container">
            <Card className="article-card">
                <div className="article-content">
                    <Card.Img variant="top" src={img1} style={{ width: '380px', height: '280px' }}  />
                    <Card.Body>
                        <h4><Badge bg="primary">Landmark Achievement of Apollo Hospitals Dhaka</Badge></h4>
                        <Card.Text>
                        "Autologous transplants, which is using the person's own stem cells to replace stem cells damaged by chemotherapy, is an essential component of treatment for various haematological conditions, such as multiple myeloma, lymphoma and some forms of leukaemia," explained Dr. Saleh.Along with his team, Dr. Saleh treated the 71 year old male patient who has been suffering from multiple myeloma for 9 months. Even though they had visited the hospitals in Bangkok earlier, the patient's family finally chose Apollo Hospitals Dhaka, considering the comfort and confidence in getting treatment here.<br />

                        <br />Having spent 10 years at King Faisal Special Hospital and Research Centre in the Kingdom of Saudi Arabia and having conducted more than a thousand bone marrow transplants, Dr. Saleh has extensive hands-on experience in all aspects of bone marrow transplant such as clinical management, transfusion medicine and stem cell processing.Apollo Hospitals Dhaka has invested rigorously in technology such as creating positive pressure rooms for ensuring complete sterile environment for immune-compromised patients, development of apheresis unit for separation of different blood components and comprehensive diagnostic workup facilities.<br />

                        <br/>To provide comprehensive management for all kinds of haematological disorders, Apollo Hospitals Dhaka has trained their team, comprising of doctors, nurses, technologists and pharmacists at renowned centres abroad. Also, the haematology and bone marrow transplant center at Apollo Hospitals Dhaka is the only center in Bangladesh that provides comprehensive haematology-oncological services which includes therapeutic plasma exchange, stem cell apheresis and different blood cell apheresis.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>

        <div className="article-container">
            <Card className="article-card">
                <div className="article-content">
                <Card.Img variant="top" src={img2} style={{ width: '380px', height: '280px'}}/>
                    <Card.Body>
                        <h4><Badge bg="primary">APOLLO HOSPITALS DHAKA – BEST BUILDING OF A BRAND FINALIST– 2017</Badge></h4>
                        <Card.Text>
                        Apollo Hospitals Dhaka is the only JCI Accredited 450-bed multi-disciplinary super-specialty tertiary care hospital in Bangladesh, providing health care with the latest medical, surgical and diagnostic facilities.<br />

                        <br />To build a brand that represents ‘Patient Centric’, Apollo Hospitals Dhaka conducted a market and found that individuals appreciated and respected learning activities. To identify itself as THE neighbourhood hospital, Apollo Hospitals Dhaka took up a community support program to educate and enlighten the residents of the area in its vicinity with first aid and basic life support training.<br />

                        <br/>The goal of the initiative was to educate more community participants so that they are confident enough to attempt cardiopulmonary resuscitation (CPR) to improve survival rates of people experiencing cardiac arrest or heart attack.<br />
                        <br />So far 1,100 people have been trained as first responders. The project is considered as a social activation and brand enhancing initiative as a part of Corporate Social Responsibility of Apollo Hospitals Dhaka to the community.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>

        <div className="article-container">
            <Card className="article-card">
                <div className="article-content">
                <Card.Img variant="top" src={img3} style={{ width: '380px', height: '280px'}}/>
                    <Card.Body>
                        <h4><Badge bg="primary">Liver Transplant</Badge></h4>
                        <Card.Text>
                        A liver transplant is a surgery that removes a liver that no longer functions properly (liver failure) and replaces it with a healthy liver from a deceased donor or a portion of a healthy liver from a living donor.<br />

                        <br />Your liver is your largest internal organ and performs several critical functions, including:

                        1.Processing nutrients, medications and hormones
                        2.Producing bile, which helps the body absorb fats, cholesterol and fat-soluble vitamins
                        3.Making proteins that help the blood clot
                        4.Removing bacteria and toxins from the blood
                        5.Preventing infection and regulating immune responses
                        Liver transplant is usually reserved as a treatment option for people who have significant complications due to end-stage chronic liver disease. Liver transplant may also be a treatment option in rare cases of sudden failure of a previously healthy liver.<br />

                        <br/>The number of people waiting for a liver transplant greatly exceeds the number of available deceased-donor livers.

                        Receiving a portion of a liver from a living donor is an alternative to waiting for a deceased-donor liver to become available. Living-donor liver transplant is possible because the human liver regenerates and returns to its normal size shortly after surgical removal of part of the organ.<br />
                        <br />In 2018, about 8,200 liver transplants were performed in the U.S. among adults and children. Of those, about 390 involved livers from living donors. At the same time, about 12,800 people were registered on the waiting list for a liver transplant.
                        </Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
        </div>
    );
};

export default Article;

