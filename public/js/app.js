 
  $(document).ready(function(){
    M.AutoInit();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.scrollspy').scrollSpy({
        scrollOffset: 100,
    })
    $('select').material_select();


  //  ======================= API and AJAX Calls =========================== //
var calories = $('').val()
  $.ajax({
    url: '/api/edamam',
    method: "POST",
    data: {
       calories: '129' 
    }
})
.then(function (response) {

//   var queryURL = "https://api.edamam.com/search?q=&app_id=" + config.app_id + "&app_key=" + config.app_key + "&calories=0-100"

// $.ajax({
//     url: queryURL,
//     method: "GET",

//   }).then(function (response){
//     console.log(response)
    
//     var hits = response.hits;


//     var recipe1 = Math.floor(Math.random() * 10);
//     var recipe2 = Math.floor(Math.random() * 10);
     
//     if(recipe1===recipe2){
//        var recipe2 = Math.floor(Math.random() * 10)
      
//     }

//     console.log(recipe1)
//     console.log(recipe2)

    
//     var meal = hits[recipe1].recipe
//     var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
//     $("#here").append(meal_img)
//     console.log(meal.image)

    
  
  
    
//     for(var i = 0; i < 2;i++){

      
        
//         // var num = Math.floor(Math.random()*10)
//         // console.log(typeof(num))
//         // // $("").html(response.hit[num])
//         // console.log(response);}
//    } 
})
  })