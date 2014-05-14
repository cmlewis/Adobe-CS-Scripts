/*
    Create Guide Grid Script for Photoshop
    Use this script to easily create a grid of guides to use when creating CSS sprites or other scenarios where a grid would be useful for alignment.
    It prompts the user to enter a column width and row height.
    
    This is sprite-grid.jsx by Filip Van Tendeloo with a bit of code cleanup and addition of a prompt for row height.
    See create-guide-grid-AI.jsx for the Illustrator equivalent by Christy Lewis.
    
    Tested in Photoshop CS5.1. Should work in most relatively recent PS versions.
    
    Usage:
        - Download script and place into Program Files \ Adobe \ Adobe Photoshop CSx.x \ Presets \ Scripts
        - Restart Photoshop.
        - Choose File -> Scripts -> create-guide-grid-PS
*/

// check for document
if(app.documents.length > 0){  
	// get active document
	var activeDoc = app.activeDocument; 
	
	// get user input on column width and row height
	var colWidth = parseInt( prompt("Column width?", 16) );  
	var rowHeight = parseInt( prompt("Row height?", 16) );   
	 
	var docWidth = activeDoc.width; 
    var docHeight = activeDoc.height;
	
	// determine number of columns & rows
	var colCount = docWidth / colWidth;
    var rowCount = docHeight / rowHeight; 
	
	// create vertical guidelines
	for(i = 0; i <= colCount; ++i){  
		activeDoc.guides.add(Direction.VERTICAL, i * colWidth);  
	}  	

	// create horizontal guidelines
	for(i = 0; i <= rowCount; ++i){  
		activeDoc.guides.add(Direction.HORIZONTAL, i * rowHeight);  
	}  	
}  