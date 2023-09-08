import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import img1 from '../../images/blog/1.png';
import img2 from '../../images/blog/2.png';
import img3 from '../../images/blog/3.png';

const Blog = () => {
  const cardStyle = {
    margin: '20px',
  };

  return (
    <>
      {/* First Blog Post */}
      <Card style={cardStyle}>
        <Card.Body>
          <h4>The Importance of Regular Exercise for Heart Health</h4>
          <div>
            <h5>
              <Badge bg="secondary">The Benefits of Exercise for Your Heart:</Badge>
            </h5>
            
            <Card.Img
                         variant="top"
                        src={img1}
                         style={{ width: '180px', height: '180px', float: 'right' }}
            />
            <p>Regular physical activity offers numerous benefits for your heart:</p>
            <ol>
                <li>Improved Cardiovascular Health: Exercise helps strengthen your heart muscle...</li>
                <li>Lower Blood Pressure: Physical activity can help lower high blood pressure...</li>
                <li>Weight Management: Maintaining a healthy weight is crucial for heart health...</li>
                <li>Reduced Cholesterol Levels: Regular exercise can raise HDL (good) cholesterol levels...</li>
            </ol>
          </div>
          <div>
            <h6>
              <Badge bg="secondary">How Much Exercise Do You Need?</Badge>
            </h6>
            <p>
              The American Heart Association recommends at least 150 minutes of moderate-intensity aerobic exercise or 75 minutes of vigorous-intensity aerobic exercise per week. This can be broken down into 30-minute sessions, five days a week. Additionally, aim to include muscle-strengthening activities on two or more days per week.
            </p>
          </div>
        </Card.Body>
      </Card>

      {/* Second Blog Post */}
      <Card style={cardStyle}>
        <Card.Body>
          <h4>The Power of Sleep: How Quality Sleep Impacts Your Health</h4>
          <div>
            <h5>
              <Badge bg="primary">The Importance of Sleep:</Badge>
            </h5>
            <Card.Img
                variant="top"
                src={img3}
                style={{ width: '180px', height: '180px', float:'right', }}
            />
            <p>Quality sleep is essential for several reasons: </p>
             <ol>
                <li>Physical Health: Sleep plays a crucial role in repairing and rejuvenating the body...</li>
                <li>Mental Health: A lack of sleep can contribute to mood disorders such as depression and anxiety...</li>
                <li>Cognitive Function: Sleep is essential for memory consolidation and learning...</li>
                <li>Weight Management: Poor sleep patterns can disrupt hormones that control appetite...</li>
              </ol>
          </div>
          <div>
            <h6>
              <Badge bg="primary">How Much Sleep Do You Need?</Badge>
            </h6>
            <p>
              The ideal amount of sleep can vary from person to person, but generally, adults should aim for 7-9 hours of quality sleep per night. Children and teenagers typically require more sleep, often in the range of 8-10 hours.
            </p>
          </div>
        </Card.Body>
      </Card>

      {/* Third Blog Post */}
      <Card style={cardStyle}>
        <Card.Body>
          <h4>Understanding the Basics of Diabetes</h4>
          <div>
            <h5>
              <Badge bg="success">What is Diabetes?</Badge>
            </h5>
            <Card.Img
                variant="top"
                src={img2}
                style={{ width: '180px', height: '180px', float: 'left' }}
            />
            <p>
              Diabetes is a metabolic disorder characterized by high blood sugar levels (glucose) due to either inadequate insulin production or the body's inability to effectively use insulin. Insulin is a hormone produced by the pancreas that helps regulate blood sugar levels.
            </p>
          </div>
          <div>
            <h6>
              <Badge bg="success">Types of Diabetes:</Badge>
            </h6>
            <p>
              <strong>Type 1 Diabetes:</strong> This is an autoimmune condition where the immune system attacks and destroys the insulin-producing cells in the pancreas. People with Type 1 diabetes require lifelong insulin therapy.
              <br />
              <strong>Type 2 Diabetes:</strong> This is the most common form of diabetes and is often linked to lifestyle factors such as poor diet, lack of exercise, and obesity. In Type 2 diabetes, the body becomes resistant to insulin, and the pancreas may not produce enough insulin to maintain normal blood sugar levels.
            </p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Blog;