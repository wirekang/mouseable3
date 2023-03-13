const config = {
    branches: ["main", "beta"],
    plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', ['@semantic-release/github', {
        assets: "dist"
    }]]
}

module.exports = config
