import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],


  render: function() {
    return (
      <div className="app">
        <h1>Good Afternoon. This is my App</h1>
      </div>
    );
  }
});
