const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting deployment to GitHub Pages...');

// Check if build directory exists
if (!fs.existsSync('build')) {
  console.error('Build directory not found. Run npm run build first.');
  process.exit(1);
}

try {
  // Get current branch
  const currentBranch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
  console.log(`Current branch: ${currentBranch}`);

  // Check if gh-pages branch exists locally
  try {
    execSync('git show-ref --verify --quiet refs/heads/gh-pages');
    console.log('gh-pages branch exists locally');
  } catch (error) {
    console.log('gh-pages branch does not exist locally, fetching from remote...');
    execSync('git fetch origin gh-pages:gh-pages');
  }

  // Switch to gh-pages branch
  console.log('Switching to gh-pages branch...');
  execSync('git checkout gh-pages');

  // Remove all files except .git
  console.log('Cleaning gh-pages branch...');
  execSync('git rm -rf .');
  execSync('git checkout HEAD -- .gitignore', { stdio: 'ignore' });

  // Copy build files
  console.log('Copying build files...');
  const buildPath = path.join(__dirname, '..', 'build');
  const files = fs.readdirSync(buildPath);

  files.forEach(file => {
    const srcPath = path.join(buildPath, file);
    const destPath = path.join('.', file);

    if (fs.statSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });

  // Add and commit changes
  console.log('Committing changes...');
  execSync('git add .');
  execSync('git commit -m "Deploy to GitHub Pages"');

  // Push to remote
  console.log('Pushing to remote...');
  execSync('git push origin gh-pages');

  // Switch back to original branch
  console.log(`Switching back to ${currentBranch}...`);
  execSync(`git checkout ${currentBranch}`);

  console.log('✅ Deployment completed successfully!');
  console.log('Your website should be live at: https://abbodh.github.io/aps-sundernagar/');

} catch (error) {
  console.error('❌ Deployment failed:', error.message);
  process.exit(1);
}