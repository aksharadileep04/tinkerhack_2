function submitStory(event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const title = document.getElementById("storyTitle").value;
    const content = document.getElementById("storyContent").value;
    const author = document.getElementById("authorName").value || "Anonymous";

    // Prepare CSV data
    const csvRow = `"${title}","${content}","${author}"\n`;
    
    // Check if localStorage already has CSV data
    let csvContent = localStorage.getItem("csvData") || "Title,Story,Author\n";
    csvContent += csvRow;

    // Save updated CSV data to localStorage
    localStorage.setItem("csvData", csvContent);

    // Create a Blob for downloading
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement("a");
    a.href = url;
    a.download = "my.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Clear form inputs
    document.getElementById("storyForm").reset();
    closeModal();
}
// Your Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Now you can start using Firebase services like Firestore or Authentication
const db = firebase.firestore();

