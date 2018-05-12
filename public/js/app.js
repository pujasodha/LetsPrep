// var user_model =require('./models/user_model.js');

$(document).ready(function () {
    M.AutoInit();
    var user_input = $('#calorieInput').val()
    var calories = Math.floor(user_input / 3)

    $('#userBtn').on('click', function () {

        var user = $("#name").val();

        var email = $("#email").val();

        var user_input = $('#calorieInput').val()

        var goals = $('#goals').val()

        var breakfast = "N/A"
        var lunch = "N/A"
        var dinner = "N/A"

        var calories = Math.floor(user_input / 3)

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
                calories: user_input,
                breakfast: breakfast,
                lunch: lunch,
                dinner: dinner,
                goals: goals,
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
            $("#name").val('');

            $("#email").val('');

            $('#calorieInput').val('')

            $('#goals').val('')

            // API NOW WILL GET CALLED AFTER SUMBITTING INFO!!!
            $('#clientName').html(user)
            $('#caloriesNumber').html(user_input)
            $('#goalsWeek').append(goals)
            console.log('hello')
            // var user_input = $('#calorieInput').val()
            console.log(calories)
            // $.ajax({
            //     url: '/api/user',
            //     method: "POST",
            //     data: {
            //         user: user,
            //         goals: goals
            //     }
            // })
            //     .then(function (response) {
            //         console.log(response)
            //         $('#goalsWeek').append(goals)
                    $.ajax({
                        url: '/api/edamam',
                        method: "POST",
                        data: {
                            calories: calories
                        }
                }).then(function (response) {
                    console.log(JSON.parse(response))
                    var res = JSON.parse(response)



                    var recipe1 = Math.floor(Math.random() * 10);
                    var recipe2 = Math.floor(Math.random() * 20);
                    var recipe3 = Math.floor(Math.random() * 30);
                    console.log(recipe1)
                    console.log(recipe2)
                    console.log(recipe3)

                    console.log(res.hits[recipe1].recipe.calories / res.hits[recipe1].recipe.yield)
                    console.log(res.hits[recipe2].recipe.calories / res.hits[recipe2].recipe.yield)
                    console.log(res.hits[recipe3].recipe.calories / res.hits[recipe3].recipe.yield)
                    var calserving1 = Math.floor(res.hits[recipe1].recipe.calories / res.hits[recipe1].recipe.yield)
                    var calserving2 = Math.floor(res.hits[recipe2].recipe.calories / res.hits[recipe2].recipe.yield)
                    var calserving3 = Math.floor(res.hits[recipe3].recipe.calories / res.hits[recipe3].recipe.yield)

                    if (recipe1 === recipe2) {
                        var recipe1 = Math.floor(Math.random() * 30)

                    }
                    if (recipe2 === recipe3) {
                        var recipe2 = Math.floor(Math.random() * 20)

                    }
                    if (recipe3 === recipe1) {
                        var recipe3 = Math.floor(Math.random() * 10)

                    }

                    // console.log(recipe1)
                    // console.log(recipe2)

                    // console.log(hits)

                    // var meal = hits[recipe1].recipe
                    // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
                    // $("#here1").append(meal_img)
                    // console.log(meal.image)
                    var card1 = `
                    <div class="col s4" id="meal_1">
                              <div class="row" id="meal_1">
                                  <h3 id="recipeName">`+ res.hits[recipe1].recipe.label + `</h3>
                                  <img id="mealPic1" src="` + res.hits[recipe1].recipe.image + `">
                                  <a href="`+ res.hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
                                  <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving1 + `</span></p>
                                  <div id="ingredients">`+ res.hits[recipe1].recipe.ingredientLines + `</div>
                              </div>
                          </div>
                          `
                    console.log(card1)
                    var card2 = `
                    <div class="col s4" id="meal_2">
                              <div class="row" id="meal_2">
                                  <h3 id="recipeName">`+ res.hits[recipe2].recipe.label + `</h3>
                                  <img src="` + res.hits[recipe2].recipe.image + `">
                                  <a href="`+ res.hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                                  <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving2 + `</span></p>
                                  <div id="ingredients">`+ res.hits[recipe2].recipe.ingredientLines + `</div>
                              </div>
                          </div>`
                    console.log(card2)
                    var card3 = `
                    <div class="col s4" id="meal_3">
                              <div class="row" id="meal_3">
                                  <h3 id="recipeName">`+ res.hits[recipe3].recipe.label + `</h3>
                                  <img src="` + res.hits[recipe3].recipe.image + `">
                                  <a href="`+ res.hits[recipe3].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                                  <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving3 + `</span></p>
                                  <div id="ingredients">`+ res.hits[recipe3].recipe.ingredientLines + `</div>
                              </div>
                          </div>`
                    var newCard1 = `
                          <div class="col s4" id="meal_1">
                                    <div class="row" id="meal_1">
                                        <h3 id="recipeCardName">`+ res.hits[recipe1].recipe.label + `</h3>
                                        <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving1 + `</span></p>
                                    </div>
                                </div>`
                    console.log(card1)
                    var newCard2 = `
                          <div class="col s4" id="meal_2">
                                    <div class="row" id="meal_2">
                                        <h3 id="recipeCardName">`+ res.hits[recipe2].recipe.label + `</h3>
                                        <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving2 + `</span></p>
                                    </div>
                                </div>`
                    console.log(card2)
                    var newCard3 = `
                          <div class="col s4" id="meal_3">
                                    <div class="row" id="meal_3">
                                        <h3 id="recipeCardName">`+ res.hits[recipe3].recipe.label + `</h3>
                                        <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving3 + `</span></p>
                                    </div>
                                </div>`
                    console.log(card3)
                    // $('#mealpic').append('src')
                    $('#meal_1').append(newCard1)
                    $('#meal_2').append(newCard2)
                    $('#meal_3').append(newCard3)

                    $('#meal_1').on('click', function () {
                        console.log("clickworks")
                        $('#resultsDiv').html(card1);
                    })
                    $('#meal_2').on('click', function () {
                        console.log("clickworks")
                        $('#resultsDiv').html(card2);
                    })
                    $('#meal_3').on('click', function () {
                        console.log("clickworks")
                        $('#resultsDiv').html(card3);
                    })

                })
        })
    })
})
// })

            // $('#clientName').html(user)
            // $('#caloriesNumber').html(user_input)   
            //  })


        //  ======================= API and AJAX Calls =========================== //
//         $('#btn1').on('click', function () {
//             console.log('hello')
//             // var user_input = $('#calorieInput').val()
//             console.log(calories)
//             $.ajax({
//                 url: '/api/edamam',
//                 method: "POST",
//                 data: {
//                     calories: calories
//                 }
//             })
//                 .then(function (response) {
//                     console.log(JSON.parse(response))
//                     var res = JSON.parse(response)



//                     var recipe1 = Math.floor(Math.random() * 10);
//                     var recipe2 = Math.floor(Math.random() * 20);
//                     var recipe3 = Math.floor(Math.random() * 30);
//                     console.log(recipe1)
//                     console.log(recipe2)
//                     console.log(recipe3)

//                     console.log(res.hits[recipe1].recipe.calories / res.hits[recipe1].recipe.yield)
//                     console.log(res.hits[recipe2].recipe.calories / res.hits[recipe2].recipe.yield)
//                     console.log(res.hits[recipe3].recipe.calories / res.hits[recipe3].recipe.yield)
//                     var calserving1 = Math.floor(res.hits[recipe1].recipe.calories / res.hits[recipe1].recipe.yield)
//                     var calserving2 = Math.floor(res.hits[recipe2].recipe.calories / res.hits[recipe2].recipe.yield)
//                     var calserving3 = Math.floor(res.hits[recipe3].recipe.calories / res.hits[recipe3].recipe.yield)

//                     if (recipe1 === recipe2) {
//                         var recipe1 = Math.floor(Math.random() * 30)

//                     }
//                     if (recipe2 === recipe3) {
//                         var recipe2 = Math.floor(Math.random() * 20)

//                     }
//                     if (recipe3 === recipe1) {
//                         var recipe3 = Math.floor(Math.random() * 10)

//                     }

//                     // console.log(recipe1)
//                     // console.log(recipe2)

//                     // console.log(hits)

//                     // var meal = hits[recipe1].recipe
//                     // var meal_img = "<img src='"+hits[recipe1].recipe.image+"'>"
//                     // $("#here1").append(meal_img)
//                     // console.log(meal.image)
//                     var card1 = `
//                     <div class="col s4" id="meal_1">
//                               <div class="row" id="meal_1">
//                                   <h3 id="recipeName">`+ res.hits[recipe1].recipe.label + `</h3>
//                                   <img id="mealPic1" src="` + res.hits[recipe1].recipe.image + `">
//                                   <a href="`+ res.hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
//                                   <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving1 + `</span></p>
//                                   <div id="ingredients">`+ res.hits[recipe1].recipe.ingredientLines + `</div>
//                               </div>
//                           </div>
//                           `
//                     console.log(card1)
//                     var card2 = `
//                     <div class="col s4" id="meal_2">
//                               <div class="row" id="meal_2">
//                                   <h3 id="recipeName">`+ res.hits[recipe2].recipe.label + `</h3>
//                                   <img src="` + res.hits[recipe2].recipe.image + `">
//                                   <a href="`+ res.hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
//                                   <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving2 + `</span></p>
//                                   <div id="ingredients">`+ res.hits[recipe2].recipe.ingredientLines + `</div>
//                               </div>
//                           </div>`
//                     console.log(card2)
//                     var card3 = `
//                     <div class="col s4" id="meal_3">
//                               <div class="row" id="meal_3">
//                                   <h3 id="recipeName">`+ res.hits[recipe3].recipe.label + `</h3>
//                                   <img src="` + res.hits[recipe3].recipe.image + `">
//                                   <a href="`+ res.hits[recipe3].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
//                                   <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving3 + `</span></p>
//                                   <div id="ingredients">`+ res.hits[recipe3].recipe.ingredientLines + `</div>
//                               </div>
//                           </div>`
//                     var newCard1 = `
//                           <div class="col s4" id="meal_1">
//                                     <div class="row" id="meal_1">
//                                         <h3 id="recipeCardName">`+ res.hits[recipe1].recipe.label + `</h3>
//                                         <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving1 + `</span></p>
//                                     </div>
//                                 </div>`
//                     console.log(card1)
//                     var newCard2 = `
//                           <div class="col s4" id="meal_2">
//                                     <div class="row" id="meal_2">
//                                         <h3 id="recipeCardName">`+ res.hits[recipe2].recipe.label + `</h3>
//                                         <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving2 + `</span></p>
//                                     </div>
//                                 </div>`
//                     console.log(card2)
//                     var newCard3 = `
//                           <div class="col s4" id="meal_3">
//                                     <div class="row" id="meal_3">
//                                         <h3 id="recipeCardName">`+ res.hits[recipe3].recipe.label + `</h3>
//                                         <p>Calories Per Serving: <span id="caloriesNumber">`+ calserving3 + `</span></p>
//                                     </div>
//                                 </div>`
//                     console.log(card3)
//                     // $('#mealpic').append('src')
//                     $('#meal_1').append(newCard1)
//                     $('#meal_2').append(newCard2)
//                     $('#meal_3').append(newCard3)

//                     $('#meal_1').on('click', function () {
//                         console.log("clickworks")
//                         $('#resultsDiv').html(card1);
//                     })
//                     $('#meal_2').on('click', function () {
//                         console.log("clickworks")
//                         $('#resultsDiv').html(card2);
//                     })
//                     $('#meal_3').on('click', function () {
//                         console.log("clickworks")
//                         $('#resultsDiv').html(card3);
//                     })

//                 })
//         })
//     })
// })