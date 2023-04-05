export default function Cards({ posts }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <div key={index}>
          <div className="card w-96 h-full bg-base-100 shadow-xl m-4 mt-20">
            <div className="card-body min-h-564px items-center text-center">
              <div className="">
                {post.image && (
                  <img
                    className=" h-2/3 rounded-xl -translate-y-20"
                    src={post.image.sourceUrl}
                    alt={post.title}
                  />
                )}
              </div>

              <h2 className="card-title">{post.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.shortDescription,
                }}
              />

              <div className="card-actions">
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.description,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

{
  /*       <div>
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
      </div> */
}
