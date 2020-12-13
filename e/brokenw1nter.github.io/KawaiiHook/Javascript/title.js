	var scrl = " < KawaiiHook > ~ ";
	function scrlsts() {
	 scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
	 document.title = scrl;
	 setTimeout("scrlsts()", 300);
	}