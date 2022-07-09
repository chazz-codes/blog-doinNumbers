import Head from "next/head";
import { GraphQLClient } from "graphql-request";
import { getGraphCMS } from "../../lib/graphcms";
import Layout from "../../components/layout";
import Link from "next/link";



const graphcms = new GraphQLClient(
    'https://api-us-east-1.graphcms.com/v2/ckyn95gp10hl001w5483vesiu/master'
);

export async function getStaticPaths() {
    const products = await (await getGraphCMS()).props.products

    return {
        paths: products.map(({ productSlug }) => ({
            params: { productSlug }
        })),
        fallback: false
    }
}

export async function getStaticProps( context ) {

    const { products } = await graphcms.request(
        `
        query ProductBySlug($productSlug: String!) {
            products(where: {productSlug: $productSlug}) {
              id
              image {
                height
                url
                width
              }
              name
              productSlug
              price
              description
            }
          }
        `, {
            productSlug: context.params.productSlug
        }
    )

    return {
        props: {
            products
        }
    }


}



export default function Product({ products }){


return (
    <Layout>
        <h1> # {products[0].name} </h1>
        {products[0].price}
        <button className="snipcart-add-item"
                  data-item-id={productSlug}
                  data-item-url={`/shop/${productSlug}`}
                  data-item-price={price}
                  data-item-description={description}
                  data-item-image={image[0].url}
                  data-item-name={name}
                  data-item-custom1-name="Size"
                  data-item-custom1-options="Small|Medium|Large|XL|XXL"
                  data-item-custom1-placeholder="Select Size"
                  data-item-stackable="never"
                  data-item-weight="173"
                 
                  >
                  Add to cart
                </button>
    </Layout>
)
    
}