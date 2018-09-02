$(document).ready(function() {
  $("#project_submit").on("click", projectSubmit);
  $("#project_edit").on("click", projectEdit);
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
  },
  updateProject: function(project) {
    $.ajax({
      method: "PUT",
      url: "/api/projects",
      data: project
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

  API.saveProject(project);

  $(":input").each(function() {
    $(this).val("");
  });

  window.location.href = "/admin";
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
    projectType: $("input[name=options]:checked")
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
