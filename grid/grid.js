(function($) {
	var $g = $(".grid");

	// 字体大小
	$(":input[name=configFontSize]").on("change",function(){
		console.log(this.value);
		$(this).next().text(this.value);
		document.body.style.fontSize = this.value + "px";
	});

	// 行高
	$(":input[name=configLineHeight]").on("change",function(){
		console.log(this.value);
		$(this).next().text(this.value);
		document.body.style.lineHeight = this.value;
	});

	// 标题行
	$(":radio[name=configHeaderWrap]").on("change",function(){
		console.log(this.value);
		var wrap = this.value=='1';
		$g.find(">table>thead>tr").toggleClass("nowrap",!wrap).toggleClass("auotwrap",wrap);
	});
	$(":radio[name=configHeaderCellHAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>thead>tr")
			.removeClass("left center right justify")
			.toggleClass(this.value,true);
	});
	$(":radio[name=configHeaderCellVAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>thead>tr")
			.removeClass("top middle bottom")
			.toggleClass(this.value,true);
	});

	// 数据行
	$(":radio[name=configCellWrap]").on("change",function(){
		console.log(this.value);
		var wrap = this.value=='1';
		$g.find(">table>tbody>tr").toggleClass("nowrap",!wrap).toggleClass("auotwrap",wrap);
	});
	$(":radio[name=configCellHAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>tbody>tr")
			.removeClass("left center right justify")
			.toggleClass(this.value,true);
	});
	$(":radio[name=configCellVAlign]").on("change",function(){
		console.log(this.value);
		$g.find(">table>tbody>tr")
			.removeClass("top middle bottom")
			.toggleClass(this.value,true);
	});
})(jQuery);