const config = {
    repositoryUrl: "https://github.com/wirekang/mouseable3",
    branches: ["main"],
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/github', {
            assets: ["dist/mouseable3*"]
        },
        ],
        ['@semantic-release/exec', {
            "prepareCmd": "./scripts/build.sh $\{nextRelease.version} ${branch.name}",
        },
        ]
    ]
}

module.exports = config
