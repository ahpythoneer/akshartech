from enum import Enum
from app import db
from datetime import datetime

class ContentType(Enum):
    """Enum for different types of website content."""
    HERO = 'hero'                # Hero section content
    STAT = 'stat'                # Statistics 
    SERVICE_CATEGORY = 'service_category'  # Service category
    SERVICE = 'service'          # Individual service
    ABOUT = 'about'              # About page content
    CONTACT = 'contact'          # Contact page content
    GENERAL = 'general'          # General content

class Content(db.Model):
    """Model for storing website content that can be edited through admin."""
    __tablename__ = 'contents'
    
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(30), nullable=False)  # Content type (hero, service, etc.)
    key = db.Column(db.String(100), nullable=False)  # Unique identifier within type
    title = db.Column(db.String(200))                # Title/heading
    subtitle = db.Column(db.String(300))             # Subtitle/subheading
    content = db.Column(db.Text)                     # Main content text
    image_url = db.Column(db.String(500))            # URL or path to associated image
    order = db.Column(db.Integer, default=0)         # Order/position within its type
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Composite unique constraint for type+key
    __table_args__ = (db.UniqueConstraint('type', 'key', name='unique_type_key'),)
    
    def __init__(self, type, key, title=None, subtitle=None, content=None, 
                 image_url=None, order=0):
        self.type = type
        self.key = key
        self.title = title
        self.subtitle = subtitle
        self.content = content
        self.image_url = image_url
        self.order = order
    
    def to_dict(self):
        """Convert the model instance to a dictionary."""
        return {
            'id': self.id,
            'type': self.type,
            'key': self.key,
            'title': self.title,
            'subtitle': self.subtitle,
            'content': self.content,
            'image_url': self.image_url,
            'order': self.order,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    def __repr__(self):
        return f'<Content {self.type}:{self.key}>'
