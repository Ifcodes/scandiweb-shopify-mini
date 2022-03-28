import { TabWrapper } from "./TabHeaderStyle";
import {Component} from 'react'

class TabHeader extends Component {
  state = {
    isSelected: 0
  }

  handleSelectedTab = (tabIndex) => {
    this.props.tabs.map((tab, index) => {
      if(tabIndex === index) this.setState({
        isSelected : tabIndex
      })

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
              className={`${this.state.isSelected === index && 'activeTab'}`}
              onClick={() => this.handleSelectedTab(index)}
            >
              <span>{tab}</span>
            </div>
          ))}
        </TabWrapper>
      </>
    );
  }
}
 
export default TabHeader;