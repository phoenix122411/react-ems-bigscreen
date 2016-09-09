/**波纹图形控制器
 * shown
 * 2016.08
 */

(function(){
	var TEXTS=[];
	var WIDTH=$(window).width()
	var HEIGHT=$(window).height()
	var deltaWidth=WIDTH-750
	var deltaHeight=HEIGHT*0.3-180;
	console.log(deltaHeight);
			var config = {
				wavePaper: {
					x: 200+deltaWidth,
					y: 200+deltaHeight,
					dx: 400+deltaWidth,
					dy: 400+deltaHeight
				},
				netPaper: {
					x: 186+deltaWidth,
					y: 180+deltaHeight,
					dx: 386+deltaWidth,
					dy: 380+deltaHeight
				},
				DATAS: DATAS,
				COLORS: COLORS
			}
			var wave = new Wave();
			wave.init(config);
			var Rect;
			
			var K = -1;
			var s1 = true;
			var t1 = false;

			var I = -1;
			var s2 = true;
			var t2 = false;
			var dexer;

			function start() {
				if(t1) return;
				if(s1) {
					K++;
				} else {
					K--;
					if(K == 0) {
						s1 = !s1;
					}
				}
				if(K == DATAS.length - 1) {
					s1 = !s1;
				}
				//console.log("当前第几张" + K)
				wave.draw(K);
				setTimeout(start, 100);
			}

			function stop() {
				t1 = true; //暂停图形动画
				t2 = true; //暂停外部定时器
				dexer = K;
				//wave.draw(I);
				try{
					
				}catch(e){
					
				}
				var text=TEXTS[I]||'暂无数据'
				showWords(text);
				setTimeout(function() { //2秒后重新开始
					t1 = false;
					t2 = false;
					Rect.remove();
					Text.remove()
					start();
				}, 2000);
			}
			

			function outInterval() {
				if(t2) return;
				if(s2) {
					I++;
				} else {
					I--;
					if(I == 0) {
						s2 = !s2;
					}
				}
				if(I == DATAS.length - 1) {
					s2 = !s2;
				}
				//console.log("当前第几个暂停" + I)
				stop(I);
				setTimeout(outInterval, 5000);
			}
			
			
			$.ajax({
				type:"get",
				url:"",
				//async:false,
				success:function(data){
					TEXTS=["江苏:12","浙江:2"]
					start();
			outInterval();
				}
			});
			
			
			

			function showWords(text) {
			var x=	config.wavePaper.dx;
			var y=	config.wavePaper.dy;
				var wordRect = {
					x: x -70-deltaWidth,
					y: y -300-deltaHeight,
					w: 70,
					h: 40
				};
				var textAttr = {
					"fill": "#fff",
					"font-size": "16px",
					"cursor": "pointer"
				};
				Rect = wave.wavePaper.rect(wordRect.x, wordRect.y, wordRect.w, wordRect.h).attr({
					fill: "#FA3F4D",
					stroke: "red",
					"stroke-width": 1,
					"stroke-opacity": 0.5
				})
				Text=wave.wavePaper.text((wordRect.x+35 ), (wordRect.y+20), text).attr(textAttr);
			}
		})()