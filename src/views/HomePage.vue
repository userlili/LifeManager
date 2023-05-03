<!-- lili:工作台，主界面啦 -->
<script lang="ts" setup>
import TopPanel from "./dashboard/TopPanel.vue";
import ActivityCard from "./dashboard/ActivityCard.vue";
import TimeLine from "./dashboard/TimeLine.vue";
import RadarChart from "./dashboard/RadarChart.vue";
import PieChart from "./dashboard/PieChart.vue";
import LineChart from "./dashboard/LineChart.vue";
</script>
<template>
  <!-- lili:四大面板 -->
  <TopPanel />
  <el-row>
    <el-col class="mt-1" :sm="24" :md="6" :xl="6">
      <!-- lili:时间线 -->
      <TimeLine />
    </el-col>
    <el-col class="mt-1" :sm="24" :md="12" :xl="12">
      <!-- lili:排行榜 -->
      <ActivityCard />
    </el-col>
    <el-col class="mt-1" :sm="24" :md="6" :xl="6">
      <!-- lili:六维数据 -->
      <RadarChart />
    </el-col>
  </el-row>
  <el-row>
    <el-col class="mt-1" :sm="24" :md="18" :xl="18">
      <!-- lili:长折线图 -->
      <LineChart />
    </el-col>
    <el-col class="mt-1" :sm="24" :md="6" :xl="6">
      <!-- lili:圆饼图 -->
      <PieChart />
    </el-col>
  </el-row>
</template>

<style scoped></style>
