import head  from '../ajaxJs/js/head.js'
! function (d) {
	function n () {
		var n = jQuery("body").innerWidth();
		991 < (n += function () {
			var n = jQuery('<div style="width:100%;height:200px;">test</div>'),
				e = jQuery(
					'<div style="width:200px;height:150px;position:absolute;top:0;left:0;visibility:hidden;overflow:hidden;"></div>'
				).append(n),
				a = n[0],
				t = e[0];
			jQuery("body").append(t);
			var l = a.offsetWidth;
			e.css("overflow", "scroll");
			var u = t.clientWidth;
			return e.remove(), l - u
		}()) && d(".lynessa-menu-wapper").each(function () {
			if (0 < d(this).length) {
				var n = d(this);
				if ("undefined" != n) {
					var p, s = n.offset();
					p = n.innerWidth(), setTimeout(function () {
						d(".main-menu .item-megamenu").each(function (n, e) {
							d(e).children(".megamenu").css({ "max-width": p + "px" });
							var a = d(e).children(".megamenu").outerWidth(),
								t = d(e).outerWidth(),
								l = s.left,
								u = l + p,
								i = d(e).offset().left,
								r = i - l < a / 2,
								f = u < a / 2 + i;
							if (d(e).children(".megamenu").css({
									left: "-" + (a / 2 - t / 2) +
										"px"
								}), r) {
								var m = i - l;
								d(e).children(".megamenu").css({ left: -m + "px" })
							}
							if (f && !r) {
								m = i - l;
								m -= p - a, d(e).children(".megamenu").css({ left: -m + "px" })
							}
						})
					}, 100)
				}
			}
		})
	}

	function e () {
		// var a = parseInt(d(".container").innerWidth()) - 30;
		// d(".lynessa-menu-wapper.vertical.support-mega-menu").each(function () {
		// 	// var n = parseInt(d(this).actual("width")),
		// 	// 	e = a - n;
		// 	// 0 < e && d(this).find(".megamenu").each(function () {
		// 	// 	var n = d(this).attr("style");
		// 	// 	n = (n = null == n ? "" : n) + " max-width:" + e + "px;", d(this).attr("style", n)
		// 	// })
		// })
	}

	function a () {
		!d(".lynessa-menu-clone-wrap").length && 0 < d(".lynessa-clone-mobile-menu").length && d("body").prepend(
			'<div class="lynessa-menu-clone-wrap"><div class="lynessa-menu-panels-actions-wrap"><a class="lynessa-menu-close-btn lynessa-menu-close-panels" href="#">x</a></div><div class="lynessa-menu-panels"></div></div>'
		);
		Array();
		d(".lynessa-menu-clone-wrap .lynessa-menu-panels #lynessa-menu-panel-main").length || d(
			".lynessa-menu-clone-wrap .lynessa-menu-panels").append(
			'<div id="lynessa-menu-panel-main" class="lynessa-menu-panel lynessa-menu-panel-main"><ul class="depth-01"></ul></div>'
		), d(".lynessa-clone-mobile-menu").each(function () {
			var n = d(this),
				e = n.attr("id");
			if (!d("#" + ("lynessa-menu-clone-" + e)).length) {
				var a = n.clone(!0);
				a.find(".menu-item").addClass("clone-menu-item"), a.find("[id]").each(function () {
					a.find('.az_tta-panel-heading a[href="#' + d(this).attr("id") + '"]').attr("href",
						"#" + l(d(this).attr("id"), "lynessa-menu-clone-")), a.find(
						'.lynessa-menu-tabs .tabs-link a[href="#' + d(this).attr("id") + '"]').attr(
						"href", "#" + l(d(this).attr("id"), "lynessa-menu-clone-")), d(this).attr(
						"id", l(d(this).attr("id"), "lynessa-menu-clone-"))
				}), a.find(".lynessa-menu-menu").addClass("lynessa-menu-menu-clone");
				var t = d(".lynessa-menu-clone-wrap .lynessa-menu-panels #lynessa-menu-panel-main ul");
				t.append(a.html()),
					function t (n, l) {
						n.find(".menu-item-has-children").length && n.find(".menu-item-has-children").each(
							function () {
								var n = d(this);
								t(n, l);
								for (var e = "lynessa-menu-panel-" + l; d("#" + e).length;) e =
									"lynessa-menu-panel-" + ++l;
								//只有分类shop才有子页
								if (e === "lynessa-menu-panel-1") {
									n.prepend('<a class="lynessa-menu-next-panel" href="#' + e +
										'" data-target="#' + e + '"></a>');
								}
								var a = d("<div>").append(n.find("> .submenu").clone()).html();
								n.find("> .submenu").remove(), d(
									".lynessa-menu-clone-wrap .lynessa-menu-panels").append(
									'<div id="' + e +
									'" class="lynessa-menu-panel lynessa-menu-sub-panel lynessa-menu-hidden">' +
									a + "</div>")
							})
					}(t, 0)
			}
		})
	}

	function l (n, e) {
		return e + n
	}

	d(document).ready(function () {
		n(), e(), d(document).on("click", ".menu-toggle", function () {
			return d(".lynessa-menu-clone-wrap").addClass("open"), !1
		}), d(document).on("click", ".lynessa-menu-clone-wrap .lynessa-menu-close-panels", function () {
			return d(".lynessa-menu-clone-wrap").removeClass("open"), !1
		}), d(document).on("click", function (n) {
			n.offsetX > d(".lynessa-menu-clone-wrap").width() && d(".lynessa-menu-clone-wrap")
				.removeClass("open")
		}), d(document).on("click", ".lynessa-menu-next-panel", function (n) {
			var e = d(this),
				a = e.closest(".menu-item"),
				t = e.closest(".lynessa-menu-panel"),
				l = e.attr("href");
			if (d(l).length) {
				t.addClass("lynessa-menu-sub-opened"), d(l).addClass("lynessa-menu-panel-opened")
					.removeClass("lynessa-menu-hidden").attr("data-parent-panel", t.attr("id"));
				var u = a.find(".lynessa-menu-item-title").attr("title"),
					i = "";
				0 < d(".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title").length && (
						i = d(".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title")
						.html()), void 0 !== u && 0 != typeof u ? (d(
							".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title")
						.length || d(".lynessa-menu-panels-actions-wrap").prepend(
							'<span class="lynessa-menu-current-panel-title"></span>'), d(
							".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title").html(
							u)) : d(
						".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title").remove(),
					d(".lynessa-menu-panels-actions-wrap .lynessa-menu-prev-panel").remove(), d(
						".lynessa-menu-panels-actions-wrap").prepend('<a data-prenttitle="' + i +
						'" class="lynessa-menu-prev-panel" href="#' + t.attr("id") +
						'" data-cur-panel="' + l + '" data-target="#' + t.attr("id") + '"></a>')
			}
			n.preventDefault()
		}), d(document).on("click", ".lynessa-menu-prev-panel", function (n) {
			var e = d(this),
				a = e.attr("data-cur-panel"),
				t = e.attr("href");
			d(a).removeClass("lynessa-menu-panel-opened").addClass("lynessa-menu-hidden"), d(t)
				.addClass("lynessa-menu-panel-opened").removeClass("lynessa-menu-sub-opened");
			var l = d(t).attr("data-parent-panel");
			if (void 0 === l || 0 == typeof l) d(
				".lynessa-menu-panels-actions-wrap .lynessa-menu-prev-panel").remove(), d(
				".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title").remove();
			else {
				d(".lynessa-menu-panels-actions-wrap .lynessa-menu-prev-panel").attr("href", "#" + l)
					.attr("data-cur-panel", t).attr("data-target", "#" + l);
				var u = d("#" + l).find('.lynessa-menu-next-panel[data-target="' + t + '"]').closest(
					".menu-item").find(".lynessa-menu-item-title").attr("data-title");
				void 0 !== (u = d(this).data("prenttitle")) && 0 != typeof u ? (d(
						".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title")
					.length || d(".lynessa-menu-panels-actions-wrap").prepend(
						'<span class="lynessa-menu-current-panel-title"></span>'), d(
						".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title").html(
						u)) : d(
					".lynessa-menu-panels-actions-wrap .lynessa-menu-current-panel-title").remove()
			}
			n.preventDefault()
		})
	}), d(window).on("resize", function () {
		n(), e()
	}), d(window).load(async () => {
		await head.getGoodsCategoryList()
		await a()
	})
}(jQuery);
jQuery(function (e) {
	"use strict";

	e("body").on("init", ".lynessa-tabs-wrapper, .lynessa-tabs", function () {
		e(".lynessa-tab, .lynessa-tabs .panel:not(.panel .panel)").hide();
		var a = window.location.hash,
			t = window.location.href,
			n = e(this).find(".lynessa-tabs, ul.tabs").first();
		0 <= a.toLowerCase().indexOf("comment-") || "#reviews" === a || "#tab-reviews" === a || 0 < t
			.indexOf("comment-page-") || 0 < t.indexOf("cpage=") ? n.find("li.reviews_tab a").click() :
			"#tab-additional_information" === a ? n.find("li.additional_information_tab a").click() : n
			.find("li:first a").click()
	}).on("click", ".lynessa-tabs li a, ul.tabs li a", function (a) {
		a.preventDefault();
		var t = e(this),
			n = t.closest(".lynessa-tabs-wrapper, .lynessa-tabs");
		n.find(".lynessa-tabs, ul.tabs").find("li").removeClass("active"), n.find(
				".lynessa-tab, .panel:not(.panel .panel)").hide(), t.closest("li").addClass("active"), n
			.find(t.attr("href")).show()
	}).on("click", "a.lynessa-review-link", function () {
		return e(".reviews_tab a").click(), !0
	}), e(".lynessa-tabs-wrapper, .lynessa-tabs").trigger("init"), 0 < e(
		".flex-control-nav, .lynessa-product-gallery__wrapper").length && (e(
		".lynessa-product-gallery__wrapper").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: !1,
		draggable: !1,
		fade: !0,
		asNavFor: ".flex-control-nav"
	}), e(".flex-control-nav").slick({
		vertical: !0,
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: ".lynessa-product-gallery__wrapper",
		dots: !1,
		arrows: !0,
		prevArrow: '<span class="fa fa-angle-up prev"></span>',
		nextArrow: '<span class="fa fa-angle-down next"></span>',
		focusOnSelect: !0,
		slidesMargin: 14,
		responsive: [{
			breakpoint: 991,
			settings: {
				vertical: !1,
				slidesToShow: 3,
				prevArrow: '<span class="fa fa-angle-left prev"></span>',
				nextArrow: '<span class="fa fa-angle-right next"></span>'
			}
		}]
	})), e(document).ready(function () {
		e(document).on("click", ".comment-form-rating p.stars a", function () {
			var a = e(this),
				t = e(this).closest("#star-rating").find("#rating"),
				n = e(this).closest(".stars");
			return t.val(a.text()), a.siblings("a").removeClass("active"), a.addClass("active"),
				n.addClass("selected"), !1
		}) //,e(".lynessa-product-gallery .lynessa-product-gallery__image").zoom()
	}), $(".price_slider").each(function () {
		var a = $(this).data("min"),
			t = $(this).data("max"),
			e = $(this).data("unit"),
			n = $(this).data("value-min"),
			s = $(this).data("value-max"),
			l = $(this);
		$(this).slider({
			range: !0,
			min: a,
			max: t,
			values: [n, s],
			slide: function (a, t) {
				var n =
					'<button type="submit" class="button">Filter</button><div class="price_label">Price: <span class="from">' +
					e + t.values[0] + ' </span> — <span class="to">' + e + t.values[1] +
					"</span></div>";
				l.closest(".price_slider_wrapper").find(".price_slider_amount").html(n)
			}
		})
	}), $(document).on("click", function (a) {
		var t = $(a.target).closest(".lynessa-dropdown"),
			n = $(".lynessa-dropdown");
		0 < t.length ? (n.not(t).removeClass("open"), ($(a.target).is(
			'[data-lynessa="lynessa-dropdown"]') || 0 < $(a.target).closest(
			'[data-lynessa="lynessa-dropdown"]').length) && (t.toggleClass("open"), a
			.preventDefault())) : $(".lynessa-dropdown").removeClass("open")
	}), $(document).on("click", ".lynessa-tabs .tab-link a, .lynessa-accordion .panel-heading a", function (
		a) {
		a.preventDefault();
		var t = $(this),
			n = t.data("id"),
			e = t.attr("href"),
			s = t.data("ajax"),
			l = t.data("section"),
			i = t.data("animate"),
			o = t.closest(".tab-link,.lynessa-accordion").find("a.loaded").attr("href");
		1 != s || t.hasClass("loaded") ? (t.parent().addClass("active").siblings().removeClass(
			"active"), $(e).addClass("active").siblings().removeClass("active"), t.closest(
			".panel-default").addClass("active").siblings().removeClass("active"), t.closest(
			".lynessa-accordion").find(e).slideDown(400), t.closest(".lynessa-accordion").find(
			".panel-collapse").not(e).slideUp(400), lynessa_animation_tabs($(e), i)) : ($(e)
			.closest(".tab-container,.lynessa-accordion").addClass("loading"), t.parent().addClass(
				"active").siblings().removeClass("active"), $.ajax({
				type: "POST",
				url: lynessa_ajax_frontend.ajaxurl,
				data: {
					action: "lynessa_ajax_tabs",
					security: lynessa_ajax_frontend.security,
					id: n,
					section_id: l
				},
				success: function (a) {
					"ok" == a.success ? ($(e).html($(a.html).find(".az_tta-panel-body")
								.html()), $(e).closest(".tab-container,.lynessa-accordion")
							.removeClass("loading"), $('[href="' + o + '"]').removeClass(
								"loaded"), lynessa_countdown($(e).find(
								".lynessa-countdown")), lynessa_init_carousel($(e).find(
								".owl-slick")), 0 < $(".owl-slick .product-item").length &&
							lynessa_hover_product_item($(e).find(
								".owl-slick .row-item,.owl-slick .product-item.style-1,.owl-slick .product-item.style-2,.owl-slick .product-item.style-3,.owl-slick .product-item.style-4"
							)), 0 < $(e).find(".variations_form").length && $(e).find(
								".variations_form").each(function () {
								$(this).wc_variation_form()
							}), $(e).trigger("lynessa_ajax_tabs_complete"), t.addClass(
								"loaded"), $(o).html("")) : ($(e).closest(
								".tab-container,.lynessa-accordion").removeClass("loading"),
							$(e).html("<strong>Error: Can not Load Data ...</strong>")), t
						.closest(".panel-default").addClass("active").siblings()
						.removeClass("active"), t.closest(".lynessa-accordion").find(e)
						.slideDown(400), t.closest(".lynessa-accordion").find(
							".panel-collapse").not(e).slideUp(400)
				},
				complete: function () {
					$(e).addClass("active").siblings().removeClass("active"), setTimeout(
						function (a) {
							lynessa_animation_tabs($(e), i)
						}, 10)
				}
			}))
	}), $(document).on("click", "a.backtotop", function (a) {
		$("html, body").animate({ scrollTop: 0 }, 800), a.preventDefault()
	}), $(document).on("scroll", function () {
		200 < $(window).scrollTop() ? $(".backtotop").addClass("active") : $(".backtotop").removeClass(
			"active")
	}), $(document).on("click", ".quantity .quantity-plus", function (a) {
		// var t = $(this).closest(".quantity").find("input.qty"),
		// 	n = parseInt(t.val()),
		// 	e = parseInt(t.attr("max"));
		// n += parseInt(t.data("step")), e && e < n && (n = e), t.val(n), t.trigger("change"), a
		// 	.preventDefault()
	}), $(document).on("change", function () {
		$(".quantity").each(function () {
			var a = $(this).find("input.qty"),
				t = a.val();
			parseInt(a.attr("max")) < t ? $(this).find(".quantity-plus").css("pointer-events",
				"none") : $(this).find(".quantity-plus").css("pointer-events", "auto")
		})
	}), $(document).on("click", ".quantity .quantity-minus", function (a) {
		// var t = $(this).closest(".quantity").find("input.qty"),
		// 	n = parseInt(t.val()),
		// 	e = parseInt(t.attr("min"));
		// n -= parseInt(t.data("step")), e && n < e && (n = e), !e && n < 0 && (n = 0), t.val(n), t
		// 	.trigger("change"), a.preventDefault()
	})
});


jQuery(function (u) {
	"use strict";
	window.addEventListener("load", function (t) {
		var s, e, a, i;
		s = u(".lynessa-mapper"), e = u(".lynessa-pin"), a = s.data("width"), i = s.data("height"), e
			.each(function () {
				var t = u(this).data("top"),
					s = u(this).data("left");
				t.substr && "%" != t.substr(-1) && (t = t / i * 100 + "px"), s.substr && "%" != s
					.substr(-1) && (s = s / a * 100 + "px"), u(this).css({
						top: t,
						left: s
					})
			}),
			function () {
				var t = u(".lynessa-pin .action-pin");
				t.on("click", function () {
					var t = u(this),
						s = t.siblings(".lynessa-popup");
					if (s.length) {
						var e = t.closest(".lynessa-pin");
						if (e.hasClass("actived")) return e.removeClass("actived"),
							void setTimeout(function () {
								s.removeAttr("style")
							}, 300);
						var a = e.data("position");
						s.css({ transition: "none", width: "", left: "" }), setTimeout(
								function () {
									s.css({ transition: "" })
								}), s.removeClass("remove-redirect right left top bottom"), s
							.addClass(a);
						var i = t[0].getBoundingClientRect(),
							l = (s[0].getBoundingClientRect(), s.width()),
							o = s.height(),
							r = u(window).width(),
							n = !1;
						if (r < l) s.removeClass("right left top").addClass("bottom"), s.width(
							r), n = !0;
						else switch (a) {
							case "right":
								r - (i.right + l + 8) < 0 && (l > i.right ? (s.removeClass(
										"right").addClass("bottom"), n = !1) : s
									.removeClass("right").addClass("left"));
								break;
							case "left":
								i.left - l + 8 < 0 && (l > i.right ? (s.removeClass("left")
									.addClass("bottom"), n = !1) : s.removeClass(
									"left").addClass("right"));
								break;
							case "top":
								parseInt(e.css("top")) < o && s.removeClass("top").addClass(
									"bottom");
								break;
							case "bottom":
								parseInt(e.css("bottom")) < o && s.removeClass("bottom")
									.addClass("top")
						}
						if (s.hasClass("top") || s.hasClass("bottom")) {
							s.css("left", 0);
							var c = s.offset();
							if (c.left <= 0) s.css({ left: -c.left }), s.addClass(
								"remove-redirect");
							else {
								if (n) var f = c.left + r;
								else f = c.left + l;
								if (r < f) {
									var d = r - f;
									s.css({ left: d }), s.addClass("remove-redirect")
								} else s.css("left", "")
							}
						}
						if (u(".content-text").css({
								"max-height": l - 80 + "px",
								overflow: "auto"
							}), u(".lynessa-mapper .lynessa-pin .lynessa-popup-header h2").css(
								"max-width", l - 10), s.hasClass("lynessa-image")) {
							var m = s.find(".lynessa-popup-header").outerHeight(!0);
							s.find(".lynessa-popup-main").css("height", o - m)
						}
						setTimeout(function () {
							u(".lynessa-mapper .lynessa-pin.actived").removeClass(
								"actived"), e.addClass("actived")
						}, 300)
					}
				}), u(".lynessa-pin .close-modal").on("click", function () {
					var t = u(this).closest(".lynessa-pin"),
						s = t.find(".lynessa-popup");
					t.removeClass("actived"), setTimeout(function () {
						s.removeAttr("style")
					}, 300)
				});
				var s = "blur(2px)",
					e = "grayscale(100%)";
				t.hover(function () {
					var t = u(this);
					t.closest(".blur").children("img").css("filter", s).css("webkitFilter", s)
						.css("mozFilter", s).css("oFilter", s).css("msFilter", s), t.closest(
							".gray").children("img").css("filter", e).css("webkitFilter", e)
						.css("mozFilter", e).css("oFilter", e).css("msFilter", e), t.closest(
							".mask").children(".mask").css("opacity", 1)
				}, function () {
					var t = u(this);
					t.closest(".lynessa-mapper").children("img").removeAttr("style"), t.closest(
						".mask").children(".mask").removeAttr("style")
				})
			}()
	}, !1)
});