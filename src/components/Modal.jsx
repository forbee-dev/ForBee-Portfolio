export default function Modal({
  posts,
  isVisible,
  handleCloseModal,
  selectedPostIndex,
  onfilter,
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
        <div className="modal ">
          <div className="modal-box w-11/12 h-auto max-w-5xl">
            <button
              onClick={handleCloseModal}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <div>
              {selectedPost.image && (
                <img
                  className="object-cover h-96 w-full rounded-xl outline outline-offset-0 outline-accent"
                  src={selectedPost.image.sourceUrl}
                  alt={selectedPost.title}
                />
              )}
            </div>
            <div>
              <p className="card-title my-5">{selectedPost.title}</p>

              <p
                className="text-justify my-5"
                dangerouslySetInnerHTML={{
                  __html: selectedPost.description,
                }}
              />
            </div>
            <ul>
              {selectedPost.attributes?.nodes.map((attribute) => (
                <li key={attribute.name}>
                  <ul className="flex flex-wrap justify-center align-middle my-5">
                    {attribute.options.map((option) => (
                      <li
                        className="mx-2 p-1 outline outline-offset-1 outline-1 outline-accent rounded-xl"
                        key={option}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
