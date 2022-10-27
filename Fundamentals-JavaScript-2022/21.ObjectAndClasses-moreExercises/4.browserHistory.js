function browserHistory(obj,strArray) {
    let valuesOfObject = Object.values(obj);
    let openTabs = valuesOfObject[1]
    let recentlyClosed = valuesOfObject[2]
    let browserLogs = valuesOfObject[3]
    
    for(let i = 0; i < strArray.length; i++) {
        let [command,website] = strArray[i].split(' ')
        
        switch(command) {
            case 'Open':
            openTabs.push(website)
            browserLogs.push(strArray[i])
            break

            case 'Close':
            if(openTabs.includes(website)) {
                let indexOfWebsite = openTabs.indexOf(website)
                openTabs.splice(indexOfWebsite,1)
                recentlyClosed.push(website)
                browserLogs.push(strArray[i])
            }
            break;

            case 'Clear':
           openTabs.splice(0,openTabs.length)
           recentlyClosed.splice(0,recentlyClosed.length)
          browserLogs.splice(0,browserLogs.length)
            break;
            
        }
    }

    let entries = Object.entries(obj)

    for(let [key,values] of entries) {
        if(key !== 'Browser Name') {
            console.log(`${key}: ${values.join(', ')}`);
        }
        else {
            console.log(values);
        }   
    }

}

browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"])

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])