export const PopularArticle = ({ image, number, title, text }) => {
  return (
    <div className="flex">
      <img className="w-[100px]" src={image} alt="" />
      <div className="pl-6">
        <p className="text-GrayishBlue font-bold text-3xl mb-3">{number}</p>
        <h2 className="text-VeryDarkBlue font-bold hover:text-SoftRed cursor-pointer mb-3">
          {title}
        </h2>
        <p className="text-VeryDarkBlue text-[14px]">{text}</p>
      </div>
    </div>
  );
};
