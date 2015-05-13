
var
  stir $ require :stir-template

var
  (object~ html head title body meta script link div a span) stir

var
  line $ \ (text)
    return $ div null text

= module.exports $ \ (data)
  return $ stir.render
    stir.doctype
    html null
      head null
        title null ":React Lite Dropdown"
        meta $ object (:charset :utf-8)
        link $ object (:rel :icon)
          :href :http://tp4.sinaimg.cn/5592259015/180/5725970590/1
        script $ object (:src data.main) (:defer true)
      body null
        div
          object (:class :intro)
          div
            object (:class :title)
            , ":This is a demo of Lite Dropdown."
          line ":This is the default style used in Talk by Teambition."
          line ":You need to add your own style in your projects."
          div null
            span null ":Read more at "
            a
              object (:href :http://github.com/teambition/react-lite-dropdown)
              , :github.com/teambition/react-lite-dropdown
            span null :.
        div
          object (:class :demo)
