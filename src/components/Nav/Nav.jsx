import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { NavList } from './NavList.jsx'

export default React.createClass({
  mixins: [PureRenderMixin],


  render: function() {
    return (
      <div className="nav shadowed">
        <NavList />
      </div>
    );
  }
});