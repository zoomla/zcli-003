# Zoomla!逐浪CMS CLI Studio项目，基于yarn



<p align="center">
  <a href="http://www.z01.com/">
    <img src="https://code.z01.com/img/zoomla_logo.svg" width="600">
  </a>
</p>
<br>


参照与接口数据来源：http://192.168.1.4:97/Default


基于yarn包管理


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 接口配置
http://192.168.1.4:97/API/WXAPP?apiId=cd3c2bf95091673cd0a7f2d551cda6dd&apiKey=4b434af0977dbe552e7f4a4e24e731d9&action=



### 接口用例
从上面接口中，我们可以加不同的调式用例，实现不同的远程信息调用：
```
# 模型列表
http://192.168.1.4:97/API/WXAPP?apiId=cd3c2bf95091673cd0a7f2d551cda6dd&apiKey=4b434af0977dbe552e7f4a4e24e731d9&action=model_list  

# 节点列表
http://192.168.1.4:97/API/WXAPP?apiId=cd3c2bf95091673cd0a7f2d551cda6dd&apiKey=4b434af0977dbe552e7f4a4e24e731d9&action=node_list  

# 父节点下多节点列表
http://192.168.1.4:97/API/WXAPP?apiId=cd3c2bf95091673cd0a7f2d551cda6dd&apiKey=4b434af0977dbe552e7f4a4e24e731d9&action=node_list&pid=1

# 内容读取
http://192.168.1.4:97/API/WXAPP?apiId=cd3c2bf95091673cd0a7f2d551cda6dd&apiKey=4b434af0977dbe552e7f4a4e24e731d9&action=content_list&pnid=[节点ID]
```
