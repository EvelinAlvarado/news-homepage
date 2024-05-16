import imgMobile from "../../src/assets/images/image-web-3-mobile.jpg";
import imgDesktop from "../../src/assets/images/image-web-3-desktop.jpg";

export const MainArticle = () => {
  return (
    <section className="mb-12">
      <picture>
        <source media="(max-width: 640px)" srcSet={imgMobile} />
        <source media="(min-width:641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Main article" />
      </picture>
      <div className="sm:flex">
        <h2 className="flex-1 text-[40px] font-bold sm:text-[58px] leading-none pt-6 sm:py-6 text-VeryDarkBlue">
          The Bright Future of Web 3.0?
        </h2>
        <div className="flex-1">
          <p className="text-[13px] mb-4 sm:mb-10 sm:text-[15px] pt-4 sm:pt-9 text-VeryDarkBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue tracking-widest text-sm">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
