/*
    Create Guide Grid Script for Illustrator
    Use this script to easily create a grid of guides to use when creating CSS sprites or other scenarios where a grid would be useful for alignment.
    It prompts the user to enter a column width and row height.
    
    This is the Illustrator equivalent of sprite-grid.jsx by Filip Van Tendeloo.
    Created by Christy Lewis.
    
    Tested in Illustrator CS5.1. Should work in most relatively recent AI versions.
    
    Usage:
        - Download script and place into Program Files \ Adobe \ Adobe Illustrator CSx.x \ Presets \ en_US \ Scripts
        - Restart Illustrator.
        - Choose File -> Scripts -> create-guide-grid-AI
*/

// check for document
if(app.documents.length > 0){  
	// get active document & layer
	var activeDoc = app.activeDocument;
    var activeLayer = activeDoc.layers[0];
	
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
        var guide = activeLayer.pathItems.rectangle( 0, i * colWidth, 0, docHeight ); 
        guide.guides = true;
	} 	
	
	// create horizontal guidelines
	for(i = 0; i <= rowCount; ++i){  
        var guide = activeLayer.pathItems.rectangle(-i * rowHeight, 0, docWidth, 0); 
        guide.guides = true;
	}  	
}  