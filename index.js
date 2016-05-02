//=========CONTENT SCRIPT============//

if(controllers.botState.storageContent != null){ //Executes the current sequence
	var moduleName = controllers.botState.storageContent.moduleName
	var sequenceName = controllers.botState.storageContent.sequenceName
	var currentSequence = $jSpaghetti.module(moduleName).sequence(sequenceName)
	currentSequence.run()
	currentSequence.events.addEventListener("terminated", function(){
		controllers.functions.resetBotAndShowPanel()
	})
} else {
	//Put here the sequences that must be running every time.
}

    
