const config = {
    repositoryUrl: "https://github.com/wirekang/mouseable3.git",
    branches: ["main", "beta"],
    plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', ['@semantic-release/github', {
        assets: "dist"
    }]]
}

module.exports = config
