import { IProjectItem } from "@/interfaces/ui";
import { FC } from "react";
import PortfolioItem from "./portfolio-item";

interface IProps {
  list: IProjectItem[];
}

const PortfolioGrid: FC<IProps> = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {props.list.map((project) => (
        <PortfolioItem key={project.id} {...project} />
      ))}
    </div>
  );
};

export default PortfolioGrid;
