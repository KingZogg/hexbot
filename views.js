var views = {
	appendControlPanel: function(){
		var divMain = document.createElement("div")
		divMain.id = COMMAND_PANEL_DOM_ID
		divMain.className = "modal hide in"
		divMain.tabindex = "0"
		divMain['aria-hidden'] = false
		divMain.style.display = "none"
		divMain.innerHTML =
			'<div class="widget-title">' +
			'<h5>Hacker Experience Bot</h5>' +
			'<span id="' + COMMAND_PANEL_CLOSE_BUTTON_DOM_ID + '" class="btn btn-danger hide1024" style="float: right">X</span>' +
			'</div>' +
			'<div class="modal-body">' +
			'<button id="' + PERFORM_CHECK_BALANCE_ID + '" class="btn btn-success">Perform check account status missions</button> ' +
			'<button id="' + PERFORM_TRANSFER_MONEY_ID + '" class="btn btn-success">Perform transfer money missions</button><br><br>' +
			'<button id="set-cleaner" class="btn btn-success"> Clean your logs </button> ' +
			'<button id="set-victim-cleaner" class="btn btn-success" disabled> Clean victim logs </button> ' +
			'<button id="set-cleanlogin" class="btn btn-success" disabled> Clean login/hack </button> ' +
			'<button id="' + SOLVE_RIDDLE_DOM_ID + '" class="btn btn-success"> Solve puzzles </button><br><br><br>'+
			'<button id="' + PERFORM_BANK_CAMPING + '" class="btn btn-success"> Listen transfer bank logs on </button>' +
			'<input id="' + FIELD_BANK_IP_TARGET + '" class="controls fieldsContent" type="text" style="vertical-align: top; margin-left: 10px; margin-right: 10px;"> and transfer to my account: <input id="' + FIELD_MY_ACCOUNT + '" class="controls fieldsContent" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px;"><br><br>' +
			'<button id="' + PERFORM_INSTALL_SOFTWARE + '" class="btn btn-success"> Upload, install and hide this</button>' +
			'<input id="' + FIELD_SOFTWARE_TO_INSTALL + '" class="controls fieldsContent" type="text" style="vertical-align: top; margin-left: 10px; margin-right: 10px;"> software on these <input id="' + FIELD_IPS_INSTALL_TARGETS + '" class="controls fieldsContent" type="text" style="vertical-align: initial; margin-left: 10px; margin-right: 10px;"> IPs.<br>' +
			'</div>' + 
			'<div class="modal-footer">' +
			'<b>version ' + VERSION_BOT + '</b> check for new releases on <a href="https://github.com/perfilrobo/hexbot">official repository</a>' +
			'</div>';
		document.getElementsByTagName("BODY")[0].appendChild(divMain);
	},

	showControlPanel: function(){
		var element = document.getElementById(COMMAND_PANEL_DOM_ID)
		if(element){
			element.style.display = "block"
		}
	},

	hideControlPanel: function(){
		var element = document.getElementById(COMMAND_PANEL_DOM_ID)
		if(element){
			element.style.display = "none"
		}
	},

	showBotButton: function(){
		aux = document.createElement("li"); //Create a STOP BOT button
		aux.id = BOT_BUTTON_DOM_ID
		aux.className = "btn btn-danger mission-abort";
		aux.innerHTML = '<a><span class="text" style="color: white;">BOT</span></a>';
		document.getElementsByClassName("nav btn-group")[0].appendChild(aux);
	}

}