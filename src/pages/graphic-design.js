import dynamic from "next/dynamic";
import { motion } from "framer-motion";
//import Cards from "@/components/Cards";

const Cards = dynamic(() => import("@/components/Cards"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function design({ posts }) {
  /*   console.log(posts.atribites);
   */

  return (
    <>
      <motion.div
        className="w-full min-h-screen h-auto text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="max-w-screen-xl w-full min-h-screen h-auto mx-auto p-2 flex justify-center pt-28 ">
          <div className="glass rounded-3xl w-full h-full">
            <h2 className="uppercase text-xl my-5">
              Welcome to Graphic Design Portfolio page
            </h2>
            <div>
              <Cards
                className="flex flex-row flex-wrap"
                posts={posts}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticProps() {
  const API = process.env.SERVER_API;

  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query NewQuery {
          products (where: {category: "Design"})  {
            nodes {
              galleryImages(first: 50) {
                nodes {
                  mediaItemUrl
                }
              }
              image {
                sourceUrl
              }
              slug
              title
              shortDescription
              description
              attributes {
                nodes {
                  name
                  options
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();

  const sortedPosts = json.data.products.nodes.sort((a, b) => {
    const orderA = getAttributeValue(a, "Order") || 0;
    const orderB = getAttributeValue(b, "Order") || 0;
    return orderA - orderB; // sort descending
  });

  return {
    props: {
      posts: sortedPosts,
    },
  };
}

function getAttributeValue(product, attributeName) {
  const attribute = product.attributes.nodes.find(
    (attr) => attr.name.toLowerCase() === attributeName.toLowerCase()
  );
  if (attribute && attribute.options.length > 0) {
    const numberValue = parseInt(attribute.options[0]);
    if (!isNaN(numberValue)) {
      return numberValue;
    }
  }
  return null;
}
