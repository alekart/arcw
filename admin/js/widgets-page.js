! function(a) {
    
    function b(a) {
        var b = a.closest(".accordion-section"),
            e = b.closest(".accordion-container").find(".open"),
            f = b.find(d);
        if (!b.hasClass("cannot-expand")) return b.hasClass("control-panel") ? void c(b) : void(b.hasClass("open") ? (b.toggleClass("open"), f.toggle(!0).slideToggle(150)) : (e.removeClass("open"), e.find(d).show().slideUp(150), f.toggle(!1).slideToggle(150), b.toggleClass("open")))
    }

    function c(a) {
        var b, c, e = a.closest(".accordion-section"),
            f = e.closest(".wp-full-overlay"),
            g = e.closest(".accordion-container"),
            h = g.find(".open"),
            i = f.find("#customize-theme-controls > ul > .accordion-section > .accordion-section-title").add("#customize-info > .accordion-section-title"),
            j = f.find(".control-panel-back"),
            k = e.find(".accordion-section-title").first(),
            l = e.find(".control-panel-content");
        e.hasClass("current-panel") ? (e.toggleClass("current-panel"), f.toggleClass("in-sub-panel"), l.delay(180).hide(0, function() {
            l.css("margin-top", "inherit")
        }), i.attr("tabindex", "0"), j.attr("tabindex", "-1"), k.focus(), g.scrollTop(0)) : (h.removeClass("open"), h.find(d).show().slideUp(0), l.show(0, function() {
            b = l.offset().top, c = g.scrollTop(), l.css("margin-top", 45 - b - c), e.toggleClass("current-panel"), f.toggleClass("in-sub-panel"), g.scrollTop(0)
        }), i.attr("tabindex", "-1"), j.attr("tabindex", "0"), j.focus())
    }
    a(document).ready(function() {
        a("body").on("click keydown", ".accordion-section-title", function(c) {
            ("keydown" !== c.type || 13 === c.which) && (c.preventDefault(), b(a(this)))
        }), a("#customize-header-actions").on("click keydown", ".control-panel-back", function(b) {
            ("keydown" !== b.type || 13 === b.which) && (b.preventDefault(), c(a(".current-panel")))
        })
    });
    var d = a(".accordion-section-content");

}(jQuery);