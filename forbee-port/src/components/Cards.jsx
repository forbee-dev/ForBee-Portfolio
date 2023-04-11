import { useState } from "react";

export default function Cards({ posts }) {
  /*   console.log(posts.attributes.nodes.map());
   */
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
                {post?.shortDescription?.length > 220 ? ( // if the description is longer than 220 characters, truncate it
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{
                      __html: post.shortDescription.slice(0, 220) + "...",
                    }}
                  />
                ) : (
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: post.shortDescription }}
                  />
                )}
              </div>
              <ul className="list-group list-group-flush">
                {post.attributes?.nodes.map((attribute) => (
                  <li
                    key={attribute.name}
                    className="list-group-item"
                  >
                    <ul className="flex flex-wrap">
                      {attribute.options.map((option) => (
                        <li
                          className="mr-5"
                          key={option}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <div className="card-actions">
                {/* The button to open modal */}
                <label
                  htmlFor="my-modal-3"
                  className="btn"
                >
                  More Details
                </label>
                {/* The modal */}
                <input
                  type="checkbox"
                  id="my-modal-3"
                  className="modal-toggle"
                  key={index}
                />
                <div className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <label
                      htmlFor="my-modal-3"
                      className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                      ✕
                    </label>
                    <div className="w-3/4">
                      {post.image && (
                        <img
                          className="object-cover h-96 w-full rounded-xl outline outline-offset-0 outline-accent"
                          src={post.image.sourceUrl}
                          alt={post.title}
                        />
                      )}
                    </div>
                    <h2 className="card-title mt-10">{post.title}</h2>
                    <div>
                      <p
                        className="text-justify"
                        dangerouslySetInnerHTML={{
                          __html: post.description,
                        }}
                      />
                    </div>
                    {post.attributes?.nodes.map((attribute) => (
                      <>
                        <h4 className="mt-4 ">Tecnologies Used</h4>
                        <p className=" outline outline-offset-0 outline-accent">
                          {attribute.options}
                        </p>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
