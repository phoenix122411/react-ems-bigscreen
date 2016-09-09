/**
 * 波浪图
 * 基于raphaelJs
 * 2016.7
 * shown
 */
var Wave = function() {
	this.dex = [
		[1, 2, 7, 6, 1],
		[2, 3, 8, 7, 2],
		[3, 4, 9, 8, 3],
		[4, 5, 10, 9, 4],
		[6, 7, 12, 11, 6],
		[7, 8, 13, 12, 7],
		[8, 9, 14, 13, 8],
		[9, 10, 15, 14, 9],
		[11, 12, 17, 16, 11],
		[12, 13, 18, 17, 12],
		[13, 14, 19, 18, 13],
		[14, 15, 20, 19, 14],
		[16, 17, 22, 21, 16],
		[17, 18, 23, 22, 17],
		[18, 19, 24, 23, 18],
		[19, 20, 25, 24, 19]
	];
	this.wavePaper = Raphael(200, 200, 400, 400);
	this.netPaper = Raphael(186, 180, 386, 380);
	this.DATAS;
	this.COLORS;
}
Wave.prototype.init = function(config) {
	this.wavePaper = Raphael(config.wavePaper.x, config.wavePaper.y, config.wavePaper.dx, config.wavePaper.dy);
	this.netPaper = Raphael(config.netPaper.x, config.netPaper.y, config.netPaper.dx, config.netPaper.dy);
	this.DATAS=config.DATAS;
	this.COLORS=config.COLORS;
}
Wave.prototype.draw = function(blockNo) {
	this.wavePaper.clear();
	this.netPaper.clear();
	var dataArr = this.DATAS[blockNo];
	var colorArr = this.COLORS[blockNo];
	var wavePathArr = [], //图片数组
		wavecolorArr = [], //图片颜色数组
		netPathArr = []; //网格数组
	for(var i = 0; i < this.dex.length; i++) {
		var line = this.dex[i];
		var p1 = dataArr[line[0] - 1];
		var p2 = dataArr[line[1] - 1];
		var p3 = dataArr[line[2] - 1];
		var p4 = dataArr[line[3] - 1];
		var p5 = dataArr[line[4] - 1];
		var wavePath = "M " + (p1.x + 200) + "," + (p1.y + 200) + " L"
		wavePath += (p2.x + 200) + "," + (p2.y + 200) + " L"
		wavePath += (p3.x + 200) + "," + (p3.y + 200) + " L"
		wavePath += (p4.x + 200) + "," + (p4.y + 200) + " L"
		wavePath += (p5.x + 200) + "," + (p5.y + 200)
		var netPath = "M " + (p1.x + 200) + "," + (p1.y + 200) + " L"
		netPath += (p2.x + 200) + "," + (p2.y + 200) + " L"
		netPath += (p3.x + 200) + "," + (p3.y + 200) + " L"
		netPath += (p4.x + 200) + "," + (p4.y + 200) + " L"
		netPath += (p5.x + 200) + "," + (p5.y + 200)
		var wavecolor = "rgb(" + colorArr[i][0] + "," + colorArr[i][1] + "," + colorArr[i][2] + ")"
		wavePathArr[i] = wavePath;
		netPathArr[i] = netPath;
		wavecolorArr[i] = wavecolor;
	}
	for(var j = 0; j < wavePathArr.length; j++) {
		var mark = this.wavePaper.path(wavePathArr[j]);
		mark.attr({
			"stroke": "#c17763",
			"stroke-width": 1
		});
		mark.attr("fill", wavecolorArr[j]);
		var marka = this.netPaper.path(netPathArr[j]);
		marka.attr({
			"stroke": "white",
			"stroke-width": 2
		});
	}
}