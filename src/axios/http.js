var Name = 'http://192.168.51.248:8081'
var path = {
    position:Name + '/appGoods/position', //经纬度
    firstClassfiyGoods: Name + '/appGoods/firstClassfiyGoods', //首次获取商品
    secondClassfiyGoodsid:Name + '/appGoods/secondClassfiyGoodsid',//第二次获取商品
    findGoodsRedies:Name + '/appGoods/findGoodsRedies',//商品详情
    delShop:Name + '/ShopCar/delShop', //购物车删除商品
    GetTheAuthenticationCode: Name + '/GetTheAuthenticationCode',//获取验证码
    changePhoneNumber:Name + '/changePhoneNumber',//更改手机号
    chongzhi:Name + '/chongzhi',//充值
    login:Name + '/login', //登录
    selectMember:Name + '/selectMember',//查看会员信息
    SettingPaymentPassword:Name + '/SettingPaymentPassword',//支付密码验证手机号
    Searchbox:Name + '/Searchbox',//搜索框
    delectAddress:Name + '/delectAddress',//删除收货地址
    insertAddress:Name + '/insertAddress',//新增收货地址
    selectAddressByUserId:Name + '/selectAddressByUserId',//查看收货地址
    updateAddress:Name + '/updateAddress',//修改收货地址
    updatedefault:Name + '/updatedefault',//修改默认收货地址
    ShoppingCart: Name + '/ShopCar/ShoppingCart',//购物车商品（登录时数据库，否则Cookie）
    money:Name + '/getOrderForm/money',//支付时
    AfterSale: Name + '/getOrderForm/AfterSale',//用户退款时切换状态
    DeliverGoods: Name + '/getOrderForm/DeliverGoods',//订单状态
    alipay:Name + '/getOrderForm/alipay_callback',//支付结果
    getOrder:Name + '/getOrderForm/getOrder',//按订单查询订单
    getOrderForm:Name + '/getOrderForm/getOrderForm',//获取订单
    getOrderFormAll:Name + '/getOrderForm/getOrderFormAll',//查看全部订单
    getOrderUser:Name + '/getOrderForm/getOrderUser',//根据用户ID查看订单
    getOrderWare:Name + '/getOrderForm/getOrderWare'//根据仓库查询

}
export {
    path
}