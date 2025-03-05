# ABaudio

A web application for conducting A/B testing with audio files.

## Features

- Upload two audio files for comparison
- Play both audio files with synchronized playback position
- Easily switch between Audio A and Audio B while maintaining the playback position
- Select your preferred audio file
- Simple and intuitive user interface

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd abaudio
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Use

1. **Upload Audio Files**: Click on the upload areas to select two different audio files (Audio A and Audio B).
2. **Play/Pause**: Use the play/pause button to control playback.
3. **Switch Between Files**: Click "Listen to A" or "Listen to B" to switch between the two audio files while maintaining the playback position.
4. **Make Your Selection**: After listening to both files, click either "Prefer A" or "Prefer B" to indicate your preference.

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS

## License

This project is licensed under the MIT License.

## Deployment on GitHub Pages

This project is configured for easy deployment to GitHub Pages:

### Set Up Repository

1. **Create a new GitHub repository**:
   - Go to [GitHub](https://github.com/new) and create a new repository named "abaudio"
   - Make it public for GitHub Pages to work with the free plan

2. **Push your code to the repository**:
   ```bash
   # Add your GitHub repository as remote origin (replace USERNAME with your GitHub username)
   git remote add origin https://github.com/USERNAME/abaudio.git
   
   # Push your code to GitHub
   git push -u origin main
   ```

### Enable GitHub Pages

1. **Configure GitHub Pages in repository settings**:
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **The first deployment will start automatically**:
   - Go to the "Actions" tab to see the deployment workflow in progress
   - Wait for it to complete (this may take a few minutes)

3. **Access your deployed application**:
   - Once deployed, your app will be available at: 
   - `https://USERNAME.github.io/abaudio/` (replace USERNAME with your GitHub username)

### Updating Your Deployed App

Whenever you push changes to the main branch, GitHub Actions will automatically rebuild and redeploy your application.
