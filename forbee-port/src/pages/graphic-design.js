import dynamic from "next/dynamic";
const Cards = dynamic(() => import("@/components/Cards"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function design({ posts }) {
  /*   console.log(posts.atribites);
   */
  return (
    <>
      <div className="w-full min-h-screen h-auto text-center">
        <div className="max-w-screen-xl w-full min-h-screen h-auto mx-auto p-2 flex justify-center pt-28 ">
          <div className="mockup-code w-full h-full">
            <pre data-prefix="$">
              <code className="uppercase text-xl mb-5">
                Welcome to Graphic Design Portfolio page
              </code>
            </pre>
            <div>
              <Cards
                className="flex flex-row flex-wrap "
                posts={posts}
              />
            </div>
          </div>
        </div>
      </div>
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
          products (where: {category: "Design"})  {
            nodes {
              galleryImages {
                nodes {
                  sourceUrl
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
                  options
                }
              }
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
