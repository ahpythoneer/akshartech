from app import db
from models.user import User
from models.content import Content, ContentType
from flask import current_app

def initialize_database():
    """Initialize the database with default data if tables are empty."""
    # Check if we already have a user, if not create admin user
    if User.query.count() == 0:
        admin_user = User(
            username='admin',
            email='admin@akshartech.us',
            password='admin123',  # This will be hashed automatically
            is_admin=True
        )
        db.session.add(admin_user)
        current_app.logger.info('Created default admin user')
    
    # Check if we have content, if not create default content
    if Content.query.count() == 0:
        # Hero section content
        hero = Content(
            type=ContentType.HERO.value,
            key='main',
            title='Transform Your Business with Expert IT Solutions',
            subtitle='From custom software development to strategic IT consulting, we deliver innovative solutions that drive growth and efficiency for your business.',
            content='',
            order=1
        )
        
        # Home page specific content
        home_hero = Content(
            type='home',
            key='hero',
            title='Transform Your Business with Expert IT Solutions',
            subtitle='Your Partner for Innovative IT Solutions',
            content='From custom software development to strategic IT consulting, we deliver innovative solutions that drive growth and efficiency for your business.',
            order=1
        )
        
        # Stats
        stats = [
            Content(type=ContentType.STAT.value, key='projects', title='500+', 
                   subtitle='Projects Delivered', order=1),
            Content(type=ContentType.STAT.value, key='clients', title='50+', 
                   subtitle='Happy Clients', order=2),
            Content(type=ContentType.STAT.value, key='experience', title='10+', 
                   subtitle='Years Experience', order=3),
            Content(type=ContentType.STAT.value, key='support', title='24/7', 
                   subtitle='Support Available', order=4)
        ]
        
        # Service Categories
        service_categories = [
            Content(type=ContentType.SERVICE_CATEGORY.value, key='software_development', 
                   title='Software Development', order=1),
            Content(type=ContentType.SERVICE_CATEGORY.value, key='it_consulting', 
                   title='IT Consulting', order=2),
            Content(type=ContentType.SERVICE_CATEGORY.value, key='it_support', 
                   title='IT Support', order=3)
        ]
        
        # Software Development Services
        software_services = [
            Content(type=ContentType.SERVICE.value, key='custom_software', 
                   title='Custom Software Development', 
                   subtitle='Desktop, web, and mobile applications tailored to your business needs',
                   content='',
                   order=1),
            Content(type=ContentType.SERVICE.value, key='website_design', 
                   title='Website Design & Development', 
                   subtitle='Custom web projects with modern design and responsive functionality',
                   content='',
                   order=2),
            Content(type=ContentType.SERVICE.value, key='software_config', 
                   title='Software Configuration', 
                   subtitle='Customization services for existing software solutions',
                   content='',
                   order=3),
            Content(type=ContentType.SERVICE.value, key='uiux_design', 
                   title='UI/UX Design Services', 
                   subtitle='User-centered design for optimal user experience',
                   content='',
                   order=4),
            Content(type=ContentType.SERVICE.value, key='system_architecture', 
                   title='System Architecture Design', 
                   subtitle='Strategic system design and architecture consulting',
                   content='',
                   order=5),
            Content(type=ContentType.SERVICE.value, key='quality_assurance', 
                   title='Quality Assurance', 
                   subtitle='Comprehensive software testing and quality assurance',
                   content='',
                   order=6),
            Content(type=ContentType.SERVICE.value, key='erp_crm', 
                   title='ERP/CRM Development', 
                   subtitle='Custom module development for enterprise systems',
                   content='',
                   order=7)
        ]
        
        # IT Consulting Services
        consulting_services = [
            Content(type=ContentType.SERVICE.value, key='it_strategy', 
                   title='IT Strategy & Transformation', 
                   subtitle='Strategic planning for digital transformation initiatives',
                   content='',
                   order=8),
            Content(type=ContentType.SERVICE.value, key='system_integration', 
                   title='System Integration Planning', 
                   subtitle='Comprehensive integration planning and roadmap development',
                   content='',
                   order=9),
            Content(type=ContentType.SERVICE.value, key='cybersecurity', 
                   title='Cybersecurity Consulting', 
                   subtitle='Security assessments and protection strategy development',
                   content='',
                   order=10),
            Content(type=ContentType.SERVICE.value, key='cloud_migration', 
                   title='Cloud Migration Consulting', 
                   subtitle='Strategic guidance for seamless cloud adoption',
                   content='',
                   order=11),
            Content(type=ContentType.SERVICE.value, key='business_intelligence', 
                   title='Business Intelligence Advisory', 
                   subtitle='Data analytics and reporting strategy consulting',
                   content='',
                   order=12),
            Content(type=ContentType.SERVICE.value, key='it_infrastructure', 
                   title='IT Infrastructure Consulting', 
                   subtitle='Infrastructure planning and optimization strategies',
                   content='',
                   order=13)
        ]
        
        # IT Support Services
        support_services = [
            Content(type=ContentType.SERVICE.value, key='software_install', 
                   title='Software Installation & Maintenance', 
                   subtitle='Professional software deployment and ongoing maintenance',
                   content='',
                   order=14),
            Content(type=ContentType.SERVICE.value, key='remote_support', 
                   title='Remote Tech Support', 
                   subtitle='24/7 helpdesk support for all your technical needs',
                   content='',
                   order=15),
            Content(type=ContentType.SERVICE.value, key='network_monitoring', 
                   title='Network Monitoring', 
                   subtitle='Continuous network monitoring and management services',
                   content='',
                   order=16),
            Content(type=ContentType.SERVICE.value, key='server_admin', 
                   title='Server Administration', 
                   subtitle='Cloud and server system administration services',
                   content='',
                   order=17),
            Content(type=ContentType.SERVICE.value, key='managed_it', 
                   title='Managed IT Services', 
                   subtitle='Comprehensive managed services and maintenance contracts',
                   content='',
                   order=18),
            Content(type=ContentType.SERVICE.value, key='data_backup', 
                   title='Data Backup & Recovery', 
                   subtitle='Robust backup solutions and disaster recovery planning',
                   content='',
                   order=19),
            Content(type=ContentType.SERVICE.value, key='troubleshooting', 
                   title='Troubleshooting & Patching', 
                   subtitle='Expert problem resolution and system patching services',
                   content='',
                   order=20)
        ]
        
        # About page content
        about = Content(
            type=ContentType.ABOUT.value,
            key='main',
            title='About AksharTech',
            subtitle='Transforming businesses through technology since 2010',
            content='AksharTech is a leading IT services provider specializing in software development, IT consulting, and technical support. We help businesses of all sizes leverage technology to improve efficiency, drive innovation, and achieve their strategic goals.\n\nOur team of experienced professionals is committed to delivering high-quality solutions tailored to your unique needs. We pride ourselves on our technical expertise, attention to detail, and dedication to client satisfaction.',
            order=1
        )
        
        # Contact page content
        contact = Content(
            type=ContentType.CONTACT.value,
            key='main',
            title="Get In Touch",
            subtitle="Ready to transform your business with our IT solutions? Let's discuss your project and requirements.",
            content="Our team of experts is ready to help you achieve your technology goals. Whether you need custom software development, IT consulting, or ongoing support, we're here to provide solutions that drive results.",
            order=1
        )
        
        contact_details = [
            Content(type=ContentType.CONTACT.value, key='email', 
                   title='Email Us', content='support@akshartech.us', order=2),
            Content(type=ContentType.CONTACT.value, key='address', 
                   title='US Office', 
                   content='18367 Magnolia Run Lane\nMoseley VA- 23130-1929', 
                   order=3),
            Content(type=ContentType.CONTACT.value, key='hours', 
                   title='Business Hours', 
                   content='Mon - Fri: 9:00 AM - 6:00 PM\n24/7 Emergency Support', 
                   order=4)
        ]
        
        # Add all content to the database
        db.session.add(hero)
        db.session.add(home_hero)
        for item in stats + service_categories + software_services + consulting_services + support_services + [about] + [contact] + contact_details:
            db.session.add(item)
        
        current_app.logger.info('Created default website content')
    
    # Commit all changes
    db.session.commit()
