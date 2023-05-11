import { useState, useEffect, useRef } from "react";

export default function Modal({
  posts,
  isVisible,
  handleModal,
  selectedPostIndex,
}) {
  if (!isVisible) {
    return null;
  }

  const selectedPost =
    selectedPostIndex !== null ? posts[selectedPostIndex] : null;

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
      />
      {selectedPost && (
        <div className="modal">
          <div className="modal-box w-11/12 h-auto max-w-5xl">
            <button
              onClick={handleModal}
              className="btn btn-sm btn-circle right-2 top-2 sticky float-right"
            >
              ✕
            </button>
            <div>
              {selectedPost.image && (
                <img
                  className="object-fill h-auto w-full rounded-xl outline outline-offset-0 outline-accent"
                  src={selectedPost.image.sourceUrl}
                  alt={selectedPost.title}
                />
              )}
            </div>
            <div>
              <p className="card-title my-5">{selectedPost.title}</p>
              {/* dangerouslySetInnerHTML is used because the description is in HTML format and we want to render it as HTML instead of text
              there is no script tag in the description so it is safe to use this method... in alternative we can use DOMPurify to sanitize the HTML
               */}
              <p
                className="text-justify my-5"
                dangerouslySetInnerHTML={{
                  __html: selectedPost.description,
                }}
              />
            </div>
            <div>
              {selectedPost.galleryImages &&
              selectedPost.galleryImages.nodes.length > 0 ? (
                <div className="grid grid-cols-3 gap-4 items-center">
                  {selectedPost.galleryImages.nodes.map((image) => (
                    <img
                      key={image.mediaItemUrl}
                      className="w-full rounded-xl outline outline-offset-0 outline-accent"
                      src={image.mediaItemUrl}
                      alt={selectedPost.title}
                    />
                  ))}
                </div>
              ) : null}
            </div>
            <ul>
              {selectedPost.attributes?.nodes.map((attributes) =>
                attributes.name === "Tech" ? (
                  <li key={selectedPost.title}>
                    <ul className="flex flex-wrap justify-center align-middle my-5">
                      {attributes.options.map((option) => (
                        <li
                          className="mx-2 p-1 outline outline-offset-1 outline-1 outline-accent rounded-xl"
                          key={option + selectedPost.title}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
