//contents of router.jsx
import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './layout.jsx';
import {HelloWorld} from './hello-world.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
    content: (<HelloWorld world="World!" />),
    });
  }
});
