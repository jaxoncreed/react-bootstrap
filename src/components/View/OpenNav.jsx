import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../../redux/actionCreators'; 

const OpenNavElement = React.createClass({
  mixins: [PureRenderMixin],


  render: function() {
    return (
      <div className="open-nav shadowed">
      	{this.props.openObjects.map((object, index) => {
          return (
            <div
              className={"open-nav-item " + ((this.props.focus === index) ? "open-nav-item-focus" : "")}
              key={"open-nav-item-" + index}>
              <div className="open-nav-item-click"
                onClick={() => this.props.openObject(object.id)}></div>
              <span className="open-nav-item-text">
                {this.props.allObjects[object.id].name} ({this.props.allObjects[object.id].type})
              </span>
              <span className="open-nav-item-exit"
                onClick={() => this.props.closeObject(index)}>
                X
              </span>
            </div>
          )
        })}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    openObjects: state.openObjects,
    allObjects: state.objects,
    focus: state.objectFocus
  };
}

export const OpenNav = connect(mapStateToProps, actionCreators)(OpenNavElement);