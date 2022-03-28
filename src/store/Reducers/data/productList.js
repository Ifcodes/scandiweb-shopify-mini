import image2 from '../../../public/images/product_img_2.png'
import image1 from '../../../public/images/product_img_1.png'
import image3 from '../../../public/images/product_img_3.png'
import image4 from '../../../public/images/product_img_4.png'
import mainImage from "../../../public/images/main_img.png"
import { GenerateId } from '../../../utils/generateId'

const generatedId = new GenerateId()

export const productList = [
  {
    productId:  generatedId.generatedId(),
    productImgUrl: image1,
    sideImages: [
      image1,
      image1,
      image1
    ],
    availableOptions: [
      'xs', 's', 'm', 'l'
    ],
    quantitiInStock: 15,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    description: "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image2,
    sideImages: [
      image2,
      image2,
      image2
    ],
    largeImage: mainImage,
    availableOptions: [
      'xs', 's', 'm', 'l'
    ],
    quantitiInStock: 15,
    brandName: 'Nike',
    otherName: 'Long sweaters',
    price: 50.00,
    total: 50.00,
    currency: '$',
    description: "The stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image3,
    sideImages: [
      image3,
      image3,
      image3
    ],
    largeImage: mainImage,
    availableOptions: [
      'xs', 's', 'm', 'l'
    ],
    quantitiInStock: 15,
    brandName: 'Apollo',
    otherName: 'Long Sweatshirts',
    price: 50.00,
    total: 50.00,
    currency: '$',
    description: "when stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image4,
    sideImages: [
      image4,
      image4,
      image4
    ],
    largeImage: mainImage,
    availableOptions: [
      'xs', 's', 'm', 'l'
    ],
    quantitiInStock: 15,
    brandName: 'Apollo',
    otherName: 'Fashion shirt',
    price: 50.00,
    total: 50.00,
    currency: '$',
    description: "Good stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image1,
    sideImages: [
      image1,
      image1,
      image1
    ],
    largeImage: mainImage,
    availableOptions: [
      'xs', 's', 'm', 'l'
    ],
    quantitiInStock: 15,
    brandName: 'Apollo',
    otherName: 'Running pants',
    price: 50.00,
    total: 50.00,
    currency: '$',
    description: "Basic stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image2,
    sideImages: [
      image2,
      image2,
      image2
    ],
    largeImage: mainImage,
    availableOptions: [
      'xs', 's', 'm', 'l'
    ],
    quantitiInStock: 15,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    description: "Searching for stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands."
  },
]