import React from "react";
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

function FeaturedInfo() {
  const value = -11.4;

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            {value} <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.415</span>
          <span className="featuredMoneyRate">
            {value} <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">
            $2.88 <ArrowUpward className="featuredIcon" />
          </span>
          <span className="featuredMoneyRate">+5.2</span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
