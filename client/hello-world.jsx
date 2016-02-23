//contents of hello-world.jsx
import React from 'react';
import SampleForm from './sample-form.jsx';

export const HelloWorld = ({world}) => (
  <div>
    <div className="hello-world">
      Hello {world}
    </div>
    <SampleForm />
  </div>
);
