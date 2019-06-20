$(function() {
  $(".article-container > .ajax-loader").hide();

  $("[name=categories]").on("change", function() {
    $(".article-container > .ajax-loader").show();
    const categories = $(this).val();
    console.log(categories);
    $("header").addClass("small-header");

    $.ajax({
      method: "GET",
      url:
        "https://api.nytimes.com/svc/topstories/v2/" +
        categories +
        ".json?api-key=nvza6g9rHUPtPoixuDjnr8OHmY9Br2p0"
    })

      .done(function(data) {
        let $count = 0;
        console.log(data);

        const results = $(data.results);
        console.log(results);

        $(".article-container ul").empty(); //empties articles on category change
        $(results).each(function(index, element) {
          if (element.multimedia.length >= 5 && $count < 12) {
            console.log(element.multimedia[4].url);
            console.log(element.url);

            let image =
              '<div class="article-image" style="background-image:url(' +
              element.multimedia[4].url +
              ');">' +
              "</div>";
            let url = '<a href="' + element.url + '" target="_blank">';
            let p = "<p>" + element.abstract + "</p>";

            console.log(image);

            $(".article-container ul").append(
              '<li class="article-list" >' + url + image + p + "</a>" + "</li>"
            );

            $count++;
          }
        });
      })
      .always(function(data) {
        $(".article-container > .ajax-loader").hide();
      });
  });
});
