import React from "react";
import onlineBanking from "./../assets/icon-online.svg";
import simpleBudgeting from "./../assets/icon-budgeting.svg";
import fastOnboarding from "./../assets/icon-onboarding.svg";
import openAPI from "./../assets/icon-api.svg";

function Choose() {
  return (
    <>
      <section className="bg-neutral-light-grayish-blue pt-4 px-12 md:px-[5%] lg:px-[10%] flex flex-col gap-4 pb-4">
        <h2 className="text-3xl text-center sm:text-start font-[300] text-dark-blue lg:text-4xl xl:text-5xl ">
          Why choose Easybank?
        </h2>
        <p className="text-sm text-center sm:text-start sm:text-base lg:text-lg xl:text-xl text-neutral-grayish-blue ">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="sm:flex sm:gap-2">
          <Choices
            image={onlineBanking}
            title="Online Banking"
            text="Our modern web and mobile application allow you to keep track of your finances wherever you are in the world."
          />
          <Choices
            image={simpleBudgeting}
            title="Simple Budgeting"
            text="See exactly where your money goes each month. Receive notification when you're close to your hitting limits."
          />
          <Choices
            image={fastOnboarding}
            title="Fast Onboarding"
            text="We don't do branches. Open your account in minutes online and start taking control of your finances right away."
          />
          <Choices
            image={openAPI}
            title="Open API"
            text="Manage your savings, investments, pension, and much more from one account. Tracking your money hs never been easier."
          />
        </div>
      </section>
    </>
  );
}

function Choices({ image, title, text }) {
  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-2 items-center sm:items-start">
        <img src={image} alt={title} className=" w-20 mt-4 sm:mt-0" />
        <h3 className="text-xl sm:text-base lg:text-xl 2xl:text-2xl text-dark-blue">{title}</h3>
        <p className="text-center text-sm text-neutral-grayish-blue sm:text-start text-balance 2xl:text-base ">{text}</p>
      </div>
    </>
  );
}

export default Choose;
