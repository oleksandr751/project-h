import { EIconName } from "../enum";

export interface IContentData {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  generalInfo: IGeneralInfo;
  timelineData: ITimelineData[];
}
export interface IArticleData {
  name: string;
  description: string;
  articleId: number;
  imageSrc: string;
  tags: EIconName[];
  upvotes: number;
  downvotes: number;
  author: string;
}
export interface ITimelineData {
  name: string;
  dateStart: string;
  dateEnd: string;
  description: string;
  ruler: string;
  backgroundColor?: string;
}
export interface IGeneralInfo {
  capital: string;
  population: string;
  area: string;
  highestPeak: string;
}
export interface IGreatPeople {
  countryID: string;
  countryName: string;
  dateStart: string;
  dateEnd: string;
  imageSrc: string;
  name: string;
  occupation: string;
  tags: EIconName[];
}
export interface IChartValues {
  value: number;
  timestamp: string;
}
export interface IUseChartValues {
  _id: string;
  countryID: string;
  countryName: string;
  dataName: string;
  data: IChartValues[];
}
