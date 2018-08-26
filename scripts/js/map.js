	$("#filename").change(function (e) {
		if (e.target.files != undefined) {
			var reader = new FileReader();
			reader.onload = function (e) {

				var rawValue = e.target.result;
				var csv = rawValue.replace(/^[\s\r\n]+/, "").replace(/[\s\r\n]+$/, "");
				var lines = csv.split(/\r?\n/);
				var len = lines.length;
				var a = [];
				var lineNumber = 0;
				var outputArea = document.getElementById("outputArea");

				function parseNestedCount(lineText) {
					var m = lineText.match(/^,*/);
					return m[0].length;
				}

				function parseLineDescription(lineText, nestCount) {
					var s = lineText.substring(nestCount, lineText.length);
					return s.replace(/,+$/, "");
				}

				function parseList() {
					var line = lines[lineNumber], nestCount = parseNestedCount(line);a.push("<ul><li><span>");
					a.push(parseLineDescription(line, nestCount));
					a.push("</span>"); //closing tag on child elelment if needed
					for (lineNumber++; lineNumber < len; lineNumber++) {
						line = lines[lineNumber];
						var n = parseNestedCount(line);
						if (n > nestCount) {
							parseList();
						} else if (n === nestCount) {
							a.push("</li><li><span>");
							a.push(parseLineDescription(line, nestCount));
							a.push("</span>"); //closing tag on child elelment if needed
						} else {
							lineNumber--;
							break;
						}
					}
				  a.push("</ul>");
				}

				parseList();
				outputArea.innerHTML = a.join("");
				
				$(function hider() {
					$("div.fileUpload").hide();
					$("ul").css('display', '');
	   				$("li").children('ul').hide();
	   				$("li").on('click', function (event) {
					    $(this).children('ul').slideToggle(350);
					    event.stopPropagation();
					});
					
					$( "li" ).has( "span" ).addClass( "end" );
					$( "li" ).has( "ul" ).removeAttr( "class" );

				});
			};
			reader.readAsText(e.target.files.item(0));
		}
	});
	$(function specialeffects() {
		$("li").on('click', function (event) {
		    $(this).children('ul').slideToggle(350);
		    event.stopPropagation();
		});
		$("#show").on('click', function (event) {
			$('ul ul').show(350);
			event.stopPropagation();
		});
		$("#hide").on('click', function (event) {
			$('ul ul').hide(350);
			event.stopPropagation();
		});

	});

