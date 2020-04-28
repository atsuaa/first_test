$(function(){
  //タイルの初期化
  $.getJSON('./tile.json', function(row){
    for (var i = 0; i < row.length; i++) {
      var t = row[i];
      for (var j = 0; j < t.length; j++) {
        if (t[j] == 1) {
          $('td').eq(3*i+j).addClass('click');
        }else {
          $('td').eq(3*i+j).removeClass('click');
        }
      }
    }
  });

  $('td').click(function(){
    //インデックスの取得
    //行
    var row = $(this).closest('tr').index();
    //列
    var col = this.cellIndex;

    // ajax処理の開始
    if ($(this).hasClass('click')) {
      var $flag = 'false';
    } else {
      var $flag = 'true';
    }
    $.ajax({
        url:'./request.php',
        type:'GET',
        data:{'row': row, 'col': col, 'flag': $flag}
    })
    // Ajaxリクエストが成功した時発動
    .done( (data) => {
      $('.result').html(data);
      if (data == 1) {
        $(this).addClass('click');
      }else {
        $(this).removeClass('click');
      }
      console.log(data);
    })
    // Ajaxリクエストが失敗した時発動
    .fail( (data) => {
        $('.result').html(data);
        console.log('リクエスト失敗');
    })
  });
});
