jQuery(document).ready(function () {
  // update_gold_data();

  $("#banner").vegas({
    shuffle: true,
    transitionDuration: 2000,
    animation: "kenburns",
    slides: [{ src: "img/01.jpg" },{ src: "img/02.jpg" },{ src: "img/03.jpg" },{ src: "img/04.jpg" },{ src: "img/05.jpg" },{ src: "img/06.jpg" },{ src: "img/07.jpg" },{ src: "img/08.jpg" },{ src: "img/09.jpg" },{ src: "img/10.jpg" },{ src: "img/11.jpg" },{ src: "img/12.jpg" },{ src: "img/13.jpg" },{ src: "img/14.jpg" },{ src: "img/15.jpg" },{ src: "img/16.jpg" },{ src: "img/17.jpg" },{ src: "img/18.jpg" },{ src: "img/19.jpg" },{ src: "img/20.jpg" },{ src: "img/21.jpg" },{ src: "img/22.jpg" },{ src: "img/23.jpg" },{ src: "img/24.jpg" },{ src: "img/25.jpg" },{ src: "img/26.jpg" },{ src: "img/27.jpg" },{ src: "img/28.jpg" },{ src: "img/29.jpg" },{ src: "img/30.jpg" },{ src: "img/31.jpg" },{ src: "img/32.jpg" },{ src: "img/33.jpg" },{ src: "img/34.jpg" },{ src: "img/35.jpg" },{ src: "img/36.jpg" },{ src: "img/37.jpg" },{ src: "img/38.jpg" },{ src: "img/39.jpg" },{ src: "img/40.jpg" },{ src: "img/41.jpg" },{ src: "img/42.jpg" },{ src: "img/43.jpg" },{ src: "img/44.jpg" },{ src: "img/45.jpg" },{ src: "img/46.jpg" },{ src: "img/47.jpg" },{ src: "img/48.jpg" },{ src: "img/49.jpg" },{ src: "img/50.jpg" },{ src: "img/51.jpg" },{ src: "img/52.jpg" },{ src: "img/53.jpg" },{ src: "img/54.jpg" },{ src: "img/55.jpg" },{ src: "img/56.jpg" },{ src: "img/57.jpg" },{ src: "img/58.jpg" },{ src: "img/59.jpg" },{ src: "img/60.jpg" },{ src: "img/61.jpg" },{ src: "img/62.jpg" },{ src: "img/63.jpg" },{ src: "img/64.jpg" },{ src: "img/65.jpg" },{ src: "img/66.jpg" },{ src: "img/67.jpg" },{ src: "img/68.jpg" },{ src: "img/69.jpg" },
    ],
  });
});


// var $ = jQuery.noConflict();
// $(document).ready(function() {
//     update_gold_data();
//     run_changed_number();
// });
// setInterval(function(){
//         var update_time = '';
//         var currentTime = new Date();
//         $.get('/GoldPriceToday.xml?currTime='+currentTime, function(data){
//             update_time = $(data).find('update').text();
//             if(update_time != $('#date').text()){
//                 update_gold_data();
//             }
//         });
//     }, 60000);


function update_gold_data(){
  var currentTime = new Date();
  // jQuery.get('https://www.namchiang.com/GoldPriceToday.xml?currTime='+currentTime, function(data){
  //   jQuery('#date').text(jQuery(data).find('update').text());
  //   // jQuery('#buychange').text(jQuery(data).find('buypricechg').text());
  //   // jQuery('#buy').text(jQuery(data).find('buyprice').text());
  //   // jQuery('#sale').text(jQuery(data).find('saleprice').text());
  // });
  jQuery.ajax({
    url: "https://www.namchiang.com/GoldPriceToday.xml?currTime="+currentTime,
    type: "GET",
    crossDomain: true,
    headers: {
      "Access-Control-Allow-Origin": "namchiang.com"
    }
  }).done(
    function(data){
      jQuery('#date').text(jQuery(data).find('update').text());
      // jQuery('#buychange').text(jQuery(data).find('buypricechg').text());
      // jQuery('#buy').text(jQuery(data).find('buyprice').text());
      // jQuery('#sale').text(jQuery(data).find('saleprice').text());
    }
  )
}

// function run_changed_number(){
//   var number_of_changed = $('#changed_count tbody > tr').length;
//   $('#changed_count tbody > tr').each(function() {
//     $(this).find('td:first').html(number_of_changed);
//     number_of_changed -= 1;
//   });
// }
