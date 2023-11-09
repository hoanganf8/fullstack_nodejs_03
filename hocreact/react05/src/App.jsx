import { useMemo, useState } from "react";
import moment from "moment/moment";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [histories, setHistories] = useState([]);
  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([
      ...histories,
      {
        amount: +amount,
        createdAt: moment().format("DD/MM/YYYY HH:mm:ss"),
      },
    ]);
    setAmount(0);
  };

  //useMemo --> Trả về 1 giá trị
  const total = useMemo(() => {
    return histories.reduce((prev, current) => {
      console.log("Tính tổng");
      return prev + current.amount;
    }, 0);
    //Callback phải có return
  }, [histories]);
  return (
    <div>
      {/* {console.log("re-render")} */}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChange}
          value={amount}
        />
        <button>Add</button>
      </form>
      <h2>Lịch sử nạp tiền</h2>
      {histories.map((item, index) => (
        <h3 key={index}>
          {item.amount.toLocaleString()} - {item.createdAt}
        </h3>
      ))}
      <h2>Tổng: {total.toLocaleString()}</h2>
    </div>
  );
};

export default App;
