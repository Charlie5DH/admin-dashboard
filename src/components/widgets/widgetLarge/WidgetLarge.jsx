import React from "react";
import "./WidgetLarge.css";

function WidgetLarge() {
  const Button = ({ type }) => {
    return <button className={"widgetLargeButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLarge">
      <h3 className="widgetLargeTitle">Latest Transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTableTr">
          <th className="widgetLargeTableTh">Customer</th>
          <th className="widgetLargeTableTh">Day</th>
          <th className="widgetLargeTableTh">Amount</th>
          <th className="widgetLargeTableTh">Status</th>
        </tr>
        <tr className="widgetLargeTableTr">
          <td className="widgetLargeTableUser">
            <img
              src="https://images.pexels.com/photos/3615456/pexels-photo-3615456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImageAvatar"
            />
            <span className="widgetLargeUserName">Susan Carol</span>
          </td>
          <td className="widgetLargeDate">2 June 2021</td>
          <td className="widgetLargeAmount">$122.0</td>
          <td className="widgetLargeStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLargeTableTr">
          <td className="widgetLargeTableUser">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImageAvatar"
            />
            <span className="widgetLargeUserName">James Doe</span>
          </td>
          <td className="widgetLargeDate">2 June 2021</td>
          <td className="widgetLargeAmount">$122.0</td>
          <td className="widgetLargeStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLargeTableTr">
          <td className="widgetLargeTableUser">
            <img
              src="https://images.pexels.com/photos/3765350/pexels-photo-3765350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="widgetLargeImageAvatar"
            />
            <span className="widgetLargeUserName">Jane Doe</span>
          </td>
          <td className="widgetLargeDate">2 June 2021</td>
          <td className="widgetLargeAmount">$122.0</td>
          <td className="widgetLargeStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default WidgetLarge;
