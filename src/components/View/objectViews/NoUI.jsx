import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {cloneDeep} from 'lodash';
import Textarea from 'react-textarea-autosize';

export default React.createClass({
  mixins: [PureRenderMixin],

  beginEdit: function() {
    var editInfo = cloneDeep(this.props.objectInfo);
    editInfo.data = JSON.stringify(this.props.objectInfo.data, null, "  ");
    this.props.updateEdit(editInfo);
  },

  updateEdit: function(route, content) {
    var newEditInfo = cloneDeep(this.props.editInfo);
    newEditInfo[route] = content;
    this.props.updateEdit(newEditInfo);
  },

  saveEdit: function() {
    var toSave = cloneDeep(this.props.editInfo);
    try {
      toSave.data = JSON.parse(toSave.data);
    } catch(e) {
      alert("The provided data is not valid JSON");
    }
    this.props.saveEdit(toSave);
  },

  discardEdit: function() {
    this.props.discardEdit();
  },

  render: function() {
    return (
      <div className="viewer shadowed">
        <div className="viewer-header">
          <div className="viewer-main-info">
            <p>Name:</p>
            {(() => {
              if (this.props.editInfo) {
                return(
                  <input type="text" value={this.props.editInfo.name} onChange={(e) => this.updateEdit("name", e.target.value)} />
                )
              } else {
                return (<h2>{this.props.objectInfo.name}</h2>)
              }
            })()}
          </div>
          <div className="viewer-main-info">
            <p>Type:</p>
            {(() => {
              if (this.props.editInfo) {
                return(
                  <input type="text" value={this.props.editInfo.type} onChange={(e) => this.updateEdit("type", e.target.value)} />
                )
              } else {
                return (<h2>{this.props.objectInfo.type}</h2>)
              }
            })()}
          </div>
          <div className="viewer-main-info">
            <p>ID:</p>
            <h2>{this.props.objectInfo.id}</h2>
          </div>
          {(() => {
            if (this.props.editInfo) {
              return(
                <div>
                  <button 
                    className="editButton shadowed" 
                    onClick={this.discardEdit}>
                    Discard
                  </button>
                  <button 
                    className="editButton shadowed" 
                    onClick={this.saveEdit}>
                    Save
                  </button>
                </div>
              )
            } else {
              return (
                <div>
                  <button 
                    className="editButton shadowed" 
                    onClick={this.beginEdit}>
                    Edit
                  </button>
                </div>
              )
            }
          })()}
        </div>
        {(() => {
          if (this.props.editInfo) {
            return (
              <Textarea value={this.props.editInfo.data} onChange={(e) => this.updateEdit("data", e.target.value)} />
            )
          } else {
            return (
              <pre className="no-ui-content">{JSON.stringify(this.props.objectInfo.data, null, '  ')}</pre>
            )
          }
        })()}
      </div>
    );
  }
});