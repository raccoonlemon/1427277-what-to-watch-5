import React, {PureComponent} from "react";

const withActiveItem = (Component)=>{

  class WithActiveItem extends PureComponent {

    constructor(props) {
      super(props);

      this.state = {
        activeItemId: null
      };

      this.setActiveItem = this.setActiveItem.bind(this);
      this.removeActiveItem = this.removeActiveItem.bind(this);

    }

    setActiveItem(id) {
      this.setState({activeItemId: id});
    }

    removeActiveItem() {
      this.setState({activeItemId: null});
    }

    render() {
      const {activeItemId} = this.state;

      return (
        <Component
          {...this.props}
          activeItemId = {activeItemId}
          setActiveItem={this.setActiveItem}
          removeActiveItem={this.removeActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
