import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],


  render: function() {
    return (
      <div className="app">
        <h1>The Jank, unfinished demo!</h1>
      </div>
    );
  }
});