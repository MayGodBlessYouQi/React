// 栅格系统
import React from 'react';
import { Row, Col } from 'antd';

export default () => {
  return <div className="gutter-example">
    <Row gutter={16}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_003.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_004.png')} alt="语文" width='46' height='46' />
          </div>
          <p>文学</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_005.png')} alt="语文" width='46' height='46' />
          </div>
          <p>作文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_006.png')} alt="语文" width='46' height='46' />
          </div>
          <p>诗歌</p>
        </div>
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_007.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_008.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_009.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_010.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
    </Row>
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 20]}>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src='http://static.ruiwen.com/img/jiaocai/m/icon9.png' alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_011.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_012.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div className="gutter-box">
          <div className='gutter-img'>
            <img src={require('../logo/pic_013.png')} alt="语文" width='46' height='46' />
          </div>
          <p>语文</p>
        </div>
      </Col>
    </Row>
  </div>
}
