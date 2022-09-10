export interface IContentData {
  name: string;
  description: string;
  imageSrc: string;
  timelineData: ITimelineData[];
}
export interface ITimelineData {
  name: string;
  dateStart: string;
  dateEnd: string;
  description: string;
}
