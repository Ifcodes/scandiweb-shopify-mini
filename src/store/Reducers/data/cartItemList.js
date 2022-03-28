import image1 from '../../../public/images/product_img_1.png'
import image3 from '../../../public/images/product_img_3.png'
import image4 from '../../../public/images/product_img_4.png'
import image2 from '../../../public/images/product_img_2.png'
import { GenerateId } from "../../../utils/generateId"

const generatedId = new GenerateId()

export const cartItemList = [
  {
    productId:  generatedId.generatedId(),
    productImgUrl: image1,
    sideImages: [
      image1,
      image1,
      image1
    ],
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    selectedOptions: ['s', 'm'],
    quantity: 1,
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image1,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    selectedOptions: ['s', 'm'],
    quantity: 1,
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image2,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    selectedOptions: ['s', 'm'],
    quantity: 1,
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image3,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    selectedOptions: ['s', 'm'],
    quantity: 1,
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image4,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    selectedOptions: ['s', 'm'],
    quantity: 1,
  },
  {
    productId: generatedId.generatedId(),
    productImgUrl: image4,
    brandName: 'Apollo',
    otherName: 'Running Short',
    price: 50.00,
    total: 50.00,
    currency: '$',
    selectedOptions: ['s', 'm'],
    quantity: 1,
  },
]