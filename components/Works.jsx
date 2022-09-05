import React from 'react';
const works = [
  {
    title: 'TITLE',
    description:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy',
    author: 'LONG CHÂU',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    title: 'TITLE',
    description:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for  will uncover many web sites still in their infancy',
    author: 'MOMO',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    title: 'TITLE',
    description:
      'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy',
    author: 'MỸ TÂM',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
];
const categories = [
  {
    name: 'New Arrivals',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
  },
  {
    name: 'Productivity',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
  },
  {
    name: 'Workspace',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
  },
  {
    name: 'Accessories',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
  },
  {
    name: 'Sale',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
  },
];
const Works = () => {
  return (
    <>
      <div className="section bg-white">
        <section
          aria-labelledby="collection-heading"
          className="max-w-xl mx-auto pt-2 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          {/*  */}
          <div className="  w-full">
            <div className="   md:flex md:w-[500px] text-left md:mx-auto ">
              <h2 className="text-red-500 title tracking-tighter leading-relaxed sm:leading-none ">
                CHÚNG TÔI &nbsp;
              </h2>
              <h2 className=" text-white text-stroke text-stroke-red title  ">
                LÀM GÌ
              </h2>
            </div>
            <div className="  border-b-4 border-red-500 w-[150px] md:border-b-8 md:w-[256px] py-4 md:mx-auto"></div>
          </div>
          {/*  */}

          <div className="w-full mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {works.map((collection) => (
              <a
                key={collection.title}
                href={collection.href}
                className="group block   w-full "
              >
                <div
                  aria-hidden="true"
                  className="  aspect-w-3 aspect-h-2 rounded-lg overflow-hidden 
                  group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className=" w-72 h-96 object-center object-cover  mx-auto"
                  />
                </div>
                <h3 className="mt-4 semititle text-gray-900 text-center">
                  {collection.title}
                </h3>
                <p className="mt-2 description text-gray-500 text-center ">
                  {collection.description}
                </p>
              </a>
            ))}
          </div>
        </section>
        {/* 5 squares  */}
        <section
          aria-labelledby="category-heading"
          className="pt-4 sm:pt-4 xl:max-w-7xl xl:mx-auto xl:px-8"
        >
          <div className=" flow-root">
            <div className="">
              <div className="box-content  relative h-80 overflow-x-auto xl:overflow-visible">
                <div className="absolute grid-cols-2 min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-8">
                  {categories.map((category) => (
                    <a
                      key={category.name}
                      href={category.href}
                      className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                    >
                      <span aria-hidden="true" className="absolute inset-0">
                        <img
                          src={category.imageSrc}
                          alt=""
                          className="w-56 h-56 object-center object-cover shadow-md shadow-gray-400"
                        />
                      </span>

                      {/* <span className="relative mt-auto text-center text-xl font-bold text-black">
                            {category.name}
                          </span> */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Works;
