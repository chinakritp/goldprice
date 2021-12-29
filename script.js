jQuery(document).ready(function () {
  // update_gold_data();

  $("#banner").vegas({
    shuffle: true,
    transitionDuration: 2000,
    animation: "kenburns",
    slides: [
      { src: "img/home-bg.jpg" },
      { src: "img/01.jpg" },
      { src: "img/02.jpg" },
      { src: "img/03.jpg" },
      { src: "img/04.jpg" },
      { src: "img/05.jpg" },
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
