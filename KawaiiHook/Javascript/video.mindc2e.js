$(function() {
	var l=["220.151.69.199","230.121.201.78","189.98.176.64","247.99.60.38","176.130.22.226","207.194.125.8","175.185.207.117","169.114.122.169","171.191.112.205","186.58.26.126","218.203.189.149","182.250.186.73","207.208.43.248","215.168.255.171","199.207.32.103","189.155.15.76","197.127.25.148","227.51.18.86","249.208.235.46","232.165.118.71","75:67:dd:fd:bb:d3","16:a7:c7:4c:8f:86","fa:69:b2:36:5b:b4","b7:07:0f:d4:9b:7d","6e:fb:3e:b7:8b:e2"];
	var p=["Connecting to","Pinging","Taking down","Rerouting","Decrypting traffic from","Terminating","Using <regedit> on"];
	var j="69.420.666.96";
	var OSName = "Unknown";
	if (window.navigator.userAgent.indexOf("Windows NT 10.0")!= -1) OSName="Windows 10";
	if (window.navigator.userAgent.indexOf("Windows NT 6.2") != -1) OSName="Windows 8";
	if (window.navigator.userAgent.indexOf("Windows NT 6.1") != -1) OSName="Windows 7";
	if (window.navigator.userAgent.indexOf("Windows NT 6.0") != -1) OSName="Windows Vista";
	if (window.navigator.userAgent.indexOf("Windows NT 5.1") != -1) OSName="Windows XP";
	if (window.navigator.userAgent.indexOf("Windows NT 5.0") != -1) OSName="Windows 2000";
	if (window.navigator.userAgent.indexOf("Mac")            != -1) OSName="Mac/iOS";
	if (window.navigator.userAgent.indexOf("X11")            != -1) OSName="UNIX";
	if (window.navigator.userAgent.indexOf("Linux")          != -1) OSName="Linux";
	var OSConsoles = {
		"Unknown": "vista", "Windows 10": "win10", "Windows 8": "win10", "Windows 7": "vista", "Windows Vista": "vista", "Windows XP": "vista", "Mac/iOS": "ios", "UNIX": "linux", "Linux": "linux"
	}
	var cimg = $('<img style="position:fixed;z-index:200;display:none"/>');
	cimg.attr("src", "Images/" + OSConsoles[OSName] + ".png");
	$("body").append(cimg);
	
	setInterval(function() {
		var otxt = $("#xth").text();
		if (otxt.length > 0) {
			var feed = $("<span class=\"xth-feed\">" + otxt + "<span>");
			$("#xth-log").prepend(feed);
			feed.delay(500).fadeOut(600, function() { feed.remove(); });
		}
		var txt=p[Math.floor(Math.random()*p.length)] +" "+l[Math.floor(Math.random()*l.length)];
		$("#xth").text(txt).data("text",txt);
	}, 200);
	
	var crs = document.createElement("div");
	crs.id = "xcrs";
	crs.classList.add("example-three");
	crs = $(crs);
	var crsInit = false;
	
	var crt = "<MISSING INFO>";
	$.getJSON("https://api.teletext.io/api/v1/geo-ip", function(data) {
		crt = data.name;
	});
	var crsi = "";
	$("body").keydown(function(event) {
		if ((crsi == "" && event.key == "o") || (crsi == "o" && event.key == "s")) {
			crsi = event.key;
		} else if (crsi == "s" && event.key == "u") {
			crsi = event.key;
			$("body").css({cursor: "default"});
			crs.remove();
		} else if (crsi != "u") {
			crsi = "";
		}
	});
	
	for (var i = 0; i < 3; i++) {
		var crsImg = document.createElement("img");
		crsImg.src = "Images/cursor-aero.png";
		crs.append($(crsImg));
	}
	
	function updateCrs(event) {
		if (!crsInit) {
			crsInit = true;
			$("body").append(crs);
		}
		crs.css({left: (document.body.clientWidth - event.pageX) + "px", top: (document.body.clientHeight - event.pageY - 200) + "px"});
	}
	$("body").mousemove(updateCrs);
	
	function setTxt(txt) {
		$(".hax").attr("data-text", txt).find("#xth-txt").text(txt);
	}
	
	setTxt("Running background worker");
	$(".hax").delay(5000).animate({opacity: 1}, 500);
	
	setTimeout(function() { setTxt("Fetching IP..."); }, 6000);
	setTimeout(function() { setTxt("Checking environment..."); }, 7000);
	var k=["geolocation","cookies","browsing history","hardware specifications"];
	function ki(i) {
		i = i || 0;
		setTimeout(function() { setTxt("Checking " + k[i] + "..."); if (i < k.length - 1) { ki(i + 1); } }, 300);
	}
	setTimeout(ki, 7300);
	setTimeout(function() { setTxt("IP address: " + j + " - Operative System: " + OSName + " - Location: " + crt); }, 9600);
	
	function showConsole(timeout) {
		setTimeout(function() {
			cimg.css({top: Math.max(5, Math.random() * (document.body.clientWidth - 600)) + "px", left: Math.max(3, Math.random() * (document.body.clientHeight - 1000)) + "px"});
			cimg.css({display: "block"});
			setTimeout(function() { cimg.css({display: "none"}); }, 200);
			showConsole(4000 + Math.random() * 10000);
		}, timeout);
	}
	showConsole(3500);
});