<template>
  <div class="left-box">
    <p class="header-logo"
       :style="{width: isExpand ? '225px' : '44px'}">
      <img src="@/assets/images/logo.png"
           alt="element-logo">
      <span class="sys_title ml-15">HYAM</span>
      <a id="toggle_nav_btn"
         class="toggle-left-nav-btn inline-block ml-20"
         :style="{left: isExpand ? '235px' : '54px'}"
         href="javascript:void(0);"
         @click="handleExpand">
        <i class="zmdi zmdi-menu"></i>
      </a>
    </p>
    <div class="fixed-sidebar-left"
         ref="leftBar"
         @mouseover="handleIn"
         @mouseout="handleOut"
         :class="[isExpand ? 'expand' : 'not-expand']">
      <el-tree ref="tree"
               :data="data"
               :props="defaultProps"
               :highlight-current="true"
               accordion
               @node-click="handleNodeClick"
               :indent="30"
               node-key="id">
        <span class="custom-tree-node"
              slot-scope="{ node, data }">
          <span>
            <i :class="data.icon"></i> {{ data.label }}
          </span>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
// import fetch from '@/api/api'
export default {
  data () {
    return {
      isClose: true,
      isExpand: false,
      data: [
        {
          label: '资产总览',
          url: '/assetsView',
          icon: 'ti-layout-grid2'
        },
        {
          label: '硬件资产管理',
          icon: 'ti-view-list',
          children: [
            {
              id: 21,
              url: '/inStorage',
              label: '入库管理',
              icon: ''
            },
            {
              id: 22,
              url: '/outStorage',
              label: '出库管理',
              icon: ''
            },
            {
              id: 23,
              url: '/assetsMove',
              label: '资产转移',
              icon: ''
            },
            {
              id: 24,
              url: '/cancelStock',
              label: '退库管理',
              icon: ''
            },
            {
              id: 25,
              url: '/repair',
              label: '维修管理',
              icon: ''
            },
            {
              id: 26,
              url: '/scrap',
              label: '报废管理',
              icon: ''
            }
          ]
        },
        {
          label: '软件资产管理',
          icon: 'ti-package',
          children: [
            {
              id: 31,
              url: '/software',
              label: '软件资产登记',
              icon: ''
            }
          ]
        },
        {
          label: '合同管理',
          icon: 'ion ion-ios-filing',
          children: [
            {
              id: 41,
              url: '/contract',
              label: '合同管理',
              icon: ''
            }
          ]
        },
        {
          label: '资产盘点',
          icon: 'ti-pencil-alt',
          children: [
            {
              id: 51,
              url: '/inventory',
              label: '资产管理',
              icon: ''
            }
          ]
        },
        {
          label: '报表管理',
          icon: 'zmdi zmdi-chart',
          children: [
            {
              id: 61,
              url: '/hardReport',
              label: '硬件资产汇总表',
              icon: ''
            },
            {
              id: 62,
              url: '/softReport',
              label: '软件资产汇总表',
              icon: ''
            },
            {
              id: 63,
              url: '/assetsResume',
              label: '资产履历',
              icon: ''
            },
            {
              id: 64,
              url: '/classifyReport',
              label: '资产分类汇总表',
              icon: ''
            },
            {
              id: 65,
              url: '/assetsReport',
              label: '部门资产汇总表',
              icon: ''
            }
          ]
        },
        {
          label: '配置管理',
          icon: 'ti-settings',
          children: [
            {
              id: 71,
              url: '/userConfig',
              label: '用户管理',
              icon: ''
            },
            {
              id: 72,
              url: '/role',
              label: '角色管理',
              icon: ''
            },
            {
              id: 73,
              url: '/organization',
              label: '组织架构设置',
              icon: ''
            },
            {
              id: 74,
              url: '/classify',
              label: '资产分类设置',
              icon: ''
            },
            {
              id: 75,
              url: '/notice',
              label: '通知方式设置',
              icon: ''
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    isCollapse (newValue, oldValue) {
      this.isExpand = newValue
    }
  },
  created () {
    // let data = {}
    console.log(12)
    // fetch('/admin/hydo/topo/net/get_network_relation', data, function (res) {
    //   console.log(res)
    // })
  },
  methods: {
    handleIn () {
      this.isExpand = true
    },
    handleOut () {
      this.isClose ? this.isExpand = false : this.isExpand = true
    },
    handleExpand () {
      this.isClose = !this.isClose
      this.isExpand = !this.isExpand
    },
    handleNodeClick (data) {
      if (data.url) {
        this.$router.push({
          path: data.url
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.left-box {
  height: 100%;
  .header-logo {
    transition: all 0.3s;
    box-sizing: border-box;
    text-align: left;
    padding-left: 12px;
    overflow: hidden;
    height: 66px;
    line-height: 66px;
    img {
      display: inline-block;
      width: 21px;
      height: 22px;
      vertical-align: middle;
    }
    .sys_title {
      display: inline-block;
      color: #fff;
      font-size: 21px;
      vertical-align: middle;
    }
    .toggle-left-nav-btn {
      position: absolute;
      top: 0px;
    }
  }
  .fixed-sidebar-left {
    height: calc(100% - 66px);
    box-sizing: border-box;
    transition: all 0.3s;
    &.expand {
      width: 225px;
    }
    &.not-expand {
      width: 44px;
    }
    span.custom-tree-node {
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      i {
        margin: 0 15px;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }
}
</style>
