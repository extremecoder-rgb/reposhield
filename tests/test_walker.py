from pathlib import Path
from multi_repo_analyzer.ingest import walk_repository


def test_walk_repository_basic(tmp_path: Path):
    py_file = tmp_path / "app.py"
    py_file.write_text("print('hello')")

    js_file = tmp_path / "app.js"
    js_file.write_text("console.log('hi')")

    files = walk_repository(tmp_path)

    assert "python" in files
    assert "javascript" in files
    assert py_file in files["python"]
    assert js_file in files["javascript"]
