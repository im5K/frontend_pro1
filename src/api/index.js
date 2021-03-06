//接口请求对象返回promise
//登录
import ajax from "./ajax"
import jsonp from "jsonp";
import { message } from "antd";

const BASE = ""
export const reqLogin = (username,password)=>
ajax("/login",{username,password},'POST')
//添加用户
export const ReqAddUser = (user)=>
ajax('/manage/user/add',user,'POST')
//获取1级/二级分类的列表
export const reqCategorys=(parentId)=> ajax(BASE +'/manage/category/list',{parentId})
//添加分类
export const reqaddCategory=(categoryName,parentId)=> ajax(BASE+'/manage/category/add',{categoryName,parentId},'POST')
//更新分类
export const reqUpdateCategory=({categoryId,categoryName})=> ajax(BASE+'/manage/category/update',{categoryId,categoryName},'POST')
//获取一个分类
export const reqCategory=(categoryId) => ajax(BASE+'/manage/category/info',{categoryId})

//获取商品分页列表
export const reqProducts = (pageNum,pageSize) => ajax(BASE+'/manage/product/list',{pageNum,pageSize})

// 更新商品状态
export const reqUpadateStatus= (productId,status) => ajax(BASE+"/manage/product/updateStatus",{productId,status},'POST')
//删除图片
export const reqDeleteImg = (name) => ajax('/manage/img/delete', {name}, 'post')
//添加商品
//修改商品
export const reqAddOrUpdateProduct  = (product) => ajax(BASE+'/manage/product/'+(product._id?'update':'add'),product,'POST')
//获取角色列表
export const reqRoles = () => ajax(BASE+'/manage/role/list')
//添加角色
export const reqAddRole = (roleName) => ajax(BASE+'/manage/role/add',{roleName},'POST')
//更新角色
export const reqUpdateRole = (role) => ajax(BASE+'/manage/role/update',role,'POST')

//获取用户列表
export const reqUsers = ()=> ajax(BASE+'/manage/user/list')
//删除指定用户
export const reqDeleteUsers = (userId)=> ajax(BASE+'/manage/user/delete',{userId},'POST')
//添加用户
export const reqAddOrUpdateUser = (user) => ajax(BASE+'/manage/user/'+(user._id?'update':'add'),user,'POST')
//搜索商品分页列表

export const reqSearchProducts = ({pageNum,pageSize, searchName,searchType}) => ajax(BASE+'/manage/product/search',{
    pageNum,
    pageSize,
    //变量名当属性需要加括号
    [searchType]:searchName,
})

/*
json请求接口请求函数
ak = EtPfS96G1RFwVjtDmUgr1tRiTxC3coPT
*/
export const reqWeather = (city)=>{
    return new Promise((resolve,reject)=>{
        const url =`https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=f24daaa119acdc582e8bb94d0d70c994`;
        jsonp(url,{},(err,data)=>{
            
       if(data.info==="OK"){
           const weather = data.lives[0].weather
           resolve(weather)
    
       } else {
           message.error("获取天气信息失败")
       }
    
    
        })
    })
    
   

}

//reqWeather("北京")
