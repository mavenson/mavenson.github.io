const lorem = "Ipsa numquam officia recusandae quae velit recusandae dignissimos. Quas cumque commodi ut nemo aliquid qui qui sequi. Dolores sit qui consectetur tempore consequatur. Nihil in ipsum eligendi debitis. Ea eaque ad dolores doloribus. Qui architecto quos ad ea facere. Hic aut ut qui. Numquam quis est deserunt quae et delectus. Perferendis fuga optio possimus ea itaque et a. Non dolores voluptatum sequi. Itaque quam nesciunt pariatur delectus accusamus tenetur labore. Nobis aperiam commodi qui excepturi tenetur. Et autem cupiditate ad voluptas expedita quia voluptate aut. Quis corrupti a quisquam aut alias.";

$(function(){
    $("#about-content").hide();
});

function getContent(page) {
    $(function(){
        $("#landing").hide();
    });
    switch (page) {
        case "about":
            $(function(){
                $("#about-content").show();
            });

        case "projects":
            break;

        case "resume":
          break;
      }
}



