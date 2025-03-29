import {My} from '../../configuration/web/config'

const my = new My();

export function GetUrl(path : string) {
    return `http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media/stream${path}`
}

export async function FetchTargetDuration(path : string) {
  try {
    const response = await fetch(`http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media/target-duration${path}`, {
      method: "GET",
    });

    if (!response.ok) throw new Error("Failed to fetch files");

    const data = await response.json();
    return data.targetDuration
  } catch (error) {
    console.error("Error fetching files:", error);
    return undefined;
  }
}

export async function FetchUrlRequest(path : string, handleUrl : (files) => void){
    try {
        const response = await fetch(`http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media/stream${path}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
    
        if (!response.ok) throw new Error("Failed to fetch files");
    
        const data = await response.json();
    
        if (data && Array.isArray(data.url)) {
            handleUrl(data.url)
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
}

export async function ExciseInOutRequest(fullPath : string, begin : number, end : number) {
  try {
    console.log("API : ",fullPath, begin, end)
    const response = await fetch(`http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media/excise`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullPath, begin, end }),
    })

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error deleting InOut:", error);
    throw error;
  } 
  
}

