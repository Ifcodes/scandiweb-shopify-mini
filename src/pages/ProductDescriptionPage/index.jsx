import { PdpWrapper } from "./productDescStyles";
import { Component } from "react";
import MainLayout from "../../templates/MainLayout/MainLayout";
import parse from "html-react-parser"
import Sizes from "../../atoms/SizeAttributeIcons";
import Button from "../../atoms/Button";
import { connect } from "react-redux";
import allActions from "../../store/Actions";
import opusClient from '../../Opus'
import { PRODUCT_QUERY } from "../../Opus/queries";
import { useParams } from "react-router";

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      selected: 0,
      product: {
        gallery:[],
        brand: '',
        name: '',
        attributes: [],
        description: ''
      },
      selectedImage: 0,
      selectedId: '',
    } 
  }

  async componentDidMount(){
    try {

      const {id} = this.props.match.params
      console.log(id)

      const product = await opusClient.post(PRODUCT_QUERY(id))

      console.log(product)
      this.setState({product: product.product})
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
    
    const addToCart = (data) => {
      console.log(data)
      this.props.dispatch(allActions.addToCart(data))
    }

    const smallImages = this.state.product.gallery
      ? this.state.product.gallery.length > 3
        ? this.state.product.gallery.slice(0, 3)
        : this.state.product.gallery
      : [];

    const largeImage = this.state.product.gallery
    ? this.state.product.gallery[this.state.selectedImage]
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
            <div className="pdp-main-img">
              <img 
                src={largeImage} alt="main-img"  
              />
            </div>
            <div className="desc-cont">
              <div>
                <h2>{this.state.product.brand}</h2>
                <h3>{this.state.product.name}</h3>
              </div>
              <div className="size-cont">
                {this.state.product.attributes.map((attribute, index) => (
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
                  productDesc: this.state.product,
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
                  {parse(this.state.product.description)}
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