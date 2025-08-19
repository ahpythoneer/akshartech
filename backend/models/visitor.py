from app import db
from datetime import datetime
from flask import request

class Visitor(db.Model):
    """Model for tracking website visitors."""
    __tablename__ = 'visitors'
    
    id = db.Column(db.Integer, primary_key=True)
    ip_address = db.Column(db.String(50))
    user_agent = db.Column(db.String(255))
    page_visited = db.Column(db.String(255))
    referrer = db.Column(db.String(255))
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    
    def __init__(self, ip_address, user_agent, page_visited, referrer):
        self.ip_address = ip_address
        self.user_agent = user_agent
        self.page_visited = page_visited
        self.referrer = referrer
    
    def to_dict(self):
        """Convert the model instance to a dictionary."""
        return {
            'id': self.id,
            'ip_address': self.ip_address,
            'user_agent': self.user_agent,
            'page_visited': self.page_visited,
            'referrer': self.referrer,
            'timestamp': self.timestamp.isoformat() if self.timestamp else None
        }

def log_visitor_data():
    """Log visitor data from the current request."""
    try:
        # Only log data for GET requests to avoid duplicates during form submissions
        if request.method != 'GET':
            return
        
        # Skip logging for static resources and API calls
        path = request.path
        if path.startswith('/static/') or path.startswith('/api/'):
            return
        
        visitor = Visitor(
            ip_address=request.remote_addr,
            user_agent=request.user_agent.string,
            page_visited=request.path,
            referrer=request.referrer or ''
        )
        
        db.session.add(visitor)
        db.session.commit()
    except Exception as e:
        # Silently fail if logging doesn't work - don't interrupt the user experience
        db.session.rollback()
        print(f"Error logging visitor data: {e}")
