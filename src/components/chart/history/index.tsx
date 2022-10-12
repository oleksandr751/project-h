import React, { useEffect, useMemo, useRef } from "react";
import * as echarts from "echarts/core";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BrushComponent,
  ToolboxComponent,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DataZoomComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { LineChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import { computeOptions } from "./options";
import { EChartsOption } from "echarts";
import { IChartValues } from "../../../interfaces/index";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  BrushComponent,
  ToolboxComponent,
  BarChart,
  LineChart,
  CanvasRenderer,
  DataZoomInsideComponent,
  DataZoomSliderComponent,
  DataZoomComponent,
]);
interface DataChartTypes {
  chartName?: string;
  type: string;
  data: IChartValues[];
}
const mystyle = {
  height: "100%",
  width: "100%",
};
let myChart: any;
const DataChart: React.FC<DataChartTypes> = ({ chartName, type, data }) => {
  const comp: any = useRef(null);
  const dateList = useMemo(
    () =>
      data?.map(function (item) {
        return item?.timestamp;
      }),
    [data]
  );
  const valueList = useMemo(
    () =>
      data?.map(function (item) {
        return item?.value;
      }),
    [data]
  );
  const handleResize = () => {
    if (myChart) myChart.dispose();
    myChart = echarts.init(comp?.current);
    myChart?.setOption(
      computeOptions(dateList, valueList, type, chartName ?? "")
    );
    myChart?.on("click", (params: EChartsOption) => {
      console.log(params);
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (myChart) myChart.dispose();
    myChart = echarts.init(comp.current);
    myChart.setOption(
      computeOptions(dateList, valueList, type, chartName ?? "")
    );
    myChart.on("click", (params: EChartsOption) => {
      console.log(params);
    });
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <div ref={comp} style={mystyle}></div>;
};

export default DataChart;
