import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div className="viewer shadowed">
        <div className="viewer-header">
          <div className="viewer-main-info">
            <p>Name:</p>
            <h2>{this.props.object.name}</h2>
          </div>
          <div className="viewer-main-info">
            <p>Type:</p>
            <h2>{this.props.object.type}</h2>
          </div>
          <div className="viewer-main-info">
            <p>ID:</p>
            <h2>{this.props.object.id}</h2>
          </div>
          <button className="editButton shadowed">Edit</button>
        </div>
      	<pre className="no-ui-content">{JSON.stringify(this.props.object.data, null, '  ')}</pre>
      </div>
    );
  }
});