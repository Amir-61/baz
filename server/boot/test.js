module.exports = function (server) {
  server.dataSources.mysqlDs.automigrate('baz', function (err) {
    if (err) {
      console.error('test.insert_baz, ERR:', err);
    } else {
      var Baz = server.models.baz;
      Baz.create({name: 'foo'}, function (err, data) {
        if(err)
          console.error('test.insert_baz, ERR:', err);
      });
    }
  });
};
