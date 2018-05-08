 $(document).ready(function () {
     //     M.AutoInit();
     //     $('.sidenav').sidenav();
     //     $('.modal').modal();
     //     $('.scrollspy').scrollSpy({
     //         scrollOffset: 100,
     //     })
     //     $('select').material_select();


     //  ======================= API and AJAX Calls =========================== //
     $('#btn1').on('click', function () {
         console.log('hello')
         var user_input = $('#calorieInput').val()

         var calories = user_input/3

         console.log(calories)
         $.ajax({
                 url: '/api/edamam',
                 method: "POST",
                 data: {
                     calories: calories
                 }
             })
             .then(function (response) {
                 //  console.log(response)
                 var hits = JSON.parse(response.hits);


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
                 <h3 id="recipeName">` + hits[recipe1].recipe.label + `</h3>
          <img src="` + hits[recipe1].recipe.image + `">
             <a href="` + hits[recipe1].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a></a>
                <p>Calories: <span id="caloriesNumber">` + hits[recipe1].recipe.calories + `</span></p>
                 <div id="ingredients">` + hits[recipe1].recipe.ingredientLines + `</div>
                 </div>
                 </div>
         `

                 var card2 = `
  <div class="col s4" id="resultsDiv">
            <div class="row" id="recipeDiv">
                <h3 id="recipeName">` + hits[recipe2].recipe.label + `</h3>
                <img src="` + hits[recipe2].recipe.image + `">
                <a href="` + hits[recipe2].recipe.url + `" target="_blank"><br>Want the Recipe? Click Here!</br></a>
                <p>Calories: <span id="caloriesNumber">` + hits[recipe2].recipe.calories + `</span></p>
                <div id="ingredients">` + hits[recipe2].recipe.ingredientLines + `</div>
            </div>
        </div>`
                 $('#resultsDiv').html(card1)
                 $('#resultsDiv').append(card2)

             })
     })


 })