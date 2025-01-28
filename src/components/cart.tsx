//  function(e, t) {
// 	var o = elementorModules.frontend.handlers.Base.extend({
// 		getDefaultSettings: function() {
// 			return {
// 				selectors: {
// 					container: ".elementor-cart__container",
// 					toggle: ".elementor-cart__toggle .elementor-button",
// 					closeButton: ".elementor-cart__close-button"
// 				},
// 				classes: {
// 					isShown: "elementor-cart--shown",
// 					lightbox: "elementor-lightbox",
// 					isHidden: "elementor-cart-hidden"
// 				}
// 			}
// 		},
// 		getDefaultElements: function() {
// 			var e = this.getSettings("selectors")
// 			  , t = {};
// 			return t.$container = this.$element.find(e.container),
// 			t.$toggle = this.$element.find(e.toggle),
// 			t.$closeButton = this.$element.find(e.closeButton),
// 			t
// 		},
// 		bindEvents: function() {
// 			var n = this
// 			  , i = n.elements.$container
// 			  , e = n.elements.$closeButton
// 			  , s = this.getSettings("classes");
// 			n.elements.$toggle.on("click", function(e) {
// 				n.elements.$toggle.hasClass(s.isHidden) || (e.preventDefault(),
// 				i.toggleClass(s.isShown))
// 			}),
// 			i.on("click", function(e) {
// 				i.hasClass(s.isShown) && i[0] === e.target && i.removeClass(s.isShown)
// 			}),
// 			e.on("click", function() {
// 				i.removeClass(s.isShown)
// 			})
