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

1. **Fork or push this repository to your GitHub account**

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to the "Pages" section
   - Under "Source", select "GitHub Actions"

3. **Trigger the deployment**:
   - The deployment will automatically start when you push to the main branch
   - You can also manually trigger it from the Actions tab by selecting the "Deploy to GitHub Pages" workflow

4. **Access your deployed application**:
   - Once deployed, your application will be available at `https://[your-username].github.io/abaudio/`
