from flask import Blueprint, render_template, redirect, url_for, jsonify

# Create blueprint
main_bp = Blueprint('main', __name__)

@main_bp.route('/')
def index():
    """
    Main route - API-only backend, so redirect to API docs or return welcome message
    """
    return jsonify({
        'status': 'success',
        'message': 'Welcome to AksharTech API',
        'api_version': '1.0',
        'documentation': '/api/docs'
    })

@main_bp.route('/health')
def health_check():
    """
    Health check endpoint for monitoring
    """
    return jsonify({
        'status': 'healthy',
        'service': 'akshartech-backend'
    })
