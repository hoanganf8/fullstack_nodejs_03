const cron = require("node-cron");
//Thư viện node-cron sử dụng kỹ thuật lập lịch giống phần mềm cronjob trên hệ điều hành linux
const job = require("./core/job");

cron.schedule("* * * * *", () => {
  job.execute();
});
