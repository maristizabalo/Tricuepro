import { features } from "../../utils/constants";

const FeatureSection = () => {
  return (
    <div id="servicios" className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center font-semibold">
        <h2 className="text-neutral-900 dark:text-slate-100 text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Descubre los{" "}
          <span className="bg-gradient-to-r from-primary-2 to-secondary-2 text-transparent bg-clip-text">
            servicios de Kroco Billar
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-gray-200 dark:bg-gray-800 text-secondary justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="text-black dark:text-white mt-1 mb-6 text-xl font-bold">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-900 dark:text-slate-100">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;