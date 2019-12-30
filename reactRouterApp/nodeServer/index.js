// 开启一个node服务
const Expess = require("express");
const app = Expess(); // 初始程序

const bodyParser = require("body-parser"); // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({
    extended: true
})); // 表单请求
app.use(bodyParser.json()); // json请求--post

// 开启端口--服务器接口
app.listen(8080, () => console.log("服务请求：http://localhost:8080/")); // 开启服务
// 开放跨域请求设置
app.all("*", function (req, res, next) {
    // req请求对象  res响应对象 next() 表示进入下一步，跳出当前模块的方法
    // 设置跨域白名单 可以使用cors模块，这里没使用
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    /*
    1.请求方法的工作流程
      1.1 ajax第一发起握手【尝试连接】，这个阶段的method是OPTIONS
      1.2 当接口返回200告诉ajax说可以连接的时候，ajax才会真的将请求方式和参数传给接口
    */

    if (req.method === "OPTIONS") {
        res.sendStatus(200);
    } else {
        next();
    }
});


// 假数据---假设这里就是读取的数据库的数据
const data = require('./data/data.json');
// 登录接口  关于用户数据使用post
app.post("*", (req, res) => {
    // console.log(req.body)
    // console.log(req.path)
    switch (req.path) {
        // 登录接口
        case '/login':
            // 后端经过简单验证后返回的用户数据
            if (req.body.username && req.body.password) {
                res.json({
                    code: 1,
                    msg: '登录成功！'
                })
            } else {
                res.json({
                    code: 0,
                    msg: '账号密码不正确！！！'
                })
            }
            break;
        default:
            res.json({
                code: 0.5,
                msg: '成功连接'
            })
            break;
    }
})


app.get('*', (req, res) => {
    const {
        id
    } = req.query
    // 1、请求的是hot接口
    if (req.path === '/hot') {
        res.json({
            code: 1,
            msg: '请求成功！',
            data: [{
                id: 11,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_13587870903455604/150',
                text: '我家夫君惹不起',
                content: '重生古代农家，成为头上有六个哥哥，倍受爹娘宠爱的老来女却是个好吃懒做，性格骄横，长了满脸痘痘几乎毁容的极品为了避免嫁不出去，她还捡了个哑巴，天天虐待出气穿越而来的傅七宝并不知道，眼前这个被原主打得遍体鳞伤的少年',
                author: '墨初舞'
            }, {
                id: 12,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_14501662004397904/150',
                text: '全世界都求我和你离婚',
                content: '三不五时的秀恩爱。助理来报：“秦少，夫人的前男友刚发微博求复合，三千万粉丝在线狂欢！”男人目光凌厉，语气低冽：“把他微博黑了！”助理再报',
                author: '长石'
            }, {
                id: 13,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_11752652304519801/150',
                text: '名门暖婚之权爷追妻攻略',
                content: '三不五时的秀恩爱。助理来报：“秦少，夫人的前男友刚发微博求复合，三千万粉丝在线狂欢！”男人目光凌厉，语气低冽：“把他微博黑了！”助理再报',
                author: '月初姣姣'
            }]
        })
    }
    // 1.1 请求的是hot/text 获取小说的内容
    if (req.path === '/hot/text') {
        const item = data.hot.find(item => item.id == id);
        res.json(item)
    }
    // 2、请求的是public接口
    if (req.path === '/public') {
        res.json({
            code: 1,
            msg: '请求成功！',
            data: [{
                id: 21,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_13899265303683904/150',
                text: '暖婚甜入骨',
                content: '一场家族联姻，砚时柒和秦家最低调的四少秦柏聿结婚了。婚后，低调的四少一改内敛的作风，三不五时的秀恩爱。助理来报：“秦少，夫人的前男友刚发微博求复合，三千万粉丝在线狂欢！”男人目光凌厉，语气低冽：“把他微博黑了！”助理再报',
                author: '漫西'
            }, {
                id: 22,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_13361332203272404/150',
                text: '穿书后，胖喵儿在八零做团宠',
                content: '胖喵儿死了，偷吃鸡腿时被一道金雷给劈死了！重生在了一个生了九个孙儿，盼孙女盼的眼睛都红了的阮家，瞬间成了阮家上下三代的团宠！胖喵儿笑眯眯，',
                author: '卡卡er'
            }, {
                id: 23,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_13889952803914004/150',
                text: '医见婚心',
                content: '死了，偷吃鸡腿时被一道金雷给劈死了！重生在了一个生了九个孙儿，盼孙女盼的眼睛都红了的阮家，瞬间成了阮家上下三代的团宠！胖喵儿笑眯',
                author: '鲁四小姐'
            }]
        })
    }
    // 3、vip接口
    if (req.path === '/vip') {
        res.json({
            code: 1,
            msg: '请求成功！',
            data: [{
                id: 31,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_13354965105873704/150',
                text: '帝少的遥不可及',
                content: '全国上下都知道，刁蛮跋扈作恶多端的千金小姐邹漓从小就倒追帝少，她扬言：“我要当秦郓璟未来的妻子！”可是她劣迹斑斑的邹漓凭什么？邹漓不惧遭全民耻笑，一场事故过后，她连累天才少女新科状元宁苡煦成为植物人还拒绝赔偿，引发全民讨伐。',
                author: '婻行'
            }, {
                id: 32,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_13399466903307604/150',
                text: '我家影后超甜的',
                content: '最近，因拒绝影帝追求的姜语宁被全网diss得厉害，网友评：“连影帝都看不上，你的男人要上天吗？',
                author: '百香蜜'
            }, {
                id: 33,
                img: 'https://bookcover.yuewen.com/qdbimg/349573/c_14737732405701904/150',
                text: '她成功抱上了大佬的腰',
                content: '',
                author: '月初姣姣'
            }]
        })
    }
})