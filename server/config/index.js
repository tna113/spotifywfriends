const config = {
    dbUrl: process.env.DBURL || "",
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    logDir: process.env.LOGDIR || "logs",
    viewEngine: process.env.VIEW_ENGINE || "html",
    apiDomain: "http://localhost:3001",
};

module.exports = config;