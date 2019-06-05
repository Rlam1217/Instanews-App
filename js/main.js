$(function() {

    

    $('[name=categories]').on('change', function() {
        
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

             $('.article-container ul').empty(); //empties articles on category change
             $(results).each(function(index, element) {
              
                 
                  if (element.multimedia.length >= 5 && $count < 12) {
                   console.log(element.multimedia[4].url);
                   console.log(element.short_url);
                  

                  let image = '<div class="article-image" style="background-image:url(' + element.multimedia[4].url + ');">' + '</div>';
                  let url = '<a href="' + element.short_url + '">';
                  let p = '<p>' + element.abstract + '</p>';
                  
      
                   console.log(image);

                   $('.article-container ul').append('<li class="article-list" >' + url + image + p + '</a>' + '</li>');
                  
                  //  $('.article-container ul').append('<li class="article-list" >' + '<a href="' + element.short_url + '">' + image + '<p>' + element.abstract + '</p>' + '</a>' + '</li>');

                   // $(".article-container ul").append('<li>' + '<a href="' + element.short_url + '">' + img + '</a>' + '</li>');
                  
                   //  $(".article-container ul").append('<li>' + '<a href="' + element.short_url + '">' + '<img src="' + element.multimedia[4].url + '">' + '<p>' + element.title + '</p>' + '</a>' + '</li>');
                  
                   // $('.article-container ul').append('<li>' + element.multimedia[1].caption + '</li>');

                  //  element.title // fetches title 
                  
                     $count++;
                  }
                 



                });



          
        });

        });































});