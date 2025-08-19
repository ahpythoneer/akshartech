from flask import Blueprint, jsonify, request
from app import db
from models.content import Content
from models.visitor import Visitor
from datetime import datetime, timedelta
from sqlalchemy import func

# Create blueprint
api_bp = Blueprint('api', __name__)

@api_bp.route('/docs')
def api_docs():
    """API Documentation"""
    return jsonify({
        'title': 'AksharTech API Documentation',
        'version': '1.0',
        'endpoints': {
            'GET /api/content': 'Get all website content',
            'GET /api/content/<type>': 'Get content by type',
            'GET /api/content/<type>/<key>': 'Get specific content item',
            'GET /api/stats/visitors': 'Get visitor statistics',
        }
    })

@api_bp.route('/content')
def get_all_content():
    """Get all website content"""
    contents = Content.query.all()
    return jsonify({
        'status': 'success',
        'count': len(contents),
        'data': [content.to_dict() for content in contents]
    })

@api_bp.route('/content/<type>')
def get_content_by_type(type):
    """Get content by type"""
    contents = Content.query.filter_by(type=type).order_by(Content.order).all()
    if not contents:
        return jsonify({
            'status': 'error',
            'message': f'No content found for type: {type}'
        }), 404
    
    return jsonify({
        'status': 'success',
        'count': len(contents),
        'data': [content.to_dict() for content in contents]
    })

@api_bp.route('/content/<type>/<key>')
def get_content_by_key(type, key):
    """Get specific content item by type and key"""
    content = Content.query.filter_by(type=type, key=key).first()
    if not content:
        return jsonify({
            'status': 'error',
            'message': f'No content found for type: {type}, key: {key}'
        }), 404
    
    return jsonify({
        'status': 'success',
        'data': content.to_dict()
    })

@api_bp.route('/stats/visitors')
def get_visitor_stats():
    """Get visitor statistics"""
    # Get query parameters
    days = request.args.get('days', default=30, type=int)
    since = datetime.utcnow() - timedelta(days=days)
    
    # Total visitors
    total_visitors = Visitor.query.count()
    
    # Recent visitors
    recent_visitors = Visitor.query.filter(Visitor.timestamp >= since).count()
    
    # Visitors by page
    page_stats = db.session.query(
        Visitor.page_visited,
        func.count(Visitor.id).label('count')
    ).group_by(Visitor.page_visited).order_by(func.count(Visitor.id).desc()).limit(10).all()
    
    # Daily visitors for chart
    daily_stats = db.session.query(
        func.date(Visitor.timestamp).label('date'),
        func.count(Visitor.id).label('count')
    ).filter(Visitor.timestamp >= since).group_by(func.date(Visitor.timestamp)).all()
    
    return jsonify({
        'status': 'success',
        'data': {
            'total_visitors': total_visitors,
            'recent_visitors': recent_visitors,
            'page_stats': [{'page': page, 'count': count} for page, count in page_stats],
            'daily_stats': [{'date': date.strftime('%Y-%m-%d'), 'count': count} for date, count in daily_stats]
        }
    })
