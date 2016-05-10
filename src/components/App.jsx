import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Nav from './nav/Nav.jsx';
import View from './view/View.jsx'

export default React.createClass({
  mixins: [PureRenderMixin],


  render: function() {
    return (
      <div className="app">
        <Nav />
        <View />
      </div>
    );
  }
});