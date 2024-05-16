export const NewArticle = ({ title, text }) => {
  return (
    <article className="h-[140px] lg:h[160px] border-b-[1px] border-GrayishBlue py-7 last:border-none  lg:min-w-72">
      <h2 className="text-[20px] lg:[16px] text-OffWhite font-bold cursor-pointer hover:text-SoftOrange mb-3">
        {title}
      </h2>
      <p className="text-GrayishBlue text-[15px]">{text}</p>
    </article>
  );
};
