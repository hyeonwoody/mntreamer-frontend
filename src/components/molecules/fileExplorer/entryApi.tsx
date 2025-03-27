import {My} from '../../../configuration/web/config'

const my = new My();

export async function FetchFilesRequest(path : string, handleFiles : (files) => void){
    try {
        const response = await fetch(`http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path }),
        });
    
        if (!response.ok) throw new Error("Failed to fetch files");
    
        const data = await response.json();
        console.log("Fetched Files:", data);
    
        if (data && Array.isArray(data.files)) {
            handleFiles(data.files)
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
}