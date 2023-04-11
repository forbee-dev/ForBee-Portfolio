import { useState } from "react";
import Modal from "./Modal";
import FilterOptions from "./Filter";

export default function Cards({ posts }) {
  /*   console.log(posts.filter((post) => post.attributes?.nodes?.options)); */

  const [showModal, setShowModal] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleOpenModal = (index) => {
    setSelectedPostIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFilter = (option) => {
    setFilteredPosts(
      posts.filter((post) => {
        const options = post.attributes?.nodes?.[0]?.options || [];
        return options.includes(option);
      })
    );
  };

  const filterReset = () => {
    setFilteredPosts(posts);
  };

  return (
    <>
      <div>
        <FilterOptions
          posts={posts}
          onFilter={handleFilter}
          offFilter={filterReset}
        />
      </div>
      <div className="flex flex-wrap justify-center ">
        {/* Render the filter options component */}

        {/* Render the filtered posts */}
        {filteredPosts.map((post, index) => (
          <div key={index}>
            <div className="flex flex-wrap justify-center ">
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
                          className="text-justify "
                          dangerouslySetInnerHTML={{
                            __html: post.shortDescription.slice(0, 220) + "...",
                          }}
                        />
                      ) : (
                        <p
                          className="text-justify"
                          dangerouslySetInnerHTML={{
                            __html: post.shortDescription,
                          }}
                        />
                      )}
                    </div>
                    <p></p> {/* This is a hack to add some space */}
                    <ul key={index}>
                      {post.attributes?.nodes.map((attributes) => (
                        <li key={index}>
                          <ul className="flex flex-wrap justify-center align-middle">
                            {attributes.options.map((option) => (
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
                    <p></p> {/* This is a hack to add some space */}
                    <div className="card-actions">
                      {/* The button to open modal */}
                      <div key={index}>
                        <label
                          className="btn btn-accent"
                          htmlFor="my-modal-3"
                          onClick={() => handleOpenModal(index)}
                        >
                          More Info
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <Modal
                  key={index}
                  handleCloseModal={handleCloseModal}
                  isVisible={showModal && selectedPostIndex === index}
                  posts={filteredPosts}
                  selectedPostIndex={selectedPostIndex}
                  onFilter={handleFilter}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
