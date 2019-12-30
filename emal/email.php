<?php
include_once 'class.phpmailer.php';
include_once 'class.smtp.php';
  
$email=new PHPMailer();  // 定义一个很多对象的邮件变量函数                   new 实例化$eamil类，这个类里面有很多方法   PHPMailer是一个用于发送电子邮件的PHP函数包。

$email->SMTPDebug=true;           //  是否显示发送过程中的信息                     false 是不用返回值 不输出值     TRUE  是会输出文档信息
$email->IsSMTP();                  //
$email->IsHTML(true);         //加上会被解析成html页面
$email->SMTPAuth=TRUE;
$email->Host='smtp.163.com';              //需要发送邮件的主机       通常是smtp.xx.com  xx代表qq，163,126；
$email->Username='maygodblessyouqi@163.com';                      //发送邮箱的账号
$email->Password='2489919598liang';                    // 授权码 在邮箱里面设置  密码
$email->From='maygodblessyouqi@163.com';                         //从哪里发送
$email->CharSet='utf-8';
$email->AddAddress('2489919598@qq.com');                //接收邮件的地址3226534509
$email->Subject='梁永琪';                     //邮件标题
$email->Body="您的验证码是：<p style='color:red'>".mt_rand(100000,999999).'</p>';            //邮件内容
// $email->IsSMTP('<div>我是html代码</div>');      //发送html代码
$email->Body="<img src='https://img.alicdn.com/tfs/TB1wlmPqKL2gK0jSZFmXXc7iXXa-520-280.jpg_q90_.webp
'>";
$bool = $email->send();

var_dump($bool);