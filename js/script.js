			$(document).ready(function(){
				//initialize movement
				currPos = 0;
				//infoset
				infoSet = 0;
				sInfo = 0;
				//resize
				resizeAt = 500;
				//setup pagination links
				$(".paginate a").each(function(){
					if($(this).parents("li").find("#right").length > 0){
						$(this).addClass("paginater");
					}else{
						$(this).addClass("paginatel");
					}
				});
			});
			$(window).load(function(){
				finallen = $("img").length;
				loadlen = 0;
				//set originals
				if($("img").length > 0){
					$("img").each(function(){
						var iw, ih;
						t = $(this);
						timg = new Image();
						timg.onload = function(){
							iw = this.width;
							ih = this.height;
							tsrc = $(this).attr("src");
							$("img").each(function(){
								if($(this).attr("src") == tsrc){
									$(this).attr("height",ih);
									$(this).attr("width",iw);
								}
							});
							loadlen++;
							if(loadlen == finallen){
								//set canvas
								convertCanvas($("#infinite"));
								$(".post").find(".info").each(function(){
									findDarkness($(this));
								});
								//move images/videos and put in sections
								$(".post").each(function(){
									$(this).find("img, video, canvas, object, iframe").appendTo($(this).find(".images")).wrap("<div class='section'>").wrap("<div class='overflow' />");
								});
								//hide info
								$(".info").hide();
								$(".info").each(function(){
									if($(this).parents(".post").find(".section").length <= 0){
										$(this).show().addClass("section").css("padding","0 20px");
									}
								});
								//colorize
								colorize();
								//moveable
								moveable();
								//responsive
								responsive();
								//remove empty .info
								$(".info").each(function(){
									if($.trim($(this).text()) == ""){
										$(this).remove();
									}else{
										$(this).wrapInner("<div class='hold' />");
									}
								});
								//setup child lists
								$("#nav ul li ul").each(function(){
									a = $(this).parents("li").find("a").eq(0);
									a.attr("href","javascript:void(0)");
									$(this).parents("li").find("a").click(function(){
										if($(this).parents("li").find("ul").is(":visible")){
											$(this).parents("li").find("ul").hide();
										}else{
											$(this).parents("li").find("ul").show();
										}
									});
								});
								//set #showInfo
								$("#showInfo").html($(".section").eq(currPos).parents(".post").find(".info").html());
								if($(".section").eq(currPos).hasClass("info") || sInfo == 1){
									$("#showInfo").show();
								}else{
									//$("#showInfo").hide();
								}
								if($(".section").eq(currPos).hasClass("info")){
									//$("#info").hide();
								}else{
									$("#info").show();
								}
								//cover
								$("#cover").delay(500).fadeOut();
							}
						}
						timg.src = $(this).attr("src");
					});
				}else{
								//move images/videos and put in sections
								$(".post").each(function(){
									$(this).find("img, video, canvas, object, iframe").appendTo($(this).find(".images")).wrap("<div class='section'>").wrap("<div class='overflow' />");
								});
								//hide info
								$(".info").hide();
								$(".info").each(function(){
									if($(this).parents(".post").find(".section").length <= 0){
										$(this).show().addClass("section").css("padding","0 20px");
									}
								});
								//colorize
								colorize();
								//moveable
								moveable();
								//responsive
								responsive();
								//remove empty .info
								$(".info").each(function(){
									if($.trim($(this).text()) == ""){
										$(this).remove();
									}else{
										$(this).wrapInner("<div class='hold' />");
									}
								});
								//setup child lists
								$("#nav ul li ul").each(function(){
									a = $(this).parents("li").find("a").eq(0);
									a.attr("href","javascript:void(0)");
									$(this).parents("li").find("a").click(function(){
										if($(this).parents("li").find("ul").is(":visible")){
											$(this).parents("li").find("ul").hide();
										}else{
											$(this).parents("li").find("ul").show();
										}
									});
								});
								//set #showInfo
								$("#showInfo").html($(".section").eq(currPos).parents(".post").find(".info").html());
								if($(".section").eq(currPos).hasClass("info") || sInfo == 1){
									$("#showInfo").show();
								}else{
									//$("#showInfo").hide();
								}
								if($(".section").eq(currPos).hasClass("info")){
									//$("#info").hide();
								}else{
									$("#info").show();
								}
								
								//cover
								$("#cover").delay(500).fadeOut();
				}
				
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
										$("img, video, canvas, object, embed, iframe").each(function(){
											
											$(this).click(function(e){
												if(e.clientX <= ($(window).width()/2)){
													moveLeft();
												}else{
													moveRight();
												}
											});
										});
									}
			});
			$(window).resize(function(){
				//moveable
				moveable();
				//responsive
				responsive();
				//keep scroll position
				$("#infinite").css("margin-left",$("#infinite").css("margin-left").replace("px","") - $(".section").eq(currPos).offset().left+"px");
			});
			/*$(window).touchwipe({
				wipeLeft: function(){ moveRight(); },
				wipeRight: function(){ moveLeft(); },
				min_move_x: 100,
				min_move_y: 100,
				preventDefaultEvents: true
			});*/
			$(window).keydown(function(i){
				//alert(i.which);
				//37 i.e. left
				if(i.which == 37){
					i.preventDefault();
					$("#left").addClass("temp");
					moveLeft();
				}
				//39 i.e. right
				if(i.which == 39){
					i.preventDefault();
					$("#right").addClass("temp");
					moveRight();
				}
				//38 i.e. up
				if(i.which == 38){

				}
				//40 i.e. down
				if(i.which == 40){

				}
			});
			fireOnce = 0;
			$(window).on("mousewheel", function(event, delta, deltaX, deltaY) {
				if(deltaX > 0 || deltaY < 0){
					if(fireOnce == 0){
						scrollMoveRight();
					}
					fireOnce++;
				}else{
					if(fireOnce == 0){
						scrollMoveLeft();
					}
					fireOnce++;
				}
			});
			$("#info").click(function(){
				if($("#showInfo").is(":visible")){
					$("#showInfo").hide();
					$(this).text("Show Info");
					sInfo = 0;
				}else{
					$("#showInfo").show();
					$(this).text("Hide Info");
					sInfo = 1;
				}
			});
			$("#left").click(function(){
				moveLeft();
			});
			$("#right").click(function(){
				moveRight();
			});
			//colorize
			function colorize(){
				if($(".section").eq(currPos).find(".tllight").length > 0 || $(".section").eq(currPos).find(".tldark").length > 0 || $(".section").eq(currPos).find(".trlight").length > 0 || $(".section").eq(currPos).find(".trdark").length > 0){
					if($(".section").eq(currPos).find(".tllight").length > 0){
						$("#title, #showInfo").removeClass("light").removeClass("dark").addClass("light");
					}
					if($(".section").eq(currPos).find(".tldark").length > 0){
						$("#title, #showInfo").removeClass("light").removeClass("dark").addClass("dark");
					}
					if($(window).width() < resizeAt){
						if($(".section").eq(currPos).find(".tllight").length > 0){
							$("#nav").removeClass("light").removeClass("dark").addClass("light");
						}
						if($(".section").eq(currPos).find(".tldark").length > 0){
							$("#nav").removeClass("light").removeClass("dark").addClass("dark");
						}
					}else{
						if($(".section").eq(currPos).find(".trlight").length > 0){
							$("#nav").removeClass("light").removeClass("dark").addClass("light");
						}
						if($(".section").eq(currPos).find(".trdark").length > 0){
							$("#nav").removeClass("light").removeClass("dark").addClass("dark");
						}
					}
				}else{
					if($(".section").hasClass("info")){
						$("#title, #showInfo").removeClass("light").removeClass("dark").addClass("light");
						$("#nav").removeClass("light").removeClass("dark").addClass("light");
					}else{
						$("#title, #showInfo").removeClass("light").removeClass("dark").addClass("dark");
						$("#nav").removeClass("light").removeClass("dark").addClass("dark");
					}
				}
			}
			//responsive
			//initiate tip variable
			var arrow;
			function responsive(){
				if($(window).width() < resizeAt){
					$("body").addClass("responsive");
				}else{
					$("body").removeClass("responsive");
				}
			}
			function displayPagination(dir){
				if(dir=="left"){
					$(".paginatel").css("display","block");
				}else{
					$(".paginater").css("display","block");
				}
			}
			function hidePagination(){
				$(".paginate a").hide();
			}
			function scrollMoveLeft(){
				moveLeft();
				setTimeout(function(){ fireOnce = 0 },1000);
			}
			function scrollMoveRight(){
				moveRight();
				setTimeout(function(){ fireOnce = 0 },1000);
			}
			function moveLeft(){
				if(currPos != 0){
					if(!$(".paginate a").is(":visible")){
						currPos--;
						nextPos = $("#infinite").css("margin-left").replace("px","") - $(".section").eq(currPos).offset().left;
						$("#infinite").animate({
							"margin-left":nextPos+"px"
						});
						if($(".section").eq(currPos).hasClass("info") || sInfo == 1){
							$("#showInfo").show();
						}else{
							$("#showInfo").hide();
						}
						if($(".section").eq(currPos).hasClass("info")){
							$("#info").hide();
						}else{
							$("#info").show();
						}
					}else{
						hidePagination();
					}
					//colorize
					colorize();
					//set #showInfo
					$("#showInfo").html($(".section").eq(currPos).parents(".post").find(".info").html());
				}else{
					displayPagination("left");
				}
			}
			function moveRight(){
				if(currPos != $(".section").length-1){
					if(!$(".paginate a").is(":visible")){
						currPos++;
						nextPos = $("#infinite").css("margin-left").replace("px","") - $(".section").eq(currPos).offset().left;
						$("#infinite").animate({
							"margin-left":nextPos+"px"
						});
						if($(".section").eq(currPos).hasClass("info") || sInfo == 1){
							$("#showInfo").show();
						}else{
							$("#showInfo").hide();
						}
						if($(".section").eq(currPos).hasClass("info")){
							$("#info").hide();
						}else{
							$("#info").show();
						}
					}else{
						hidePagination();
					}
					//colorize
					colorize();
					//set #showInfo
					$("#showInfo").html($(".section").eq(currPos).parents(".post").find(".info").html());
				}else{
					displayPagination("right");
				}
			}
			function convertCanvas(t){
				i=0;
				if(!!document.createElement("canvas").getContext){
					t.find("img").each(function(){
						tt = $(this);
						w = tt.attr("width");
						h = tt.attr("height");
						$(this).parents(".post").find(".info").append("<canvas id='c"+i+"' class='ce' width='"+w+"' height='"+h+"' />");
						cid = document.getElementById("c"+i);
						cc = cid.getContext("2d");
						img = new Image();
						img.src = $(this).attr("src");
						cc.drawImage(img,0,0);
						em = 0;
						try{
							idata = cc.getImageData(0,0,w,h);
						}catch(e){
							em = 1;
						}
						if(em==0){
							tt.remove();
						}else{
							$("#c"+i).remove();
						}
						i++;
					});
				}
			}
			function findDarkness(t){
				t.find("canvas").each(function(){
					tt = $(this);
					cid = document.getElementById(tt.attr("id"));
					cc = cid.getContext("2d");
					//topLeft
					if(tt.width() > 300){
						w = 300;
					}else{
						w = tt.width();
					}
					if(tt.width() > 100){
						h = 100;
					}else{
						h = tt.height();
					}
					idata = cc.getImageData(0,0,w,h);
					d = 0;
					for(a=0;a<(w*h*4);a+=4){
						d += ((.2126*idata.data[a]) + (.7152*idata.data[a+1]) + (.0722*idata.data[a+2]));
					}
					d = d/(w*h);
					if(d >= 100){
						tt.addClass("tllight");
					}else{
						tt.addClass("tldark");
					}
					
					//topRight
					if(tt.width() > 500){
						w = 500;
					}else{
						w = tt.width();
					}
					if(tt.width() > 100){
						h = 100;
					}else{
						h = tt.height();
					}
					if((tt.width()-w) > 0){
						sx = tt.width()-w;
					}else{
						sx = 0; 
					}
					idata = cc.getImageData(sx,0,w,h);
					d = 0;
					for(a=0;a<(w*h*4);a+=4){
						d += ((.2126*idata.data[a]) + (.7152*idata.data[a+1]) + (.0722*idata.data[a+2]));
					}
					d = d/(w*h);
					if(d >= 100){
						tt.addClass("trlight");
					}else{
						tt.addClass("trdark");
					}
				});
			}
			function moveable(){
				//set section widths/height
				$(".section,.overflow").width($(window).width());
				$(".section").height($(window).height());
				$(".info").width($(window).width()-40);
				//resize images
				$(".overflow").find("img, video, canvas, object, embed, iframe").each(function(){
					ww = $(window).width();
					wh = $(window).height();
					iw = $(this).attr("width");
					ih = $(this).attr("height");
					rw = ww/iw;
					rh = wh/ih;
					if(rh >= rw){
						nw = iw*rh;
						nh = ih*rh;
						$(this).width(nw);
						$(this).height(nh);
						//set .overflow height
						$(this).parents(".overflow").width(nw+(nw-$(window).width())-2);
						$(this).parents(".overflow").height(nh+(nh-$(window).height())-2);
						//center image within .overflow
						ml = (nw-$(window).width());
						mu = (nh-$(window).height());
						ml2 = (nw-$(window).width())/2;
						mu2 = (nh-$(window).height())/2;
						$(this).css("left",ml2+"px");
						$(this).css("top",mu2+"px");
						//reposition .overflow
						$(this).parents(".overflow").css("left","-"+ml+"px");
						$(this).parents(".overflow").css("top","-"+mu+"px");
					}else{
						nw = iw*rw;
						nh = ih*rw;
						$(this).width(nw);
						$(this).height(nh);
						//set .overflow height
						$(this).parents(".overflow").width(nw+(nw-$(window).width())-2);
						$(this).parents(".overflow").height(nh+(nh-$(window).height())-2);
						//center image within .overflow
						ml = (nw-$(window).width());
						mu = (nh-$(window).height());
						ml2 = (nw-$(window).width())/2;
						mu2 = (nh-$(window).height())/2;
						$(this).css("left",ml2+"px");
						$(this).css("top",mu2+"px");
						//reposition .overflow
						$(this).parents(".overflow").css("left","-"+ml+"px");
						$(this).parents(".overflow").css("top","-"+mu+"px");
					}
					//make draggable
					pc = $(this).parents(".overflow");
					$(this).draggable({ containment: pc });
				});
			}