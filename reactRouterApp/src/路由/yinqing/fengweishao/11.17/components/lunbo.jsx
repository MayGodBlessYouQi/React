import React, { Component } from 'react'
//引入ant依赖
import { Carousel } from 'antd';
import '../index.css'

export default class Lunbo extends Component {
    render() {
        return <Carousel autoplay>
            <div className='lunbo-img'>
              <img className='lunbo-pic' src="http://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f8b57608c4a70b9736bc2f9443da2eda.jpg" alt=""/>
            </div>
            <div className='lunbo-img'>
             <img  className='lunbo-pic' src="http://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/f611e97f68574496cfcedefb29e6f551.jpg" alt=""/>
            </div>
            <div className='lunbo-img'>
            <img className='lunbo-pic' src="http://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/d84cc185747c31c1e186139bef659221.jpg" alt=""/>
            </div>
            <div className='lunbo-img'>
              <img className='lunbo-pic' src="http://bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/9dea44422278a16ffd78d04af3b49b4b.jpg" alt=""/>
            </div>
          </Carousel>
    }
}
