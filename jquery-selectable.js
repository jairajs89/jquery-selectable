(function($){
	$.fn.selectable=function(s) {
		return this.each( s ?
			function() {
				this.onselectstart = null;
				this.unselectable =
					this.style.MozUserSelect =
					this.style.webkitUserSelect =
					this.style.userSelect = '';
			} : function() {
				this.onselectstart = function(){
					return false;
				};
				this.unselectable = 'on';
				this.style.MozUserSelect =
					this.style.webkitUserSelect =
					this.style.userSelect = 'none';
			}
		)
	}
})(jQuery);
