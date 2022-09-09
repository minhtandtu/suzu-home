import React from 'react';
import Image from 'next/image';
const testimonial = [
  {
    authorName: 'Kelly Williams',
    avatar: '/kelly.png',
    role: 'Head of Design, Layer',
    rating: 5,
    comment:
      'Lhe prompt customer supportLove the simplicity of the service and the prompt customer support. We cant imagine working without it.',
  },
  {
    authorName: 'Christiano',
    avatar: '/ronaldo.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Messi, we are friend, but I have to say that I play football better than him.',
  },
  {
    authorName: 'Messi',
    avatar: '/messi.png',
    role: 'Football player',
    rating: 4,
    comment:
      'I like Ronaldo, we are friend, but I have to say that I play football better than him.',
  },
  {
    authorName: 'Kelly Will',
    avatar: '/kelly.png',
    role: 'Head of Design, Layer',
    rating: 5,
    comment:
      'Love the simplicity of the service and the prompt customer support. We cant imagine working without it.',
  },
];

const TestimonialContent = () => {
  return (
    <>
      <div className="testimonial">
        {testimonial.map((item, index) => (
          <div
            key={index}
            className="testimonial-content w-[400px] h-[250px] flex bd"
          >
            <div className="comment-content">{item.comment}</div>

            <div className="user-content bdd">
              <Image
                src={item.avatar}
                height="50px"
                width="50px"
                className="avatar rounded-full"
                alt="avatar"
              ></Image>
              <p className="author"> {item.authorName}</p>
              <p className="role">{item.role}</p>
              <div className="rating ">
                <p>{item.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TestimonialContent;
