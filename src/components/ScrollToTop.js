import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);

      if (this.props.currentMenuState === 'isOpen') {
      	this.props.menuStateHandler();
      }
      else {
      	
      }
      
    }
  }

  render(props) {
    return (
    	<div>
    		{this.props.children}

    	</div>
    )
  }
}

export default withRouter(ScrollToTop);