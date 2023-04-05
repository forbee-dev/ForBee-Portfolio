import Cards from "@/components/Cards";

export default function webdev({ posts }) {
  console.log({ posts });

  return (
    <>
      <div className="w-full min-h-screen h-auto text-center bg-white">
        <div className="max-w-screen-xl w-full min-h-screen h-auto mx-auto p-2 flex justify-center pt-32 bg-black ">
          <div className="">
            <p className="uppercase text-sm tracking-widest">
              Welcome to Web Dev Portfolio page
            </p>
            {/* <div>
              {posts.map((post, index) => (
                <div key={index}>
                  <h1>{post.title}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.shortDescription,
                    }}
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.description,
                    }}
                  />
                  <div>
                    {post.image && (
                      <img
                        src={post.image.sourceUrl}
                        alt={post.title}
                      />
                    )}
                  </div>
                  
                </div>
              ))}
            </div> */}
            <div>
              <Cards posts={posts} />
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
          products(where: {category: "Web-Dev"}) {
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
