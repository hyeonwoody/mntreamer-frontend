import {My} from '../../configuration/web/config'

const my = new My();

export async function FetchFilesRequest(path : string, handleFiles : (files) => void){
    try {
        const response = await fetch(`http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ path }),
        });
        const data = await response.json();
        if (!response.ok) {
          if (data.files === null || data.files.length === 0) {
            handleFiles([])
          }
          return
        }
        if (data && Array.isArray(data.files)) {
            handleFiles(data.files)
        } else {
          handleFiles([])
        }
      } catch (error) {
        console.error("Error fetching files:", error);
      }
}