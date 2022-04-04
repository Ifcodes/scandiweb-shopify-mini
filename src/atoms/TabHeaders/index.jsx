import { TabWrapper } from "./TabHeaderStyle";
import {Component} from 'react'
import opusClient from '../../Opus'
import { CATEGORIES } from "../../Opus/queries";
import allActions from "../../store/Actions";
import { connect } from "react-redux";

class TabHeader extends Component {
  state = {
    activeTab: ''
  }

  handleSelectedTab = (tabName) => {
    this.props.tabs.map((tab, index) => {
      if(tab.name === tabName){
        this.props.dispatch(allActions.setSelectedCategory(tab.name))
      }

      return tab
    })
  }

  render() { 
    return (
      <>
        <TabWrapper isActive={this.state.isSelected}>
          {this.props.tabs.map((tab, index) => (
            <div
              key={`tab-key-${index}`}
              className={`${this.props.activeTab === tab.name && 'activeTab'}`}
              onClick={() => this.handleSelectedTab(tab.name)}
            >
              <span>{tab.name}</span>
            </div>
          ))}
        </TabWrapper>
      </>
    );
  }
}
 
function mapStateToProps(state) {
  const activeTab = state.selectCategory
  return{
    activeTab
  }
}
export default connect(mapStateToProps)(TabHeader);