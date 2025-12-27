from sqlalchemy.orm import Session
from .models import User, Payment

def get_user_by_github_id(db: Session, github_id: int):
    return db.query(User).filter(User.github_id == github_id).first()

def create_user(db: Session, github_id: int, username: str, avatar_url: str, email: str = None):
    db_user = User(
        github_id=github_id,
        username=username,
        avatar_url=avatar_url,
        email=email
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def update_user_token(db: Session, user: User, token: str):
    # Logic to update session/token if needed
    pass
