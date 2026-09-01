function ReadFile(filename,cb) {
    console.log("Reading file...");
    setTimeout(() => {
        let data = "Content of " + filename;
        cb(data,BackupToCloud)
    }, 1000);
}

function Encrypt(data,cb) {
    console.log("Encrypting data...");
    setTimeout(() => {
        let encrypted = btoa(data); // simple encoding
        cb(encrypted)
    }, 1500);
}

function BackupToCloud() {
    console.log("Backing up to cloud...");
    setTimeout(() => {
        let cloudUrl = "https://cloud.storage.com/backup_" + Date.now();
        console.log("Backup complete:", cloudUrl);
    }, 2000);
}

ReadFile("file.txt",Encrypt)
// pass the required paramaeter in function and write the calling of functions such that it will run synchronously