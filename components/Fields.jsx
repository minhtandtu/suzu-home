import React from 'react';
const linhvuc = [
  {
    name: 'Desk and Office',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt:
      'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description:
      'Journals and note-taking Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description:
      'Daily commute essentials Lorem Ipsum is simply dummy text of the printing and typesetting industry.  f type and scrambled it to make a type specimen book.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
  },
  {
    name: 'Handcrafted Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg',
    imageAlt:
      'Brown leather key ring with brass metal loops and rivets on wood table.',
    description:
      'Keep your phone, keys, and wallet together, so you can lose everything at once. and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
  {
    name: 'Organized Desk Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg',
    imageAlt:
      'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
    description:
      'The rest of the house will still be a mess, but your desk will look great.  and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
  {
    name: 'Focus Collection',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg',
    imageAlt:
      'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
    description:
      'Be more productive than enterprise project managers with a single piece of paper.  and typesetting industry. s standard dummy text f type and scrambled it to make a type specimen book.',
  },
];
const Fields = () => {
  return (
    <>
      <section
        aria-labelledby="collection-heading"
        className="section px-4  sm:pt-32 sm:px-6 lg:max-w-full lg:px-8"
      >
        {/* Canh giữa */}
        {/* Lĩnh vực hoạt động  */}
        <div className="mx-3  md:mx-16 mb-6 md:mb-14  ">
          <div className="text-center flex justify-start md:justify-center">
            <h2 className="text-red-500 title  sm:leading-none ">
              LĨNH VỰC&nbsp;
            </h2>

            <h2 className=" text-white text-stroke text-stroke-red title  ">
              HOẠT ĐỘNG
            </h2>
          </div>
          <div className="md:mx-auto  border-b-4 border-red-500 w-[35%] md:border-b-8 md:w-[160px] py-2 md:py-4"></div>
        </div>
        {/*  */}
        {/*  */}

        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {linhvuc.map((collection, index) => (
            <a key={index} href={collection.href} className="group block mb-10">
              <div
                aria-hidden="true"
                className=" aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 px-4 md:px-4 lg:aspect-w-5 lg:aspect-h-6 xl:px-16"
              >
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <h3 className="mt-4 semititle text-gray-900 ">
                {collection.name}
              </h3>
              {/* <p className="mt-2 description text-gray-500 mb-8">
                {collection.description}
              </p> */}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Fields;
