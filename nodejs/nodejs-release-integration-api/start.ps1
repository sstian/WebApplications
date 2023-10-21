<#
# Build and start automatically web application in localhost.
# Run ./start.ps1 in the powershell
#>

function Start-App() {
  echo "`n>> npm install `n"  ; npm install
  # echo "`n>> npm audit fix `n"; npm audit fix
  echo "`n>> npm start `n"    ; npm start
}

<# Script main entrypoint #>
Write-Out "I LOVE BASH! Command is art."

$app = "nodejs-release-integration-api"
Write-Output "Starting web applicaiton [ $app ] ..."
Write-Output "Current path: $(Get-location)"
Write-Output "Folder structure:"; Get-ChildItem

Start-App

Write-Output "Start Web application successfully."
