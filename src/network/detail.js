import {request} from "network/request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsInfo{
  constructor(detailInfo){
    this.goodsDesc = detailInfo.desc
    this.goodsImgs = detailInfo.detailImage
  }
}

export class ParamsInfo{
  constructor(itemParams){
    this.productInfo = itemParams.info
    this.sizeInfo = itemParams.rule
  }
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}
