export const NavMenuLists = [
  {
    index: '/article',
    title: '内容',
    icon: 'el-icon-location',
    second: [
      {
        index: '/article/list',
        content: '知识文章',
        third: [
              {
                index: '123',
                content: '已举报'
              },
              {
                index: '456',
                content: '已举报'
              }
        ]
      },
      {
        index: '/article/sort',
        content: '分类管理',
        third: []
      },
      {
        index: '/article/organize',
        content: '机构管理',
        third: []
      },
      {
        index: '/article/comment',
        content: '评论管理',
        third: []
      },
      {
        index: '/article/report',
        content: '举报管理',
        third: []
      }
    ]

    // {
    //   third: [
    //     {
    //       title: '举报相关',
    //       index: '',
    //       child: [
    //         {
    //           index: '',
    //           content: '已举报'
    //         },
    //         {
    //           index: '',
    //           content: '已举报'
    //         }
    //       ]
    //     }
    //   ]
    // }
  },
  {
    index: '/hospital',
    title: '医院医生',
    icon: 'el-icon-menu',
    second: [
      {
        index: '/hospital/hospitalList',
        content: '医院库',
        third: []
      },
      {
        index: '/hospital/doctorList',
        content: '医生库',
        third: []
      },
      {
        index: '/hospital/doctorTeamList',
        content: '团队医生',
        third: []
      },
      {
        index: '/hospital/doctorApply',
        content: '申请入住',
        third: []
      }
    ]
  },
  {
    index: '/community',
    title: '社区管理',
    icon: 'el-icon-menu',
    second: [
      {
        index: '/community/circleList',
        content: '圈子列表',
        third: []
      },
      {
        index: '/community/invitationList',
        content: '帖子列表',
        third: []
      },
      {
        index: '/community/commentList',
        content: '评论列表',
        third: []
      },
      {
        index: '/community/report',
        content: '举报管理',
        third: []
      }
    ]
  },
  // {
  //     index: "7",
  //     title: "评论审批",
  //     icon: "el-icon-menu",
  //     second: []
  // },
  {
    index: '8',
    title: '活动设置',
    icon: 'el-icon-menu',
    second: [
      {
        index: '/activity/banner',
        content: 'banner设置',
        third: []
      }
    ]
  },
  {
    index: '/shop',
    title: '商品管理',
    icon: 'el-icon-menu',
    second: [
      {
        index: '/shop/list',
        content: '商品列表',
        third: []
      }
    ]
  },
  {
    index: '10',
    title: '订单信息',
    icon: 'el-icon-menu',
    second: [
      {
        index: '/order/list',
        content: '订单列表',
        third: []
      }
    ]
  }
];
