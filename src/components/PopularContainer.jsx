import { PopularArticle } from "./PopularArticle";
import imgGaming from "../assets/images/image-gaming-growth.jpg";
import imgRetroPcs from "../assets/images/image-retro-pcs.jpg";
import topLaptops from "../assets/images/image-top-laptops.jpg";

export const PopularContainer = () => {
  return (
    <section className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3 ">
      <PopularArticle
        image={imgRetroPcs}
        number="01"
        title="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
      />
      <PopularArticle
        image={topLaptops}
        number="02"
        title="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
      />
      <PopularArticle
        image={imgGaming}
        number="03"
        title="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities."
      />
    </section>
  );
};
