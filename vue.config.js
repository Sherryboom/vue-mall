module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}


// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set('@', resolve('src'))
//       .set('@assets', resolve('src/assets'))
//   }
// }



