module.exports = {
  apps: [
    {
      name:'mcs1',
      script: './mcs_1/index.js',
      error_file:'./mcs_1/logs/err.log',
      out_file:'./mcs_1/logs/out.log',
      //log_type: 'json',
      watch: true,
      ignore_watch: [
        "./mcs_1/logs/*.*",
       ],
      instances:1,
    },
    {
      name:'mcs2',
      script: './mcs_2/index.js',
      error_file:'./mcs_2/logs/err.log',
      out_file:'./mcs_2/logs/out.log',
      watch: true,
      ignore_watch: [
        "./mcs_2/logs/*.*",
        ],
    },
  ],
};
