<template>
  <div>
    <el-row>
      <h5 class="txt-dark capitalize-font"><i class="zmdi zmdi-account-box mr-10"></i>组织架构设置</h5>
      <hr class="light-grey-hr mb-15">
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
      </el-col>
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
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
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
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
</style>
