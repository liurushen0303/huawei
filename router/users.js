const express = require('express');
const coon = require('../dao/coon')
const crypto = require('crypto');
const path = require('path');
const fs = require('fs');


// const { sendMail } = require('../library/sendMail');

const router = express.Router();//获取路由对象

// router.route('/')
//     .get((req,res,next)=>{
//         console.log(req.query);
//         res.json({'method': 'get'});
//     })
//     .post((req,res,next)=>{
//         console.log(req.body);
//         res.json({'method': 'post'});
//     });

router.route('/reg')
    .post((req, res, next) => {
        // 判断用户名是否存在

        let searchUser = `select * from users where user_name='${req.body.username}'`;

        conn.query(searchUser, (err, results) => {
            if (err) console.log(err);
            if (results.length) {
                res.json({ msg: '用户名已存在', username: req.body.username, error: 1 });
            } else {
                let md5 = crypto.createHash('md5'); // 创建一个哈希加密
                let passResult = md5.update(req.body.password).digest('hex'); // 加密内容获得16进制结果

                let sql = `insert into users(user_name, user_password,user_email, user_phone, user_address) 
        values('${req.body.username}','${passResult}','${req.body.email}','${req.body.phone}','${req.body.address}')`;


                conn.query(sql, (err, result) => {
                    if (err) console.log(err);
                    if (result.insertId) {
                        res.cookie('username', req.body.username);
                        res.cookie('isLogined', true);
                        res.json({
                            msg: "注册成功",
                            username: req.body.username,
                            error: 0
                        });
                    }
                });
            }
        });
});

router.route('/logon')
.post((req,res,next) =>{
    console.log(req.cookies);
})

router.route('/getcode')
    .post((req, res, next) => {
        console.log(req.body);
        fs.writeFile(path.join(__dirname, '..', 'temp', req.body.email), sendMail(req.body), 'utf8', (err) => {
            if (err) console.log(err);
            res.json({
                msg: '验证码已发送，请到邮箱查收'
            });
        });
    });

module.exports = router; //路由导出