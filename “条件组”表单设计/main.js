$(function(){
  //条件对象
  var obj={
     num:1,//当前条件数
    Prop:10,//最大条件数
    Addnum:function(Prop){//增加条件
      if (obj.num<Prop) {
        var $del=$('<article><span class="glyphicon glyphicon-remove-circle" aria-hidden="true"></span></article>');
        var $Sec1=$('#Sec').clone(true);
        //添加删除按钮
        $Sec1.append($del);
        $Sec1.insertBefore($('footer'));
        obj.num+=1;
        console.log(obj.num);
      }
    },
  };
  //字段列表
  let fieldList = [

  {
    value: "text1",//这是条件字段的key
    label: "陈列上报编号",
    type: "text"//这是条件字段的type
  },
  {
    value: "text1",//这是条件字段的key
    label: "负责人",
    type: "text"//这是条件字段的type
  },
  {
    value: "text1",
    label: "产品",
    type: "text"
  },
  {
      value: "num1",
      label: "2",
      type: "number"
    },
    {
      value: "num1",
      label: "3",
      type: "number"
    }
];
// 比较运算符map 比较运算符由条件字段的type决定
let operatorMap = {
  text: [
    {
      value: "equal",
      label: "等于"
    },
    {
      value: "equal",
      label: "约等于"
    },
    {
      value: "equal",
      label: "约等"
    },
    {
      value: "notEqual",
      label: "不等于"
    }
  ],
  number: [
    {
          value: "gt",
          label: "大于"
        },
    {
      value: "lt",
      label: "小于"
    }
  ]
};
function selectOne(){
  for (var i = 0; i < fieldList.length; i++) {
    var $opl=$('<option data-type='+fieldList[i].type+' ></option>');
    $('.Slt').append($opl);
    $('.Slt option').each(function(i){//闭包了
      $(this).text(fieldList[i].label)
    })
  }
};
function selectTwo(){
  var length1= operatorMap.number.length;
  var length2= operatorMap.text.length;
      var Type=$(".Slt").find("option:selected").attr("data-type");
    if (Type=='text') {
      for (var i = 0; i < length2; i++) {
        var $opl=$('<option >'+operatorMap.text[i].label+'</option>');
        $('#select2').append($opl);
      }
    }
    if (Type=='number') {
      for (var i = 0; i < length1; i++) {
        var $opl=$('<option >'+operatorMap.number[i].label+'</option>');
        $('#select2').append($opl);
      }
    }
  };
selectOne();
selectTwo();
//选中下拉列表事件
   //添加筛选条件事件
  $('footer').on('click','a',function(){
      obj.Addnum(obj.Prop);
      $('.Slt').mouseup();
  });
  //删除条件
  $('.section').on('click','article',function(){
    if(obj.num<=obj.Prop){
        $(this).parent().remove();
        obj.num-=1;
    }
  });
    var length1= operatorMap.number.length;
    var length2= operatorMap.text.length;
    $('.section').on('mouseup','.Slt',function(){
         var sec=$(this).parent().parent();
      var length3=sec.find($('.Slt2 option')).length;//option元素个数
      var Type=$(this).find("option:selected").attr("data-type");
      // console.log(length3);
      if (Type=='text') {
        //优化对象长度不等
               if (length3<length2) {
                 for (var j = length3; j < length2; j++) {
                   var $opl=$('<option >'+operatorMap.text[j].label+'</option>');
                   sec.find($('.Slt2')).append($opl);
                 }
               }
               else {
                 for (var k = length2;  k< length3; k++) {
                    sec.find($('.Slt2 option:eq('+k+')')).remove();
                 }
               }
        for (var i = 0; i < length2; i++) {
         sec.find('.Slt2 option:eq('+i+')').text(operatorMap.text[i].label);
 }


      };
      if (Type=='number') {
        if (length3<length1) {
          for (var w = length3; w < length1; w++) {
            var $opl=$('<option >'+operatorMap.number[w].label+'</option>');
            sec.find($('.Slt2')).append($opl);
          }
        }
        else {
          for (var e = length1;  e< length3; e++) {
             sec.find('.Slt2 option:eq('+(e-1)+')').remove();
          }
        }
        for (var q = 0; q <length1; q++) {
        sec.find('.Slt2 option:eq('+q+')').text(operatorMap.number[q].label);
        }

      }

    })
})
