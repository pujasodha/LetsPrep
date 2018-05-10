// var user_model =require('./models/user_model.js');

$(document).ready(function () {
    M.AutoInit();
    $('#userBtn').on('click', function () {

        var user = $("#name").val();

        var email = $("#email").val();

        var user_input = $('#calorieInput').val()

        var breakfast = "N/A"
        var lunch = "N/A"
        var dinner = "N/A"

        var calories = user_input

        console.log(user)
        console.log(email)
        console.log(user_input)
        console.log(calories)
        //  ======================= USER LOGIC =========================== //


        $.ajax({
            url: '/api/user',
            method: "POST",
            data: {
                user: user,
                email: email,
                calories: calories,
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner,
                createdAt: {
                    type: 'TIMESTAMP',
                    allowNull: false
                  },
                  updatedAt: {
                    type: 'TIMESTAMP',
                    allowNull: false
                  }
                } 
                }).then(function () {
            // console.log(response)
            //         var hits = JSON.parse(response.hits);



            //         var recipe1 = Math.floor(Math.random() * 10);
            //         var recipe2 = Math.floor(Math.random() * 10);

            //         if (recipe1 === recipe2) {
            //             var recipe2 = Math.floor(Math.random() * 10)

            //         }

            //         console.log(recipe1)
            //         console.log(recipe2)

            //         console.log(hits)

        })


        //  ======================= API and AJAX Calls =========================== //
        $('#btn1').on('click', function () {
            console.log('hello')
            var user_input = $('#calorieInput').val()
            console.log(user_input)
            $.ajax({
                url: '/api/edamam',
                method: "POST",
                data: {
                    calories: user_input
                }
            })
                .then(function (response) {
                    console.log(response)
                    var hits = response.hits;



                    var recipe1 = Math.floor(Math.random() * 10);
                    var recipe2 = Math.floor(Math.random() * 10);

                    if (recipe1 === recipe2) {
                        var recipe2 = Math.floor(Math.random() * 10)

                    }

                    console.log(recipe1)
                    console.log(recipe2)

                    console.log(hits)

                    // var meal = hits[recipe1].recipe
                    // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
                    // $("#here1").append(meal_img)
                    // console.log(meal.image)
                    var card1 = `
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ hits[recipe1].recipe.label + `</h3>
                                  <img src="` + hits[recipe1].recipe.image + `">
                                  <a href="`+ hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
                                  <p>Calories: <span id="caloriesNumber">`+ hits[recipe1].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ hits[recipe1].recipe.ingredientLines + `</div>
                              </div>
                          </div>
                          `
                  
                        var card2 = `
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ hits[recipe2].recipe.label + `</h3>
                                  <img src="` + hits[recipe2].recipe.image + `">
                                  <a href="`+ hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                                  <p>Calories: <span id="caloriesNumber">`+ hits[recipe2].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ hits[recipe2].recipe.ingredientLines + `</div>
                              </div>
                          </div>`
                        $('#meal_1').html(card1)
                        $('#meal_2').append(card2)
                })
        })
    })
})

// $("#btn1").on("click", function () {
//     // var total_calories =  userInput.val()
//     var calories = $('#calorieInput').val()
//     console.log(calories)

    
//     // var meals = {ajax_call }

//     var queryURL = "https://api.edamam.com/search?q=&app_id=b70eca75&app_key=511c6bd4799b355c07c028fcdf6d7fea&calories="+calories

//     $.ajax({
//       url: queryURL,
//       method: "GET",

//     }).then(function (response) {
//       console.log(response)

//       var hits = response.hits;


//       var recipe1 = Math.floor(Math.random() * 10);
//       var recipe2 = Math.floor(Math.random() * 10);

//       if (recipe1 === recipe2) {
//         var recipe2 = Math.floor(Math.random() * 10)

//       }

//       console.log(recipe1)
//       console.log(recipe2)


//       // var meal = hits[recipe1].recipe
//       // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
//       // $("#here1").append(meal_img)
//       // console.log(meal.image)

//       var card1 = `
//   <div class="col s4" id="resultsDiv">
//             <div class="row" id="recipeDiv">
//                 <h3 id="recipeName">`+ hits[recipe1].recipe.label + `</h3>
//                 <img src="` + hits[recipe1].recipe.image + `">
//                 <a href="`+ hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
//                 <p>Calories: <span id="caloriesNumber">`+ hits[recipe1].recipe.calories + `</span></p>
//                 <div id="ingredients">`+ hits[recipe1].recipe.ingredientLines + `</div>
//             </div>
//         </div>
//         `

//       var card2 = `
//   <div class="col s4" id="resultsDiv">
//             <div class="row" id="recipeDiv">
//                 <h3 id="recipeName">`+ hits[recipe2].recipe.label + `</h3>
//                 <img src="` + hits[recipe2].recipe.image + `">
//                 <a href="`+ hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
//                 <p>Calories: <span id="caloriesNumber">`+ hits[recipe2].recipe.calories + `</span></p>
//                 <div id="ingredients">`+ hits[recipe2].recipe.ingredientLines + `</div>
//             </div>
//         </div>`
//       $('#here1').html(card1)
//       $('#here1').append(card2)

//     })







    //     for(var i = 0; i < 2;i++){



    //         // var num = Math.floor(Math.random()*10)
    //         // console.log(typeof(num))
    //         // // $("").html(response.hit[num])
    //         // console.log(response);}
    //    } 

//   })
    // event.preventDefault()

    // $('.sidenav').sidenav();
    // $('.modal').modal();
    // $('.scrollspy').scrollSpy({
    //   scrollOffset: 100,
    // })
    // $('select').material_select();