$(document).ready(function() {
  var scrolloffset = 55; //variable for menu height

  $("#project_submit").on("click", projectSubmit);
  $("#project_edit").on("click", projectEdit);
  $(".delete").on("dblclick", projectDelete);
  //Activate Scrollspy
  $(window).on("activate.bs.scrollspy", function() {
    var hash = $(".site-nav")
      .find("a.active")
      .attr("href");

    if (hash !== "#page-home") {
      $("header nav").addClass("inbody");
    } else {
      $("header nav").removeClass("inbody");
    }
  });

  $(".navbar-nav a:not(.dropdown-toggle)").click(function() {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top - scrolloffset
          },
          500
        );
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
}); //end ready

var API = {
  saveProject: function(project) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/project",
      data: JSON.stringify(project)
    });
  },
  getProject: function() {
    return $.ajax({
      url: "api/projects",
      type: "GET"
    });
  },
  deleteProject: function(id) {
    return $.ajax({
      url: "api/project/" + id,
      type: "DELETE"
    });
  },
  updateProject: function(project) {
    $.ajax({
      method: "PUT",
      url: "/api/projects",
      data: project
    });
  }
};

var projectDelete = function(event) {
  event.preventDefault();
  API.deleteProject($(this).attr("id"));
  location.reload();
};

var projectSubmit = function(event) {
  event.preventDefault();
  var abort = false;
  $("div.error").remove();
  $(":input[required]").each(function() {
    if ($(this).val() === "") {
      $(this).after('<div class="error">This is a required field.</div>');
      abort = true;
    }
  }); // go through each required
  if (abort) {
    return false;
  } else {
    var project = {
      title: $("#proj_title")
        .val()
        .trim(),
      shortDesc: $("#short_desc")
        .val()
        .trim(),
      longDesc: $("#long_desc")
        .val()
        .trim(),
      projectOps: $("#proj_op")
        .val()
        .trim(),
      buildItems: $("#build_items")
        .val()
        .trim(),
      projectType: $("#project_type")
        .val()
        .trim(),
      launchLink: $("#launch_link")
        .val()
        .trim(),
      gitLink: $("#git_link")
        .val()
        .trim(),
      dataLink: $("#data_link")
        .val()
        .trim(),
      svgLink: $("#svg_link")
        .val()
        .trim(),
      imgLink: $("#img_link")
        .val()
        .trim()
    };

    API.saveProject(project);

    $(":input").each(function() {
      $(this).val("");
    });

    window.location.href = "/admin";
    return true;
  }
};

var projectEdit = function(event) {
  event.preventDefault();
  var project = {
    projectId: $("#proj_id").val(),
    title: $("#edit_proj_title")
      .val()
      .trim(),
    shortDesc: $("#edit_short_desc")
      .val()
      .trim(),
    longDesc: $("#edit_long_desc")
      .val()
      .trim(),
    projectOps: $("#edit_proj_op")
      .val()
      .trim(),
    buildItems: $("#edit_build_items")
      .val()
      .trim(),
    projectType: $("#project_type")
      .val()
      .trim(),
    launchLink: $("#edit_launch_link")
      .val()
      .trim(),
    gitLink: $("#edit_git_link")
      .val()
      .trim(),
    dataLink: $("#edit_data_link")
      .val()
      .trim(),
    svgLink: $("#edit_svg_link")
      .val()
      .trim(),
    imgLink: $("#edit_img_link")
      .val()
      .trim()
  };

  API.updateProject(project);

  $(":input").each(function() {
    $(this).val("");
  });

  window.location.href = "/admin";
};
