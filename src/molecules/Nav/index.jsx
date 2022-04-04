import {Component, createRef} from 'react'
import ArrowDown from '../../atoms/Vectors/ArrowDown';
import ArrowUp from '../../atoms/Vectors/ArrowUp';
import EmptyCartIcon from '../../atoms/Vectors/EmptyCartIcon';
import TabHeader from '../../atoms/TabHeaders';
import Logo from '../../atoms/Vectors/Logo';
import { NavWrapper } from './navStyles'
import Dropdown from '../../atoms/Dropdown';
import opusClient from '../../Opus'
import { ALL_CURRENCY, CATEGORIES } from "../../Opus/queries";
import allActions from "../../store/Actions";
import { connect } from 'react-redux';

class Nav extends Component {
  constructor(){
    super()
    this.clickRef = createRef()
  }

  state = {
    currencySymbols: [],
    currencyInitial: [],
    showCurrency: false,
    selectedCurrency: ''
  }

  async componentDidMount(){
    const categoryList = await opusClient.post(CATEGORIES)

    this.props.dispatch(allActions.setCategories(categoryList.categories))

    const currency = await opusClient.post(ALL_CURRENCY)

    console.log(currency.currencies)

    const currencySymbols = currency.currencies.map((currency) => currency.symbol)

    const currencyInitial = currency.currencies.map((currency) => currency.label)

    this.setState({
      currencyInitial,
      currencySymbols,
    })
  }


  setShowCurrency = (val) => {
    this.setState({showCurrency: val})
  }

  selectCurrency = (sym) => {
    const selectedCurrency = this.state.currencySymbols.find(c => c === sym)
    
    this.props.dispatch(allActions.setSelectedCurrency(selectedCurrency))
  }

  render() { 
    const tabs = this.props.tabs
    const selectedCurrency = this.props.currency
    return ( 
      <NavWrapper>
        <TabHeader tabs={tabs} />
        <Logo />
        <div className='attribute-cont'>
          <span>{selectedCurrency}</span>
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
          onSelect={this.selectCurrency}
        />
      </NavWrapper>
     );
  }
}

function mapStateToProps(state){
  const tabs = state.categoryNames
  const currency = state.currencyReducer
  return{
    tabs,
    currency
  }
}

export default connect(mapStateToProps)(Nav);