import { Query, Field } from '@tilework/opus';

// fields

const productFields = 'id,name,inStock,gallery,description,category,brand'.split(',')
const attributeFileds = 'id,name,type'.split(',')


//Queries

export const ALL_CURRENCY = new Query('currencies', true)
    .addFieldList(['symbol', 'label'])


export const CATEGORIES = new Query('categories', true)
    .addFieldList(['name'])

export const ALL_CATEGORY = new Query('categories', true)
    .addFieldList(['name'])
    .addField(new Field('products', true)
        .addFieldList(productFields)
    )


export const CATEGORY_QUERY = (title) => new Query('category')
    .addArgument('input', 'CategoryInput', { title })
    .addFieldList(['name'])
    .addField(new Field('products', true)
        .addFieldList(productFields)
        .addField(new Field('attributes')
            .addFieldList(attributeFileds)
            .addField(new Field('items', true)
                .addFieldList(['id', 'displayValue', 'value'])
            )
        )
        .addField(new Field('prices')
            .addFieldList(['amount'])
            .addField(new Field('currency')
                .addFieldList(['label', 'symbol'])
            )
        )
    )



export const PRODUCT_QUERY = (productId) => new Query('product')
    .addArgument('id', 'String!', productId)
    .addFieldList(productFields)
    .addField(new Field('attributes')
        .addFieldList(attributeFileds)
        .addField(new Field('items', true)
            .addFieldList(['id', 'displayValue', 'value'])
        )
    )
    .addField(new Field('prices')
    .addFieldList(['amount'])
    .addField(new Field('currency')
        .addFieldList(['label', 'symbol'])
    )
)

