from flask import Blueprint, redirect, url_for, flash, render_template, request
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.urls import url_parse
from app import db
from models.user import User
from forms.auth import LoginForm

# Create blueprint
admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/')
@login_required
def index():
    """Admin dashboard index"""
    # In a REST API-only backend, we'll just redirect to the admin interface
    # which is handled by Flask-Admin
    return redirect(url_for('admin.index'))

@admin_bp.route('/login', methods=['GET', 'POST'])
def login():
    """Admin login page"""
    # If user is already logged in, redirect to admin index
    if current_user.is_authenticated:
        return redirect(url_for('admin.index'))
    
    form = LoginForm()
    if form.validate_on_submit():
        # Get user from database
        user = User.query.filter_by(username=form.username.data).first()
        
        # Check if user exists and password is correct
        if user is None or not user.check_password(form.password.data):
            flash('Invalid username or password', 'error')
            return redirect(url_for('admin.login'))
        
        # Log in the user
        login_user(user, remember=form.remember_me.data)
        
        # Get the next page from the request
        next_page = request.args.get('next')
        if not next_page or url_parse(next_page).netloc != '':
            next_page = url_for('admin.index')
        
        return redirect(next_page)
    
    # Render login form
    return render_template('auth/login.html', title='Sign In', form=form)

@admin_bp.route('/logout')
@login_required
def logout():
    """Admin logout"""
    logout_user()
    return redirect(url_for('admin.login'))
