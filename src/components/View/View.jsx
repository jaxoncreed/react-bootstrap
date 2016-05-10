import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { OpenNav } from './OpenNav.jsx';
import { ObjectViewer } from './ObjectViewer.jsx'

export default React.createClass({
  mixins: [PureRenderMixin],

  render: function() {
    return (
      <div className="view">
        <OpenNav />
        <ObjectViewer />
      </div>
    );
  }
});