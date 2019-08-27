<template>
  <el-aside class="left-box"
            :style="{width: isExpand ? '225px' : '44px'}">
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
    <div class="fixed-sidebar-left slimScrollDiv"
         ref="leftBar"
         @mouseover="handleIn"
         @mouseout="handleOut"
         :class="[isExpand ? 'expand' : 'not-expand']">
      <el-tree ref="tree"
               :data="treeData.data"
               :props="treeData.defaultProps"
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
  </el-aside>
</template>

<script>
// import fetch from '@/api/api'
export default {
  data () {
    return {
      isClose: true,
      isExpand: false,
      treeData: {
        checkedKey: 1,
        data: [
          {
            id: 1,
            label: '资产总览',
            isLeaf: true,
            url: '/assetsView',
            icon: 'ti-layout-grid2'
          },
          {
            id: 2,
            label: '硬件资产管理',
            isLeaf: false,
            icon: 'ti-view-list',
            children: [
              {
                id: 21,
                isLeaf: true,
                url: '/inStorage',
                label: '入库管理',
                icon: ''
              },
              {
                id: 22,
                url: '/outStorage',
                isLeaf: true,
                label: '出库管理',
                icon: ''
              },
              {
                id: 23,
                url: '/assetsMove',
                label: '资产转移',
                isLeaf: true,
                icon: ''
              },
              {
                id: 24,
                url: '/cancelStock',
                label: '退库管理',
                isLeaf: true,
                icon: ''
              },
              {
                id: 25,
                url: '/repair',
                isLeaf: true,
                label: '维修管理',
                icon: ''
              },
              {
                id: 26,
                url: '/scrap',
                label: '报废管理',
                isLeaf: true,
                icon: ''
              }
            ]
          },
          {
            label: '软件资产管理',
            icon: 'ti-package',
            isLeaf: false,
            children: [
              {
                id: 31,
                url: '/software',
                isLeaf: true,
                label: '软件资产登记',
                icon: ''
              }
            ]
          },
          {
            label: '合同管理',
            isLeaf: false,
            icon: 'ion ion-ios-filing',
            children: [
              {
                id: 41,
                url: '/contract',
                isLeaf: true,
                label: '合同管理',
                icon: ''
              }
            ]
          },
          {
            label: '资产盘点',
            isLeaf: false,
            icon: 'ti-pencil-alt',
            children: [
              {
                id: 51,
                url: '/inventory',
                isLeaf: true,
                label: '资产管理',
                icon: ''
              }
            ]
          },
          {
            label: '报表管理',
            isLeaf: false,
            icon: 'zmdi zmdi-chart',
            children: [
              {
                id: 61,
                url: '/hardReport',
                isLeaf: true,
                label: '硬件资产汇总表',
                icon: ''
              },
              {
                id: 62,
                url: '/softReport',
                isLeaf: true,
                label: '软件资产汇总表',
                icon: ''
              },
              {
                id: 63,
                url: '/assetsResume',
                isLeaf: true,
                label: '资产履历',
                icon: ''
              },
              {
                id: 64,
                url: '/classifyReport',
                label: '资产分类汇总表',
                isLeaf: true,
                icon: ''
              },
              {
                id: 65,
                url: '/assetsReport',
                isLeaf: true,
                label: '部门资产汇总表',
                icon: ''
              }
            ]
          },
          {
            label: '配置管理',
            isLeaf: false,
            icon: 'ti-settings',
            children: [
              {
                id: 71,
                url: '/userConfig',
                isLeaf: true,
                label: '用户管理',
                icon: ''
              },
              {
                id: 72,
                url: '/role',
                isLeaf: true,
                label: '角色管理',
                icon: ''
              },
              {
                id: 73,
                url: '/organization',
                isLeaf: true,
                label: '组织架构设置',
                icon: ''
              },
              {
                id: 74,
                url: '/classify',
                isLeaf: true,
                label: '资产分类设置',
                icon: ''
              },
              {
                id: 75,
                url: '/notice',
                isLeaf: true,
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
    }
  },
  watch: {
    isCollapse (newValue, oldValue) {
      this.isExpand = newValue
    }
  },
  created () {
    this.$nextTick(() => {
      this.$refs.tree.setCurrentKey(this.treeData.checkedKey) // treeBox 元素的ref   value 绑定的node-key
    })
    // let data = {}
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
    overflow-y: auto;
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
