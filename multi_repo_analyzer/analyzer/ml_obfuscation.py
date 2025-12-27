"""ML-based obfuscation detection module."""
import os
import joblib
from pathlib import Path
from typing import List, Dict, Any
from sklearn.feature_extraction.text import HashingVectorizer, TfidfTransformer

from multi_repo_analyzer.core import Finding, Severity, Category, ScanContext


class MLObfuscationAnalyzer:
    """Analyzer that uses ML model to detect obfuscated JavaScript code."""
    
    name = "ml_obfuscation"
    supported_languages = {"javascript"}
    
    def __init__(self):
        """Initialize the ML model and vectorizers."""
        # Path to the trained model
        model_path = Path(__file__).parent.parent.parent / "ml_engine" / "obfuscation_xgb_model.joblib"
        
        if not model_path.exists():
            raise FileNotFoundError(f"ML model not found at {model_path}")
        
        # Load the trained model
        self.model = joblib.load(model_path)
        
        # Initialize vectorizers with same parameters as training
        self.hashing_vectorizer = HashingVectorizer(ngram_range=(1, 3))
        self.tfidf_transformer = TfidfTransformer()
        
    def analyze(self, context: ScanContext) -> List[Finding]:
        """Analyze JavaScript files for obfuscation using ML model."""
        findings: List[Finding] = []
        
        for language, files in context.files_by_language.items():
            if language not in self.supported_languages:
                continue
                
            for file_path in files:
                try:
                    content = file_path.read_text(errors="ignore")
                    if not content:
                        continue
                    
                    # Preprocess content (remove newlines like in training)
                    processed_content = content.replace("\n", "")
                    
                    # Transform using vectorizers
                    hashed = self.hashing_vectorizer.transform([processed_content])
                    tfidf = self.tfidf_transformer.fit_transform(hashed)
                    
                    # Predict
                    prediction = self.model.predict(tfidf)[0]
                    prediction_proba = self.model.predict_proba(tfidf)[0]
                    
                    # If predicted as obfuscated (label 1)
                    if prediction == 1:
                        confidence = prediction_proba[1]
                        
                        # Determine severity based on confidence
                        if confidence >= 0.9:
                            severity = Severity.HIGH
                        elif confidence >= 0.7:
                            severity = Severity.MEDIUM
                        else:
                            severity = Severity.LOW
                        
                        findings.append(
                            Finding(
                                id="ML-OBFUSCATION-DETECTED",
                                category=Category.OBFUSCATION,
                                severity=severity,
                                confidence=confidence,
                                file_path=str(file_path),
                                line_number=None,
                                message=f"ML model detected obfuscated JavaScript code (confidence: {confidence:.2%})",
                                why_it_matters=(
                                    "Machine learning analysis indicates this JavaScript file "
                                    "contains patterns consistent with obfuscated code. "
                                    "Obfuscated code can hide malicious behavior and is harder to review."
                                ),
                                recommendation=(
                                    "Review this file carefully. If it's a legitimate minified library, "
                                    "consider moving it to a vendor folder. If the obfuscation is unexpected, "
                                    "investigate the source and purpose of this code."
                                ),
                            )
                        )
                        
                except Exception as e:
                    # Log error but continue processing other files
                    print(f"Error analyzing {file_path}: {str(e)}")
                    continue
        
        return findings
