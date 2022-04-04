import { PdpWrapper } from "./productDescStyles";
import { Component } from "react";
import MainLayout from "../../templates/MainLayout/MainLayout";
import parse from "html-react-parser"
import Sizes from "../../atoms/SizeAttributeIcons";
import Button from "../../atoms/Button";
import { connect } from "react-redux";
import allActions from "../../store/Actions";
import { GenerateId } from "../../utils/generateId"
import opusClient from '../../Opus'
import { PRODUCT_QUERY } from "../../Opus/queries";

const generatedId = new GenerateId()

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      selected: 0,
      product: {},
      selectedImage: 0
    } 
  }

  async componentDidMount(){
    try {
      
      const productId = this.props.selectedProduct.product.id;
      console.log("hello", productId)

      const product = await opusClient.post(PRODUCT_QUERY(productId))
      console.log(product)
      this.setState({product})
    } catch (error) {
      console.log(error)
    }
  }

  handleSelect = (indx) => {
    this.state.selectedOptions.map((size, index) => {
      if(indx === index) this.setState({selected: indx})

      return size
    })
  }

  handleSelectedImg = (index) => {
    this.setState({selectedImage: index})
  }

  render() { 
    const product = this.props.selectedProduct.product
    console.log("selectedP:", product)
    const addToCart = (data) => {
      console.log(data)
      this.props.dispatch(allActions.addToCart(data))
    }

    const smallImages = product.gallery
      ? product.gallery.length > 3
        ? product.gallery.slice(0, 3)
        : product.gallery
      : [];

    const largeImage = product.gallery
    ? product.gallery[this.state.selectedImage]
    : "";

    return (
      <MainLayout>
        <PdpWrapper>
          <div className="side-img-cont">
            {smallImages.map((img, index) => (
              <img 
                key={`key-${index}`}
                src={img} 
                alt={`img-${index}`} className='side-img' 
                onClick={() => this.handleSelectedImg(index)}
              />
            ))}
          </div>
          
          <div className="pdp-cont">
            <img 
              src={largeImage} alt="main-img" 
              className="pdp-main-img"
            />
            <div className="desc-cont">
              <div>
                <h2>{product.brand}</h2>
                <h3>{product.name}</h3>
              </div>
              <div className="size-cont">
                {product.attributes.map((attribute, index) => (
                  <div 
                    key={`attribute-key-${index}`}
                    style={{marginTop: '1rem'}}
                  >
                    <span>{attribute.name}:</span>
                    <div className="sizes">
                      {attribute.type === 'text' ?attribute.items.map((size, index) => (
                        <Sizes
                          key={`key-${index}`} 
                          size={size.value}
                          dropdown={false}
                          selectedIndex={index}
                          selected={this.state.selected}
                          onSelect={() => this.handleSelect(index)}
                        />
                      ))
                      : attribute.items.map((item, index) => (
                        <div
                          key={`item-key-${index}`}
                          style={{
                            backgroundColor: item.value,
                            width: "8rem",
                            height: "2rem",
                            marginRight: "1rem",
                          }}
                        >
                        </div>
                      ))
                      }
                    </div>
                  </div>
                ))}
                
              </div>
              {/* <div className="size-cont">
                <span>PRICE:</span>
                <p className="price">
                  {product.prices.currency.label}{product.prices.amount}
                </p>
                    </div> */}
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
                <div className="description">
                  {parse(product.description)}
                </div>
              </div>  
            </div>
          </div>
        </PdpWrapper>
      </MainLayout>
    );
  }
}

function mapStateToProps(state){
  const selectedProduct = state.productDesc
  return{
    selectedProduct
  }
}
 
export default connect(mapStateToProps)(ProductDescription);