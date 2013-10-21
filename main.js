

    // Wait for Cordova to connect with the device
    //
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT,0,gotFS,onFail);
    }
    
    function gotFS(fileSystem){
    	alert("filesystem successful");
    	fileSystem.root.getFile("readme.txt",null,gotFileEntry, onFail);
    }
    
    function gotFileEntry(fileEntry){
    	alert("fileEntry was successful");
    	fileEntry.file(gotFiile,onFail);
    }
    
    function gotFile(file){
    	alert("gotFile successful");
    }
	
	// Called if something bad happens.
    // 
    function onFail(message) {
      alert('Finding File Failed');
    }
    
    function getFile(){
    	alert("you want to get a file");
   }

