import { Paragraph } from '@octopusthink/nautilus';
import React from 'react';

import Markdown from 'components/Markdown';
import Panel from 'components/Panel';
import Testimonial from 'components/Testimonial';
import TestimonialData from 'data/testimonials.yaml';

// Get a random integer between two values.
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
};

const TestimonialCarousel = () => {
  // Get a random testimonial.
  const testimonialIndex = getRandomInt(0, TestimonialData.length);
  const testimonial = TestimonialData[testimonialIndex];

  if (!testimonial) {
    return null;
  }

  const { company, name, photo, quote, title, url } = testimonial;

  return (
    <React.Fragment>
      <Panel dark>
        <Testimonial name={name} photo={photo} title={title} company={company} url={url}>
          <Markdown
            components={{
              // eslint-disable-next-line react/jsx-props-no-spreading
              p: (props) => <Paragraph large inverse {...props} />,
            }}
          >
            {quote}
          </Markdown>
        </Testimonial>
      </Panel>
    </React.Fragment>
  );
};

export default TestimonialCarousel;
