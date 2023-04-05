export default function Post(data) {
  const { post } = data.data;
  console.log({ post });

  return (
    <>
      <div className="w-full h-screen text-center bg-white">
        <div className="max-w-screen-xl w-full h-screen mx-auto p-2 flex justify-center items-center bg-black ">
          <div>
            <p className="uppercase text-sm tracking-widest">
              Welcome to Post page
            </p>
            <div>
              <h1>{post.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}
              />
              <div>
                {post.galleryImages.nodes.map((image) => (
                  <img
                    src={image.sourceUrl}
                    alt={post.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const res = await fetch(
    "https://www.vibrant-lovelace.207-180-218-158.plesk.page/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
            query MyQuery {
            post(id: "${slug}", idType: SLUG) {
                title
                content
                slug
                featuredImage {
                node {
                    sourceUrl
                }
                }
                galleryImages {
                nodes {
                    sourceUrl
                }
                }
            }
            }
            `,
        variables: {},
      }),
    }
  );

  const json = await res.json();

  return {
    props: {
      data: json.data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://www.vibrant-lovelace.207-180-218-158.plesk.page/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                query MyQuery {
                posts {
                    nodes {
                    slug
                    }
                }
                }
                `,
        variables: {},
      }),
    }
  );

  const json = await res.json();

  const paths = json.data.posts.nodes.map((node) => ({
    params: { slug: node.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}
