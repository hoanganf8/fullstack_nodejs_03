Functional Component

- Component được tạo bằng Function
- Khi re-render -> Chạy lại hàm component (Chạy lại hết)
- Không có sẵn các thành phần: state, lifecycle,... -> Khắc phục bằng cách sử dụng Hook (Hàm đặc biệt)

Hook là gì?

- Hàm đặc biệt do React build sẵn hoặc do nhà phát triển tự xây dựng
- Bắt đầu bằng từ khóa use (useState, useContext,...)
- Chỉ được gọi hook ở trong functional component (Không thể gọi đc ở class, event handler, hoặc bất kỳ 1 hàm con nào khác,...)

1. useState() -> Làm việc với State trong functional

Trả về 1 mảng

- Phần tử 1: giá trị state
- Phần tử 2: function setState

2. useEffect() -> Mô phỏng lại vòng đời component trong Functional Component

useEffect(callback, dependencies)

1. Khi state thay đổi

2. UI Update

3. Cleanup

4. Chạy callback trong useEffect

5. useReducer() -> Quản lý state bằng reducer

- Đẩy phần logic vào trong hàm reducer
- Event Handler -> Dispatch lên reducer

```js
const reducer = (prevState, newState) => {
  return newState;
};

const initialState = {};

const [state, dispatch] = useReducer(reducer, initialState);

const eventHandler = () => {
  dispatch();
};
```
