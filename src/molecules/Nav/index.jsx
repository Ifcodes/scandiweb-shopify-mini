import {Component, createRef} from 'react'
import ArrowDown from '../../atoms/Vectors/ArrowDown';
import ArrowUp from '../../atoms/Vectors/ArrowUp';
import EmptyCartIcon from '../../atoms/Vectors/EmptyCartIcon';
import TabHeader from '../../atoms/TabHeaders';
import Logo from '../../atoms/Vectors/Logo';
import { NavWrapper } from './navStyles'
import Dropdown from '../../atoms/Dropdown';

class Nav extends Component {
  constructor(){
    super()
    this.clickRef = createRef()
  }

  state = {
    tabs: ["WOMEN", "MEN", "KIDS"],
    currencySymbols: ["$", "€", "¥"],
    currencyInitial: ["USD", "EUR", "JPY"],
    showCurrency: false,
  }

  setShowCurrency = (val) => {
    this.setState({showCurrency: val})
  }

  render() { 
    return ( 
      <NavWrapper>
        <TabHeader tabs={this.state.tabs} />
        <Logo />
        <div className='attribute-cont'>
          <span>$</span>
          {this.state.showCurrency 
            ? (
            <div onClick={() => this.setShowCurrency(false)} className='arrow'>      
              <ArrowUp /> 
            </div>
            ) 
            :(
              <div onClick={() => this.setShowCurrency(true)} className='arrow'>      
                <ArrowDown /> 
              </div>
            )
          }
          <div onClick={this.props.showModal} className='cart-cont'>
            <EmptyCartIcon />
            {this.props.totalCartItem.length > 0 
              && 
              <span className='cart-item-number'> 
                {this.props.totalCartItem.length}
              </span>
            }
          </div>
        </div>
        <Dropdown 
          currencySymbols={this.state.currencySymbols}
          currencyInitial={this.state.currencyInitial}
          showDropdown={this.state.showCurrency}
          clickedRef={this.clickRef}
          setShowCurrency={this.setShowCurrency}
        />
      </NavWrapper>
     );
  }
}
 
export default Nav;