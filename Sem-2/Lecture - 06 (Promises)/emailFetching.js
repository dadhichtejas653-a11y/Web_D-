function FetchEmail(emailId,cb) {
    console.log("Fetching email...");
    setTimeout(() => {
        let email = { id: emailId, content: "Hello World" };
        cb(email,MoveToInbox)
    }, 1000);
}

function ScanForVirus(email,cb) {
    console.log("Scanning for virus...");
    setTimeout(() => {
        email.scanned = true;
        cb(email)
    }, 1500);
}

function MoveToInbox(email) {
    console.log("Moving to inbox...");
    setTimeout(() => {
        email.location = "inbox";
        console.log("Email moved:", email);
    }, 1000);
}
FetchEmail(108,ScanForVirus)

// pass the required paramaeter in function and write the calling of functions such that it will run synchronously