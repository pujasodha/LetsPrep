// var user_model =require('./models/user_model.js');

$(document).ready(function () {
    M.AutoInit();
    var user_input = $('#calorieInput').val()
    var calories = Math.floor(user_input / 3)

    $('#userBtn').on('click', function () {

        var user = $("#name").val();

        var email = $("#email").val();

        var user_input = $('#calorieInput').val()

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
            // var user_input = $('#calorieInput').val()
            console.log(calories)
            $.ajax({
                url: '/api/edamam',
                method: "POST",
                data: {
                    calories: calories
                }
            })
                .then(function (response) {
                    console.log(JSON.parse(response))
                    var res = JSON.parse(response)



                    var recipe1 = Math.floor(Math.random() * 10);
                    var recipe2 = Math.floor(Math.random() * 10);
                    var recipe3 = Math.floor(Math.random() * 10);
                    console.log(recipe1)
                    console.log(res.hits[recipe1])

                    if (recipe1 === recipe2) {
                        var recipe2 = Math.floor(Math.random() * 10)

                    }
                    if (recipe2 === recipe3) {
                        var recipe2 = Math.floor(Math.random() * 10)

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
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ res.hits[recipe1].recipe.label + `</h3>
                                  <img src="` + res.hits[recipe1].recipe.image + `">
                                  <a href="`+ res.hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
                                  <p>Calories: <span id="caloriesNumber">`+ res.hits[recipe1].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ res.hits[recipe1].recipe.ingredientLines + `</div>
                              </div>
                          </div>
                          `
                    console.log(card1)
                    var card2 = `
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ res.hits[recipe2].recipe.label + `</h3>
                                  <img src="` + res.hits[recipe2].recipe.image + `">
                                  <a href="`+ res.hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                                  <p>Calories: <span id="caloriesNumber">`+ res.hits[recipe2].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ res.hits[recipe2].recipe.ingredientLines + `</div>
                              </div>
                          </div>`
                    console.log(card2)
                    var card3 = `
                    <div class="col s4" id="resultsDiv">
                              <div class="row" id="recipeDiv">
                                  <h3 id="recipeName">`+ res.hits[recipe3].recipe.label + `</h3>
                                  <img src="` + res.hits[recipe3].recipe.image + `">
                                  <a href="`+ res.hits[recipe3].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                                  <p>Calories: <span id="caloriesNumber">`+ res.hits[recipe3].recipe.calories + `</span></p>
                                  <div id="ingredients">`+ res.hits[recipe3].recipe.ingredientLines + `</div>
                              </div>
                          </div>`
                    console.log(card3)

                        $('#meal_1').append(card1)
                        $('#meal_2').append(card2)
                        $('#meal_3').append(card3)
                })
        })
    })
})






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