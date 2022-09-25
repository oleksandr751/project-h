export const computeOptions = (
  dateList: string[],
  valueList: number[],
  type: string,
  chartName: string
) => {
  const options = {
    tooltip: {
      trigger: "axis",
      position: function (pt: any) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: chartName,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: dateList,
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, 0.05],
      max: 500,
    },
    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 100,
      },
      {
        start: 0,
        end: 100,
      },
    ],
    series: [
      {
        name: "Health value",
        type: type,
        animation: true,
        itemStyle: {
          color: "#3a0ca3",
        },
        data: valueList,
      },
    ],
  };
  return options;
};
