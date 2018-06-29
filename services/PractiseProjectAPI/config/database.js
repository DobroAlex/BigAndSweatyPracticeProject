/*создадим файл database.js, который ответственен за работу с базой данных*/
module.exports = (mongoose, config) => {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.database, {
      useMongoClient: true,
      promiseLibrary: global.Promise
    });
    database.on('error', error => console.log(`Connection to BAPP database failed: ${error}`));
    database.on('connected', () => console.log('Connected to BAPP database'));
    database.on('disconnected', () => console.log('Disconnected from BAPP database'));
    process.on('SIGINT', () => {
      database.close(() => {
        console.log('BAPP terminated, connection closed');
        process.exit(0);
      })
    });
  };
  /* Тут мы сначала переключили mongoose на использование стандартного объекта Promise. Если этого не сделать, можно столкнуться с предупреждениями, выводимыми в консоль. Затем мы создали стандартное подключение mongoose.*/
  