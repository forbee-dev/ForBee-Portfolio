export default function Cards({ posts }) {
  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map((post, index) => (
        <div
          key={index}
          className="mt-20"
        >
          <div className="card w-96 bg-base-100 outline outline-offset-0 outline-accent m-4">
            <div className="card-body h-[32rem] items-center text-center">
              <div className="w-11/12 -translate-y-24">
                {post.image && (
                  <img
                    className="object-cover h-48 w-96 rounded-xl outline outline-offset-0 outline-accent"
                    src={post.image.sourceUrl}
                    alt={post.title}
                  />
                )}
              </div>
              <h2 className="card-title -mt-20">{post.title}</h2>
              <div>
                {post?.shortDescription?.length > 220 ? ( // if the description is longer than 100 characters, truncate it
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.shortDescription.slice(0, 220) + "...",
                    }}
                  />
                ) : (
                  <p
                    dangerouslySetInnerHTML={{ __html: post.shortDescription }}
                  />
                )}
              </div>
              <p></p>
              <div className="card-actions ">
                <button className="btn btn-outline btn-accent">
                  More details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
