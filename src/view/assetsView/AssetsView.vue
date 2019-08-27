<template>
  <div>
    <el-row>
      <el-col :span="4"
              v-for="i in 6"
              :key="i">
        <el-card class="box-card">
          <div v-for="o in 4"
               :key="o"
               class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"
              v-for="i in 6"
              :key="i">
        <el-card class="box-card">
          <div v-for="o in 4"
               :key="o"
               class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6"
              v-for="i in 2"
              :key="i">
        <el-card class="box-card">
          <div v-for="o in 4"
               :key="o"
               class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div v-for="o in 4"
               :key="o"
               class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-col :span="24">
      <el-card>
        <el-table :data="tableData"
                  style="width: 100%">
          <el-table-column prop="date"
                           label="日期"
                           width="180">
          </el-table-column>
          <el-table-column prop="name"
                           label="姓名"
                           width="180">
          </el-table-column>
          <el-table-column prop="address"
                           label="地址">
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style>
</style>
