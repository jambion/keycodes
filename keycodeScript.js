$(document).ready(function(){
	var keyCodes = {
		192: "#gAccent", 48: "#zero", 49: "#one", 50: "#two", 51: "#three", 52: "#four", 53: "#five", 
		54: "#six", 55: "#seven", 56: "#eight", 57: "#nine", 65: "#a", 66: "#b", 
		67: "#c", 68: "#d", 69: "#e", 70: "#f", 71: "#g", 72: "#h", 73: "#i", 
		74: "#j", 75: "#k", 76: "#l", 77: "#m", "swag": "nice", 78: "#n", 79: "#o", 80: "#p", 81: "#q", 
		82: "#r", 83: "#s", 84: "#t", 85: "#u", 86: "#v", 87: "#w", 88: "#x", 89: "#y", 
		90: "#z", 189: "#dash", 187: "#equals", 8: "#backspace", 9: "#tab", 219: "#leftBracket", 
		221: "#rightBracket", 220: "#backslash", 20: "#caps", 186: "#semicolon", 222: "#apostrophe", 
		13: "#enter", 16: ".shift", 188: "#comma", 190: "#period", 191: "#forwardSlash", 
		17: ".ctrl", 91: "#windows", 18: ".alt", 32: "#spacebar"
	}

	$("body").keydown(function(event){
		var eventKeyCode = event.keyCode;
		var eventKey = event.key;

		// console.log("Key: " + eventKey);
		// console.log("Key Code: " + eventKeyCode);

		if(keyCodes[eventKeyCode]){
			
			if(eventKeyCode === 32){
				$("#keyValue").text("Spacebar");
			} else {
				$("#keyValue").text(eventKey);
			}
			$("#keyCode").text(eventKeyCode);

			$(keyCodes[eventKeyCode]).fadeOut("fast", function(){
				$(keyCodes[eventKeyCode]).fadeIn("fast");
			});
		};
	});

	

});