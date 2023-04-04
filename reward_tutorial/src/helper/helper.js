export const downloadCode = (tutorial) => {
    const code = sessionStorage.getItem(`${tutorial}_code`);
    let textFileAsBlob = new Blob([code], {type:'text/plain'});
    let fileNameToSaveAs = "reward_function.py";
    let downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // Firefox
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = function(){
            document.body.removeChild(downloadLink);
        };
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
};

export const copyCode = async (tutorial) => {
    const code = sessionStorage.getItem(`${tutorial}_code`);
    try {
        await navigator.clipboard.writeText(code);
        alert("Code copied to clipboard!");
    }
    catch (err){
        alert("Failed to copy code to clipboard!");
    }
};