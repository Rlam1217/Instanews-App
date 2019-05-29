$(function() {

    

    $('[name=articles]').on("change", function() {
        
        const categories = $(this).val();
        console.log(categories);

        $.ajax({
          method: "GET",
          url: 'https://api.nytimes.com/svc/topstories/v2/' + categories + '.json?api-key=nvza6g9rHUPtPoixuDjnr8OHmY9Br2p0'
        }).done(function(data) {
           
            console.log(data);
            // $(".articles").empty();  //empties articles on category change
           
             const image = $(data.results)
             console.log(image);

            
            // $(image).each(function(index, element) {
            //     console.log(element.multimedia[0].url);

               
                

            //     $('.articles').append('<img src="' + element.multimedia[3].url + '">'); //appends api 12 images
            //     if (index >= 11)
            //     {
            //         return false;
            //     }


                

               
            // });


            // $('.text-block1').append(data.results[0].multimedia[1].caption);

            // appends 12 captions
            // $(image).each(function(index, element) {
            //     console.log(element.multimedia[1].caption);

            // $('.text-block1').append(element.multimedia[1].caption);
            //     if (index >= 11)
            //     {
            //         return false;
            //     }


            // });



            
            

            // $("li, .text-block1, .text-block2").empty();
            /* Append items */

            $(".grid-container div").empty();
            
            $('.article1').append('<img src="' + data.results[0].multimedia[3].url + '">');
            $('.text-block1').append(data.results[0].multimedia[1].caption);
            $('.article1').wrap('<a href="' + data.results[0].short_url + '">');

            $('.article2').append('<img src="' + data.results[1].multimedia[3].url + '">'); 
            // $('.text-block2').append(data.results[1].multimedia[1].caption);
            $('.article2').wrap('<a href="' + data.results[1].short_url + '">');

            $('.article3').append('<img src="' + data.results[2].multimedia[3].url + '">');
            // $('.text-block1').append(data.results[0].multimedia[1].caption);
            $('.article3').wrap('<a href="' + data.results[2].short_url + '">');

            $('.article4').append('<img src="' + data.results[3].multimedia[3].url + '">'); 
            // $('.text-block2').append(data.results[1].multimedia[1].caption);
            $('.article4').wrap('<a href="' + data.results[3].short_url + '">');

            $('.article5').append('<img src="' + data.results[4].multimedia[3].url + '">');
            // $('.text-block1').append(data.results[0].multimedia[1].caption);
            $('.article5').wrap('<a href="' + data.results[4].short_url + '">');

            $('.article6').append('<img src="' + data.results[5].multimedia[3].url + '">'); 
            // $('.text-block2').append(data.results[1].multimedia[1].caption);
            $('.article6').wrap('<a href="' + data.results[5].short_url + '">');

            $('.article7').append('<img src="' + data.results[6].multimedia[3].url + '">');
            // $('.text-block1').append(data.results[0].multimedia[1].caption);
            $('.article7').wrap('<a href="' + data.results[6].short_url + '">');

            $('.article8').append('<img src="' + data.results[7].multimedia[3].url + '">'); 
            // $('.text-block2').append(data.results[1].multimedia[1].caption);
            $('.article8').wrap('<a href="' + data.results[7].short_url + '">');

            $('.article9').append('<img src="' + data.results[8].multimedia[3].url + '">');
            // $('.text-block1').append(data.results[0].multimedia[1].caption);
            $('.article9').wrap('<a href="' + data.results[8].short_url + '">');

            $('.article10').append('<img src="' + data.results[9].multimedia[3].url + '">'); 
            // $('.text-block2').append(data.results[1].multimedia[1].caption);
            $('.article10').wrap('<a href="' + data.results[9].short_url + '">');

            $('.article11').append('<img src="' + data.results[10].multimedia[3].url + '">');
            // $('.text-block1').append(data.results[0].multimedia[1].caption);
            $('.article11').wrap('<a href="' + data.results[10].short_url + '">');

            $('.article12').append('<img src="' + data.results[11].multimedia[3].url + '">'); 
            // $('.text-block2').append(data.results[1].multimedia[1].caption);
            $('.article12').wrap('<a href="' + data.results[11].short_url + '">');


           

            
          }); 

          


        });































});