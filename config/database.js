module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "%"),
        port: env.int("DATABASE_PORT", 3306), // 服务器端口
        database: env("DATABASE_NAME", "blog"), // 远程服务名称
        username: env("DATABASE_USERNAME", "borey"), // 账号
        password: env("DATABASE_PASSWORD", "borey0529"), // 密码*AD258E9CA2F37846005DB1C01B263022EAD63E73
      },
      options: {},
    },
  },
});

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "bookshelf",
//       settings: {
//         client: "sqlite",
//         filename: env("DATABASE_FILENAME", ".tmp/data.db"),
//       },
//       options: {
//         useNullAsDefault: true,
//       },
//     },
//   },
// });
