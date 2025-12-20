from multi_repo_analyzer.service.scan_service import scan_github_repository

report = scan_github_repository(
    repo_url="https://github.com/extremecoder-rgb/tiktok",
    policy_name="standard",
)

print(report["risk"])
print(report["policy"])
