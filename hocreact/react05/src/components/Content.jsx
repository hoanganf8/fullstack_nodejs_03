/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
const Content = () => {
  console.log("Content Render");
  return (
    <div>
      <h2>This is content</h2>
    </div>
  );
};

export default memo(Content);

/*
Higher Order Component --> Component cấp cao hơn Component hiện tại (Bọc component)
React.memo() 
--> HOC
--> Dựa theo props để quyết định việc render component con (props thay đổi)
*/
