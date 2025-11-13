import { Feature } from "../Feature/Feature";

export const Price = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-lg p-4 text-white flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-extrabold ">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="flex flex-col gap-2 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="px-10 py-3 text-white font-semibold text-lg rounded-xl bg-green-700">
        Buy Now
      </button>
    </div>
  );
};
