import React, { Component } from 'react';

import { NavBar, Icon, Carousel, WingBlank, Grid } from 'antd-mobile';
// 引入路由
import { BrowserRouter } from 'react-router-dom'
// 引入样式
import './css/index.css'
// 引入图片
import { Statistic, Row, Col } from 'antd';

const { Countdown } = Statistic;

export class Index extends Component {
  constructor() {
    super()
    this.state = {
      data: ['2', '3', '3'],
      imgHeight: 176,
      list: ['签到有礼', '新手礼包', '每日任务', '充值福利'],
      tuijian: [],
      deadline: Date.now() + 1000 * 0 * 5 * 24 * 2 + 1000 * 30,
      listData: []
    }
  }
  onFinish = () => {
    // 倒计时结束执行替换data数据
    this.setState({
      tuijian: this.state.tuijian === require('./data/xianmian.json').xianmian ? require('./data/xianmian.json').xianmian2 : require('./data/xianmian.json').xianmian,
      deadline: Date.now() + 1000 * 0 * 5 * 24 * 2 + 1000 * 30
    })
  }
  // 回退按钮的点击事件
  onLeftClick = () => {
    this.props.history.replace('/')
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3'],
        tuijian: require('./data/xianmian.json').xianmian,
        listData: require('./data/xianmian.json').listdata
      });
    }, 100);
  }
  render () {
    const data = this.state.list.map((item, i) => ({
      icon: require(`./img/${i}.png`),
      text: item,
    }));
    return <BrowserRouter>
      {/* 顶部导航 */}
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => this.onLeftClick()}
        rightContent={[
          <Icon
            type="search"
            style={{ marginRight: '16px' }}
            key='0'
          />
          ,
          <Icon type="ellipsis" key='1' />,
        ]}
      >福利</NavBar>
      {/* 轮播图 */}
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`./img/${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      {/* 列表 */}
      <div>
        <Grid data={data} activeStyle={false} />
      </div>
      {/* 限时免费书籍展示 */}
      <div className='lyq_leftBody'>
        本期主打限免
        {/* 定时器 */}
        <div className='lyq_dsq'>
          <Row gutter={12}>
            <Col span={12}>
              <Countdown value={this.state.deadline} onFinish={this.onFinish} />
            </Col>
          </Row>,
        </div>
      </div>
      {/* 倒计时展示商品 */}
      <div className='lyq_list'>
        {
          this.state.tuijian.map((item, index) => {
            return <div className='lyq_list_li' key={index}>
              <img src={require(`./img/${item.img}.jpg`)} alt="11" width='66' height='88' className='book-cover-img' />
              <p>{item.p}</p>
              <span>{item.span}</span>
            </div>
          })
        }
      </div>
      {/* 限时免费书籍展示 */}
      <div className='lyq_leftBody'>
        本期主打限免
        {/* 定时器 */}
        <div className='lyq_dsq' style={{ color: '#717171' }}>
          更多 >
        </div>
      </div>
      {/* 内容 */}
      <div className='lyq_content'>
        {
          this.state.listData.map((item, index) => {
            return <div className='lyq_con_li' key={index}>
              <img src={require(`./img/${item.img}.jpg`)} alt="1" className='book-cover' />
              <div className='book-cell'>
                <h2>{item.text}</h2>
                <span className='book-span'>{item.span}</span>
                <div className='book_div_span'>
                  <i className='book_i'></i>
                  <span style={{ marginRight: '45px' }}>{item.people}</span>
                  <img src={require('./img/90.png')} alt="22" />
                </div>
              </div>
            </div>
          })
        }
      </div>
    </BrowserRouter>
  }
}

export default Index;