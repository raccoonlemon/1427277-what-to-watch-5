import React from "react";
import PropTypes from 'prop-types';

export class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {activeTab: props.initialTab};
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  render() {
    const {renderTabList} = this.props;

    return (
      <React.Fragment>
        {renderTabList(this.state.activeTab, this.handleTabChange)}
        {this.props.children.map((child)=>{
          if (child.key === this.state.activeTab) {
            return child;
          }
          return undefined;
        })}
      </React.Fragment>);
  }

  handleTabChange(evt) {
    evt.preventDefault();

    const activeTab = evt.target.dataset.tab;
    if (activeTab !== this.setState.activeTab) {
      this.setState({activeTab});
    }
  }
}

Tabs.propTypes = {
  renderTabList: PropTypes.func.isRequired,
  initialTab: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
