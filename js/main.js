$(function() {

    

    $('[name=categories]').on("change", function() {
        
        const categories = $(this).val();
        console.log(categories);

        $.ajax({
          method: "GET",
          url: 'https://api.nytimes.com/svc/topstories/v2/' + categories + '.json?api-key=nvza6g9rHUPtPoixuDjnr8OHmY9Br2p0'
        }).done(function(data) {
           let $count = 0;
            console.log(data);
    
           
             const results = $(data.results)
             console.log(results);

            $(".article-container ul").empty(); //empties articles on category change
            $(results).each(function(index, element) {
                
                 
                 if (element.multimedia.length >= 5 && $count < 12) {
                  console.log(element.multimedia[4].url);
                  console.log(element.short_url);
                  
                  $(".article-container ul").append('<li>' + '<a href="' + element.short_url + '">' + '<img src="' + element.multimedia[4].url + '">' + '<p>' + element.title + '</p>' + '</a>' + '</li>');
                  
                  // $('.article-container ul').append('<li>' + element.multimedia[1].caption + '</li>');
                  
                    $count++;
                 }
                 
                 

                });



          
        });

        });































});