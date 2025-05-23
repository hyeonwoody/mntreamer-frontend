import {My} from '../../configuration/web/config'

const my = new My();

export function GetUrl(path : string) {
    return `http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media/stream${path}`
}

export async function ConfirmMediaRequest(path : string) {
  try {
    const response = await fetch(`http://${my.backendIpAddress}:${my.backEndPort}/api/v1/media/confirm${path}`, {
      method: "PATCH",
    });
    console.log(response)
    if (!response.ok) throw new Error("Failed to fetch files");
    return
  } catch (error) {
    console.error("Error fetching files:", error);
    return undefined;
  }
}