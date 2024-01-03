import React from "react";
import { faker } from '@faker-js/faker';

const RandomStarRating = () => {
  // Generate a random number between 3 and 5 (inclusive)
  const randomRating = Math.floor(Math.random() * 3) + 3;
  let remainder = 5 - randomRating;

  // Create an array with the appropriate number of empty and filled stars
  const emptyStars = Array(remainder).fill(<i className="fa fa-star-o" aria-hidden="true"></i>);
  const filledStars = Array(randomRating).fill(<i className="fa fa-star" aria-hidden="true"></i>);

  return (
    <div>
      <p>
        {filledStars}
        {emptyStars}
      </p>
      
    </div>
  );
};



function SectionTitle({ title, classes }) {
    return (
      <h1
        className={`md:text-[40px] text-[30px] font-bold uppercase ${
          classes && classes
        }`}
      >
        {title}
      </h1>
    );
  }

function Container({ children }) {
    return (
      <div className="md:w-11/12 w-full md:px-0 px-3 mx-auto">{children}</div>
    );
  }





const NewsCard = ({ text }) => (
  <div className="w-[300px] px-4 py-6 bg-white rounded-md news_card_shadow">
    <p className="text-[#5B6469] font-bold text-[15px]">{text} </p>
    <div className="pt-7 text-[13px] flex items-center gap-2">
      <img src={faker.image.avatar()} alt="person" className="w-10 h-10 rounded-full" />
      <div>
        <h1 className="font-medium">{faker.person.fullName()}</h1>
        <p className="text-[#BFBFC8]">@{faker.person.lastName()}</p>
        <p><RandomStarRating/></p>
      </div>
    </div>
  </div>
  
);

export default function Reviews() {
  return (
    <section className="my-14">
      <Container>
        <div className="pt-14 pb-4 h-[700px] overflow-auto bg-[#F7F7F7] flex items-center lg:flex-nowrap flex-wrap gap-1">
          <article className="lg:w-1/2 w-full lg:pb-0 pb-4 flex flex-col lg:items-start items-center lg:ml-14 lg:mt-52">
            <SectionTitle title="Reviews" />
            <p className="text-[#5B6469]">Let's see what people say about us</p>
          </article>
          <div className="flex gap-4 sm:flex-nowrap flex-wrap lg:w-1/2 mx-auto">
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text="Aamazing platform that helped me find the perfect engineer for my project. The platform was user-friendly and efficient, and the engineer was skilled, courteous, and punctual. I am very happy with the outcome and I would definitely use Construction Link again."  />
              <NewsCard text="Reliable and trustworthy platform for finding engineering services. I used their platform to hire an engineer for a complex project, and I was impressed by the quality and professionalism of the engineer. The project was completed on time and within budget, and the engineer was always available for communication and feedback. Construction Link is the best platform for engineering needs." />
              <NewsCard text="Wonderful platform that connects clients with engineers. I had a great experience using their platform to find an engineer for a small project. The platform was simple and convenient, and the engineer was friendly, helpful, and knowledgeable. The project was done quickly and flawlessly." />
            </div>
            <div className="rounded-md w-full flex flex-col gap-3 items-center">
              <NewsCard text="Fantastic platform that makes finding engineers easy and fun. The project was a success and I received a lot of compliments. Construction Link is the ultimate platform for finding engineers." />
              <NewsCard text= "Excellent platform that offers a wide range of engineering services. I used their platform to find an engineer for a large project, and I was very satisfied with the result. The platform was fast and secure, and the engineer was experienced, diligent, and respectful. The project was delivered on time and exceeded my expectations."  />
              <NewsCard text="I used their platform to find an engineer for a challenging project, and I was very pleased with the outcome. The platform was smart and flexible, and the engineer was competent, enthusiastic, and cooperative. The project was handled professionally and efficiently." />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}





