// 开启一个node服务
const Expess = require("express");
const app = Expess(); // 初始程序

const bodyParser = require("body-parser"); // 使用中间件可以获取到post-body里的数据
app.use(bodyParser.urlencoded({
    extended: true
})); // 表单请求
app.use(bodyParser.json()); // json请求--post

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

app.post('/', function (req, res) {
    console.log(req.body)
    res.sendFile(__dirname + '/public/index.html');
});

// 热更新设置
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.of('/my-namespace').on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        setInterval(() => {
            client.emit('timer', new Date());
        }, interval);
    });
});

const port = 8888;
io.listen(port);
console.log('端口号： ', port);