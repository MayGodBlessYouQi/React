import React, { Component } from 'react'
import Data from '../data.json'

export default class Home extends Component {
    recursion = data =>{
              
              return data.map((item,index) => {
                 return (
                     <div key={index}>
                   <img src="http://bookcover.yuewen.com/qdbimg/349573/c_13361332203272404/150" alt=""/>
                   <label key={item.id}>{item.label}</label>
                   <p key={index}>{item.conent}</p>
                   </div>
                 )
               })
    }
    render() {
        return (
            <div>
             {this.recursion(Data.wanben)}
            </div>
        )
    }
}
