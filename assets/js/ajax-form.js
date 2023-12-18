(function (a) {
	"use strict";

	a("#contact-form").length &&
	(a("#contact-form").validator(),
	a("#contact-form").on("submit", function (b) {
		if (!b.isDefaultPrevented())
		return (
			a.ajax({
				type: "POST",
				url: "inc/contact.php",
				data: a(this).serialize(),
				success: function (d) {
					var f = "alert-" + d.type;
					d = d.message;
					var h = '<div class="alert ' + f + ' alert-dismissible" role="alert">' + d + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
					f && d && (a("#contact-form").find(".messages").html(h), a("#contact-form")[0].reset());
				},
			}),
			!1
		);
	}));

})(jQuery);