import { PdpWrapper } from "./productDescStyles";
import { Component } from "react";
import MainLayout from "../../templates/MainLayout/MainLayout";
import Sizes from "../../atoms/SizeAttributeIcons";
import Button from "../../atoms/Button";
import { connect } from "react-redux";
import allActions from "../../store/Actions";
import { GenerateId } from "../../utils/generateId"

const generatedId = new GenerateId()

class ProductDescription extends Component {
  state = { 
    selected: 0,
  } 

  handleSelect = (indx) => {
    this.state.selectedOptions.map((size, index) => {
      if(indx === index) this.setState({selected: indx})

      return size
    })
  }

  render() { 
    const product = this.props.product

    const addToCart = (data) => {
      console.log(data)
      this.props.dispatch(allActions.addToCart(data))
    }
    return (
      <MainLayout>
        <PdpWrapper>
          <div className="side-img-cont">
            {product.sideImages.map((img, index) => (
              <img src={img} alt={`img-${index}`} className='side-img' key={`key-${index}`}/>
            ))}
          </div>
          
          <div className="pdp-cont">
            <img 
              src={product.productImgUrl} alt="main-img" 
              className="pdp-main-img"
            />
            <div className="desc-cont">
              <div>
                <h2>{product.brandName}</h2>
                <h3>{product.otherName}</h3>
              </div>
              <div className="size-cont">
                <span>SIZE:</span>
                <div className="sizes">
                  {product.availbleOptions.map((size, index) => (
                    <Sizes
                      key={`key-${index}`} 
                      size={size}
                      dropdown={false}
                      selectedIndex={index}
                      selected={this.state.selected}
                      onSelect={() => this.handleSelect(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="size-cont">
                <span>PRICE:</span>
                <p className="price">
                  {product.currency}{product.price}
                </p>
              </div>
              <div className="atc-btn-cont">
                <div onClick={() => addToCart({
                  productDesc: product,
                  selectedSizes: ['s', 'm'],
                  quantity: 1,
                })}>
                  <Button 
                    primary={true}
                    text='ADD TO CART'
                    width='18.25rem'
                  />
                </div>
                <p className="description">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </PdpWrapper>
      </MainLayout>
    );
  }
}

function mapStateToProps(state){
  const product = state.productDesc
  return{
    product
  }
}
 
export default connect(mapStateToProps)(ProductDescription);