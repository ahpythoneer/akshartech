import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_admin import Admin
from flask_login import LoginManager
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
admin = Admin(name='AksharTech Admin', template_mode='bootstrap3')
login_manager = LoginManager()

def create_app(config=None):
    """Create and configure the Flask application."""
    app = Flask(__name__, static_folder='static')
    
    # Configure the app
    app.config.from_mapping(
        SECRET_KEY=os.environ.get('SECRET_KEY', 'dev'),
        SQLALCHEMY_DATABASE_URI=os.environ.get('DATABASE_URL', 'sqlite:///akshartech.db'),
        SQLALCHEMY_TRACK_MODIFICATIONS=False,
    )
    
    # Override config if provided
    if config:
        app.config.update(config)
    
    # Initialize extensions with the app
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)
    admin.init_app(app)
    login_manager.init_app(app)
    
    # Import and register blueprints
    from routes.main import main_bp
    from routes.api import api_bp
    from routes.admin import admin_bp
    
    app.register_blueprint(main_bp)
    app.register_blueprint(api_bp, url_prefix='/api')
    app.register_blueprint(admin_bp, url_prefix='/admin')
    
    # Register visitor tracking middleware
    @app.before_request
    def track_visitor():
        from models.visitor import log_visitor_data
        log_visitor_data()
    
    # Create database tables
    with app.app_context():
        db.create_all()
        
        # Import admin views to register them
        from admin.views import init_admin_views
        init_admin_views(admin, db)
        
        # Import and initialize the database with default data if empty
        from models.initialize_db import initialize_database
        initialize_database()
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True, host='0.0.0.0')
