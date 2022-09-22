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
export interface IGreatPeople {
  countryID: string;
  countryName: string;
  dateStart: string;
  dateEnd: string;
  imageSrc: string;
  name: string;
  occupation: string;
  tags: string[];
}
