import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import objectViews from './objectViews';

const ObjectViewerElement = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    if (this.props.openObject) {
      const Viewer = objectViews(this.props.openObject.type);
      return (
        <div className="object-viewer">
        	<Viewer object={this.props.openObject} />
          <pre>{this.props.state}</pre>
        </div>
      );
    } else {
      return (
        <div className="no-object-viewer">
          <p>Please select an object from the panel on the right to view</p>
        </div>
      )
    }
  }
});

function mapStateToProps(state) {
  return {
    openObject: state.openObjects[state.objectFocus],
    state: JSON.stringify(state, null, "  ")
  }
}

export const ObjectViewer = connect(mapStateToProps)(ObjectViewerElement);