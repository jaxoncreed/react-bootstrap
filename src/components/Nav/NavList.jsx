import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../../redux/actionCreators'; 

const NavListElement = React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div className="nav-list">
        {Object.keys(this.props.objects).map((objectKey) => {
        	return (
            <div 
              className="nav-list-item" 
              key={'nav-list-item-' + objectKey}
              onClick={() => this.props.openObject(objectKey)}>
              {this.props.objects[objectKey].name} ({this.props.objects[objectKey].type})
            </div>
          );
        })}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    objects: state.objects
  };
}

export const NavList = connect(mapStateToProps, actionCreators)(NavListElement);