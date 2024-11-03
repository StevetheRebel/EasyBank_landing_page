import React from "react";
import imageCurrency from "./../assets/image-currency.jpg";
import imageRestaurant from "./../assets/image-restaurant.jpg";
import imagePlane from "./../assets/image-plane.jpg";
import imageConfetti from "./../assets/image-confetti.jpg";

function Articles() {
  return (
    <>
      <section className="bg-neutral-very-light-gray pt-12 pb-12 px-6 md:px-[5%] lg:px-[10%] ">
        <h2 className="text-3xl text-center sm:text-start font-[300] text-dark-blue lg:text-4xl xl:text-5xl pb-8 ">
          Latest Articles
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <ArticleCard
            image={imageCurrency}
            author="Claire Robinson"
            title="Receive money in any currency with no fees"
            content="The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single..."
          />
          <ArticleCard
            image={imageRestaurant}
            author="Wilson Hutton"
            title="Treat yourself without worrying about money"
            content="Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you..."

          />
          <ArticleCard
            image={imagePlane}
            author="Wilsson Hutton"
            title="Take your Easybank card wherever you go"
            content="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..."

          />
          <ArticleCard
            image={imageConfetti}
            author="Claire Robinson"
            title="Our invite-only Beta accounts are now live!"
            content="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site..."
          />
        </div>
      </section>
    </>
  );
}

function ArticleCard({ image, author, title, content }) {
  return (
    <>
      <div className="bg-neutral-white rounded-lg flex flex-col gap-8 pb-4 xl:pb-8 ">
        <div>
          <img src={image} alt={title} className="rounded-t-lg sm:h-32 xl:h-56 w-full object-cover" />
        </div>
        <div className="px-6 flex flex-col gap-4 sm:px-4 ">
          <p className="text-neutral-grayish-blue text-xs lg:text-base ">By {author}</p>
          <h3 className="text-dark-blue text-sm xl:text-xl">{title}</h3>
          <p className="text-neutral-grayish-blue text-xs lg:text-base ">{content}</p>
        </div>
      </div>
    </>
  );
}

export default Articles;
