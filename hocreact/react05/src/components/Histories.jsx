/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from "react";
const Histories = ({ histories, total, onClearHistories }) => {
  console.log("Histories Render");
  return (
    <div>
      <h2>Lịch sử nạp tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>
          {item.amount.toLocaleString()} - {item.createdAt}
        </h3>
      ))}
      <h2>Tổng: {total.toLocaleString()}</h2>
      <button onClick={onClearHistories}>Xóa lịch sử</button>
    </div>
  );
};

export default memo(Histories);
