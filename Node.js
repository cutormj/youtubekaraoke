
            let url = new URL(window.location.href);
            let params = new URLSearchParams(url.search);
            let songid = params.get('songId');
            console.log(songid);
// To update JSON file
            function readTextFile(file, callback) {
                var rawFile = new XMLHttpRequest();
                rawFile.overrideMimeType("application/json");
                rawFile.open("GET", file, true);
                rawFile.onreadystatechange = function() {
                    if (rawFile.readyState === 4 && rawFile.status == "200") {
                        callback(rawFile.responseText);
                    }
                }
                rawFile.send(null);
            }

            //usage:
            readTextFile("./queue.json", function(text){
                var data = JSON.parse(text);
                console.log(data);
            });

            // Requiring fs module in which 
            // writeFile function is defined. 
            const fs = require('fs'); 
            
            // Data which will write in a file. 
            //let data = "Learning how to write in a file."
                
            // Write data in 'Output.txt' . 
            fs.writeFile('queue.json', data, (err) => { 
                    
                // In case of a error throw err. 
                if (err) throw err; 
            }) 
