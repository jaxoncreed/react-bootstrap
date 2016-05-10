import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import objectViews from './objectViews';
import * as actionCreators from '../../redux/actionCreators'; 

const ObjectViewerElement = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    if (this.props.objectInfo) {
      const Viewer = objectViews(this.props.objectInfo.type);
      return (
        <div className="object-viewer">
        	<Viewer 
            editInfo={this.props.editInfo}
            objectInfo={this.props.objectInfo}
            updateEdit={this.props.updateEdit.bind(null, this.props.objectFocus)}
            saveEdit={this.props.saveEdit.bind(null, this.props.objectFocus)}
            discardEdit={this.props.discardEdit.bind(null, this.props.objectFocus)} />
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
  const currentFocusObject = state.openObjects[state.objectFocus];
  const currentFocusObjectId = (currentFocusObject) ? currentFocusObject.id : null;
  const objectInfo = (currentFocusObjectId) ? state.objects[currentFocusObjectId] : null;
  const editInfo = (currentFocusObject) ? currentFocusObject.editInfo : null;
  return {
    objectInfo: objectInfo,
    editInfo: editInfo,
    objectFocus: state.objectFocus,
  }
}

export const ObjectViewer = connect(mapStateToProps, actionCreators)(ObjectViewerElement);