const { Job } = require("../models/index");
module.exports = {
  add: async (name, data) => {
    const content = JSON.stringify({
      name,
      data,
    });
    const job = await Job.create({
      content,
    });
    return job;
  },
  execute: async () => {
    const [job] = await Job.findAll({
      order: [["id", "asc"]],
      limit: 1,
    });
    if (job) {
      const { name, data } = JSON.parse(job.content);
      const path = process.cwd() + "/jobs/" + name + ".js";
      const handleJob = require(path);
      const result = await handleJob(data);
      if (result) {
        await job.destroy();
        console.log("Thực thi queue thành công");
      } else {
        console.log("Thực thì queue thất bại");
      }
    }
  },
};
