module.exports = {
  //...
  devServer: {
    proxy: {
      'http://localhost:8080/register': 'http://api.jstck.ru/'
    }
  }
};