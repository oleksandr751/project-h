export interface IContentData {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  generalInfo: IGeneralInfo;
  timelineData: ITimelineData[];
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
