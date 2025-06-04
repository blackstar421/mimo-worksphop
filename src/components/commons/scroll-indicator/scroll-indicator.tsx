import { FC } from "react";

const ScrollIndicator: FC = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex flex-col items-center">
        <span className="text-white text-sm mb-2">Découvrir</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
