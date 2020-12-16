<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <div class="size-info">
      <div class="size-info-text">{{ paramsInfo.sizeInfo.key }}</div>
      <div v-for="(table,index) in paramsInfo.sizeInfo.tables" :key="index">
        <table class="size-info-content">
          <tr v-for="(lines, linesIndex) in table" :key="linesIndex">
            <td v-for="(item, itemIndex) in lines" :key="itemIndex">
              {{ item }}
            </td>
          </tr>
        </table>
      </div>
      <div class="size-info-disclaimer">{{ paramsInfo.sizeInfo.disclaimer }}</div>
    </div>
    <div class="product-info">
      <div class="product-info-text">{{ paramsInfo.productInfo.key }}</div>
      <table class="product-info-content">
        <tr v-for="(item, index) in paramsInfo.productInfo.set" :key="index">
          <td class="product-info-key">{{ item.key }}</td>
          <td class="product-info-value">{{ item.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params-info {
  padding: 5px
}

.product-info-text, .size-info-text {
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  padding: 10px;
  text-decoration: overline underline;
}

.product-info-content {
  font-size: 15px
}

.product-info-content td {
  border-bottom: 1px solid var(--color-tint);
  height: 40px;
}

.product-info-key {
  width: 95px;
}

.size-info-content {
  width: 95%;
  margin: 5px auto;
  border: 1px solid #cad9ea;
  table-layout: fixed;
  /*为表格设置合并边框模型*/
  border-collapse: collapse;
}

.size-info-content td {
  border: 1px solid #e2e2e2;
  height: 20px;
  text-align: center;
}

.size-info-disclaimer {
  font-size: 14px;
  padding: 10px 5px 5px
}
</style>
