<template>
  <div class="home">

<b-navbar toggleable="lg" type="" variant="" class="fixed-top inav">
   <b-navbar-brand href="/"><b-img src="../assets/images/logo.svg" alt=""></b-img></b-navbar-brand>
   <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
   <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav>
       <b-nav-item href="/">Home</b-nav-item>
       <b-nav-item href="http://www.ziti163.com/webfont">webfont</b-nav-item>
       <b-nav-item href="http://www.ziti163.com/uni">Unicode CN</b-nav-item>
       <b-nav-item href="http://f.ziti163.com">zfont</b-nav-item>
       <b-nav-item href="http://www.ziti163.com/down">Font Store</b-nav-item>
       </b-navbar-nav>
       <b-navbar-nav class="ml-auto">
       <b-nav-form>
       <b-form-input size="sm" class="mr-sm-2" placeholder="关键字"></b-form-input>
       <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
      </b-nav-form>
      <b-nav-item-dropdown right>
          <template v-slot:button-content>
          <em>生态</em>
          </template>
          <b-dropdown-item href="http://www.z01.com/pub">逐浪软件</b-dropdown-item>
          <b-dropdown-item href="http://www.z01.com/case">案例中心</b-dropdown-item>
          <b-dropdown-item href="http://www.z01.com/corp">关于公司</b-dropdown-item>
          <b-dropdown-item href="http://www.z01.com/corp/music">企业歌曲</b-dropdown-item>
      </b-nav-item-dropdown>
      </b-navbar-nav>
   </b-collapse>
</b-navbar>
<!-- inav end -->

<b-container fluid="xl" class="ihero">
<b-row>
<b-col md="8" class="" offset-md="2">
<h1>找到你想要的一切图</h1>

<form class="morphsearch-form" action="/Search/SearchList" method="get">
<input class="morphsearch-input" type="search" placeholder="Search..." name="keyword">
<button class="morphsearch-submit" type="submit">Search</button>
</form>


<ul class="well_list">
  <li>
    <div class="well_listBox">
<strong><a href="">婺源那里的秋，是多么的无情靘杀每一个追求青春的大好美少女</a></strong>
<span><i class="zi zi_clock"></i> 2020/5/20</span>
<p>我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年</p>
<small><a href="">查看更多 +</a></small>
    </div>
  </li>
  <li>
    <div class="well_listBox">
<strong><a href="">婺源那里的秋，是多么的无情靘杀每一个追求青春的大好美少女</a></strong>
<span><i class="zi zi_clock"></i> 2020/5/20</span>
<a href=""><b-img src="../assets/images/p1.jpg" alt=""></b-img></a>
<p>我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年我作为一个婺源人，一直深深的以为，在这个中国最美的老家，有着不同的寻常的意义，如同春天，如同秋天，如同冬天，如同北方归来的游子，有一条河叫大江，奔腾几千年</p>
<small><a href="">查看更多 +</a></small>
    </div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>
  <li>
    <div class="well_listBox"></div>
  </li>


</ul>

<footer>
<ZoomlaFoot cols="12" md="12" class="" con="2020年逐浪软件科技" :icpOpen="true" icp="沪ICP200800号"/>
</footer>
</b-col>
</b-row>
</b-container>



  </div>
</template>

<script>
export default{
    metaInfo: {
      title: '逐浪CMS门户',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' },
        { vmid: 'description', name: 'description', content: '专业开发者社区' },
        { vmid: 'keywords',name: 'keywords',content: 'powershell,ps,zoomla，开发者,bat' }
      ]
    },
}
</script>