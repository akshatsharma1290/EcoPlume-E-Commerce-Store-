import toTitleCase from "../SmallFunctions/titleCase";

export const randomCategory = () => {
  const num = Math.floor(Math.random() * 100 + 1);
  return num % 2 === 0 ? "men" : "women";
};

export const randomTitle = () => {
  const titles = [
    "Tree Runners",
    "Wool Runners",
    "Tree Breezers",
    "Tree Pipers",
    "Tree Skippers",
    "Tree Loungers",
    "Wool Runner Mizzles",
  ];
  const totalTitles = titles.length - 1
  const num = Math.floor(Math.random() * totalTitles  + 1);
  return titles[num];
};

export const generateTitle = (category : string , title : string) => {
  return `${toTitleCase(category)}'s ${title}`;
};

