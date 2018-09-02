$(document).ready(function() {
  $("#project_submit").on("click", projectSubmit);
});

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
  }
};

var projectSubmit = function(event) {
  event.preventDefault();
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
    projectType: $("input[name=options]:checked")
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
  console.log(project);
  $(":input").each(function() {
    if ($(this).val() === "") alert("Empty Fields!!");
  });

  API.saveProject(project);

  $(":input").each(function() {
    $(this).val("");
  });

  window.location.href = "/admin";
};
