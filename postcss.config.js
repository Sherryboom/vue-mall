module.exports = {
  plugins: {
    // "autoprefixer": {},
    "postcss-px-to-viewport": {
      viewportWidth: 375, // 视窗的宽度，对应设计稿的宽度
      viewportHeight: 667,// 视窗的高度，对应设计稿的高度（可省略）
      unitPrecision: 5, //指定'px'转换为视窗单位值的小数位数
      viewportUnit: 'vw',// 需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore'], //指定不需要转换的类
      minPixelValue: 1, //小于或等于1px的不转换成视窗单位
      mediaQuery: false, //允许在媒体查询中能够转换'px',
      exclude:[/TabBar/],//exclude中存放的元素必须是正则
    }
  }
}
