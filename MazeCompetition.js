// Programmer: Zach Kirk 
// Team Member: Marcus Campos-Jones 
// Bolt ID: 2FAE
// Date 4.23.24: 
// Program: Maze Competition  
// Program URL: https://edu.sphero.com/program/16788339/edit

async function startProgram() {
	// Programmer: Zach Kirk- Start Text & audio Checkpoint Commit - Date: 4/30
	await speak("start",true)
	await scrollMatrixText('start!', { r: 66, g: 56, b: 255 }, 30, true)
	
	// Programmer:  Marcus Campos Jones      - Blue LED Checkpoint Commit - Date: 5/1
    setMainLed({ r: 0, g:0, b: 255 });
	await roll((getHeading() + 0), 60, 3);	
	await delay(1);


    // Programmer: Zach Kirk      - Sound One Checkpoint Commit - Date: 5/1
    setMainLed({ r: 0, g:255, b: 0 });
	await roll((getHeading() + 90), 60, 2);
	await speak("Among Us",true)

 
    // Programmer:        - Red LED Checkpoint Commit - Date: 



    // Programmer:        - Sound Two Checkpoint Commit - Date: 


  
    // Programmer:        - Green LED Checkpoint Commit - Date: 



    // Programmer:        - Purple LED & Sound Three Checkpoint Commit - Date: 



    // Programmer:        - Finish Text & Audio Checkpoint Commit - Date: 


}