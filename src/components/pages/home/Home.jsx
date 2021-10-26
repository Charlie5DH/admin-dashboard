import React from "react";
import Chart from "../../charts/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import { userData } from "../../charts/DummyData";

import "./Home.css";
import WidgetSmall from "../../widgets/widgetSmall/WidgetSmall";
import WidgetLarge from "../../widgets/widgetLarge/WidgetLarge";

export default function Home({ data }) {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="name"
        LineKey="Active_User"
      />
      <div className="homeWidgets">
        <WidgetSmall headerForWidget="New Members" />
        <WidgetSmall headerForWidget="Active Members" />
        <WidgetLarge />
      </div>
    </div>
  );
}
