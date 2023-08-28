# Destination de base où vous souhaitez créer les dossiers
$baseDir = Get-Location

# Boucle pour créer les 30 dossiers
for ($i=31; $i -le 50; $i++) {
    
    # Création du nom de dossier
    $dirName = "frame$i"
    $fullDirPath = Join-Path -Path $baseDir -ChildPath $dirName

    # Créer le dossier
    New-Item -Path $fullDirPath -ItemType Directory

    # Créer les fichiers à l'intérieur de chaque dossier
    New-Item -Path (Join-Path -Path $fullDirPath -ChildPath "index.jsx") -ItemType File
    New-Item -Path (Join-Path -Path $fullDirPath -ChildPath "style.css") -ItemType File
}

Write-Output "Tous les dossiers et fichiers ont été créés avec succès."
