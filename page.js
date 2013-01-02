

$(function() {

	var content = localStorage.getItem("value") || "type something";

	$("#TheInput").val(content);

	$("#TheClose").click(function() {
		var newcontent = $("#TheInput").val();
		localStorage.setItem("value", newcontent)
		self.close();
	});
});

