from flask import redirect, url_for, request, flash
from flask_admin import AdminIndexView, expose
from flask_admin.contrib.sqla import ModelView
from flask_login import current_user, login_required
from wtforms import TextAreaField
from wtforms.widgets import TextArea

class SecureModelView(ModelView):
    """Base ModelView with security."""
    def is_accessible(self):
        return current_user.is_authenticated and current_user.is_admin
    
    def inaccessible_callback(self, name, **kwargs):
        # Redirect to login page if user doesn't have access
        flash('Please log in to access the admin area.', 'warning')
        return redirect(url_for('admin.login', next=request.url))

class SecureAdminIndexView(AdminIndexView):
    """Secure index view."""
    @expose('/')
    @login_required
    def index(self):
        if not current_user.is_admin:
            flash('Admin privileges required.', 'error')
            return redirect(url_for('main.index'))
        return super(SecureAdminIndexView, self).index()

class CKTextAreaWidget(TextArea):
    """Rich text editor widget."""
    def __call__(self, field, **kwargs):
        if kwargs.get('class'):
            kwargs['class'] += ' ckeditor'
        else:
            kwargs.setdefault('class', 'ckeditor')
        return super(CKTextAreaWidget, self).__call__(field, **kwargs)

class CKTextAreaField(TextAreaField):
    """Rich text editor field."""
    widget = CKTextAreaWidget()

class ContentModelView(SecureModelView):
    """Admin view for Content model."""
    column_list = ('type', 'key', 'title', 'order', 'updated_at')
    column_searchable_list = ('type', 'key', 'title', 'content')
    column_filters = ('type', 'key', 'updated_at')
    column_sortable_list = ('type', 'key', 'order', 'updated_at')
    form_excluded_columns = ('created_at', 'updated_at')
    
    # Use CKEditor for content field
    form_overrides = {
        'content': CKTextAreaField
    }
    
    # Group form fields
    form_columns = ('type', 'key', 'title', 'subtitle', 'content', 'image_url', 'order')
    
    create_template = 'admin/content_edit.html'
    edit_template = 'admin/content_edit.html'

class UserModelView(SecureModelView):
    """Admin view for User model."""
    column_list = ('username', 'email', 'is_admin')
    column_searchable_list = ('username', 'email')
    column_filters = ('is_admin',)
    
    # Don't expose password hash in the form
    form_excluded_columns = ('password_hash',)
    
    # Custom form fields for password
    form_extra_fields = {
        'password': TextAreaField('Password')
    }
    
    def on_model_change(self, form, model, is_created):
        """Hash the password when a user is created or updated."""
        if form.password.data:
            model.set_password(form.password.data)

class VisitorModelView(SecureModelView):
    """Admin view for Visitor model."""
    can_create = False  # Visitors are created automatically
    can_edit = False    # No need to edit visitor data
    
    column_list = ('ip_address', 'page_visited', 'timestamp', 'user_agent', 'referrer')
    column_searchable_list = ('ip_address', 'page_visited', 'user_agent', 'referrer')
    column_filters = ('timestamp', 'page_visited')
    column_default_sort = ('timestamp', True)  # Sort by timestamp descending

def init_admin_views(admin, db):
    """Initialize and register admin views."""
    # Import models
    from models.user import User
    from models.content import Content
    from models.visitor import Visitor
    
    # Register model views
    admin.add_view(ContentModelView(Content, db.session, name='Website Content'))
    admin.add_view(UserModelView(User, db.session, name='Users'))
    admin.add_view(VisitorModelView(Visitor, db.session, name='Visitors'))
