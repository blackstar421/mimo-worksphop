"use client";
import { FC, useState } from "react";
import { Tab, Tabs } from "@heroui/tabs";
import { PORTFOLIO_PROJECTS, WORK_CATEGORIES } from "@/constants/portfolio";
import { WorkCategoryEnum } from "@/enum/categories.enum";
import PortfolioGrid from "./portofolio-grid";

const PortfolioTabs: FC = () => {
  const [currentTab, setCurrentTab] = useState<WorkCategoryEnum>(
    WorkCategoryEnum.all
  );

  const handleTabChange = (tab: WorkCategoryEnum) => {
    setCurrentTab(tab);
  };

  return (
    <Tabs
      aria-label="Onglets des portfolio de mimo"
      classNames={{
        cursor:
          "px-6 py-2 rounded-full bg-white text-gray-700 hover:bg-amber-100 hover:ease-in hover:duration-300 group-data-[selected=true]:bg-amber-700 !group-data-[selected=true]:text-white",
        tabContent: "w-full px-4 py-2  flex items-center justify-center",
        tab: "w-fit ",
        tabList:
          "md:ml-[calc(50vw-350px)] flex-wrap justify-between md:flex-nowrap md:justify-center gap-4",
      }}
      selectedKey={currentTab}
      onSelectionChange={(key) => handleTabChange(key as WorkCategoryEnum)}
    >
      {WORK_CATEGORIES.map((cat) => (
        <Tab key={cat.value} title={cat.name}>
          <PortfolioGrid
            list={
              currentTab === WorkCategoryEnum.all
                ? PORTFOLIO_PROJECTS
                : PORTFOLIO_PROJECTS.filter(
                    (project) => project.category === currentTab
                  )
            }
          />
        </Tab>
      ))}
    </Tabs>
  );
};

export default PortfolioTabs;
