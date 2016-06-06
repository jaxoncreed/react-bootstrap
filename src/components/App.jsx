import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({

  render: function() {
    return (
      <div className="app">
        <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
});
