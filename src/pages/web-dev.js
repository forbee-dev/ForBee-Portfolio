import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const Cards = dynamic(() => import("@/components/Cards"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function webdev({ posts }) {
  //console.log({ posts });

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
          <div className="mockup-code w-full h-full">
            <pre data-prefix="$">
              <code className="uppercase text-xl mb-5">
                Welcome to Web Development Portfolio page
              </code>
            </pre>
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
  const res = await fetch(
    "https://www.vibrant-lovelace.207-180-218-158.plesk.page/graphql",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
        query NewQuery {
          products(where: {category: "Web-Dev"}) {
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
            }
          }
        }
      `,
      }),
    }
  );

  const json = await res.json();

  return {
    props: {
      posts: json.data.products.nodes,
    },
  };
}
