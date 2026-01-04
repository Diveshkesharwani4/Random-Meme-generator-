const generateBtn = document.getElementById('generate-btn');
const memeTitle = document.getElementById('meme-title');
const memeImage = document.getElementById('meme-image');

// Hinglish/Indian meme sources ki list
// Hum random source choose karenge taaki variety mile
const subreddits = ["IndianMeyMeys", "DesiMeme", "bollywoodmemes", "hindimemes"];

async function getMeme() {
    try {
        // 1. Loading state dikhana
        generateBtn.innerText = "Meme dhund raha hu...";
        generateBtn.disabled = true;
        memeTitle.innerText = "Ruko zara, sabar karo..."; // Funny placeholder text

        // 2. Random subreddit select karna
        const randomSub = subreddits[Math.floor(Math.random() * subreddits.length)];

        // 3. API URL banana (Example: https://meme-api.com/gimme/DesiMeme)
        const apiURL = `https://meme-api.com/gimme/${randomSub}`;

        // 4. Data fetch karna
        const response = await fetch(apiURL);
        const data = await response.json();

        // 5. Check karna ki meme NSFW (ganda) toh nahi hai?
        // Agar ganda hai to function wapas call karke dusra layenge (simple filter)
        if (data.nsfw) {
            getMeme();
            return;
        }

        // 6. Data set karna
        memeTitle.innerText = data.title;
        memeImage.src = data.url;
        memeImage.style.display = "block";

        // Button reset
        generateBtn.innerText = "Ek aur dikhao!";
        generateBtn.disabled = false;

    } catch (error) {
        console.log(error);
        memeTitle.innerText = "Arre yaar, internet issue hai shayad!";
        generateBtn.innerText = "Fir se try karo";
        generateBtn.disabled = false;
    }
}

// Button par click event
generateBtn.addEventListener('click', getMeme);