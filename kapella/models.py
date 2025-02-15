import datetime

from .common import db, Field, Tags, groups
from pydal.validators import *
from py4web.utils.populate import populate

# py4web app, AI-biorex ported 12.10.2021 08:48:01 UTC+3, src: https://github.com/BootstrapDash/Kapella-Free-Bootstrap-Admin-Template


#import pydal
#from py4web import *
#from apps.myapp.models import db

if not db(db.auth_user).count():
    u1 = {
        "username": "anil",
        "email": "anil@nil.com",
        "password": str(CRYPT()("xyz12345")[0]),
        "first_name": "Anil_first",
        "last_name": "Anil_Last",
    }

    u2 = {
        "username": "bnil",
        "email": "bnil@nil.com",
        "password": str(CRYPT()("xyz12345")[0]),
        "first_name": "Bnil_first",
        "last_name": "Bnil_Last",
    }

    u3 = {
        "username": "cnil",
        "email": "cnil@nil.com",
        "password": str(CRYPT()("xyz12345")[0]),
        "first_name": "Cnil_first",
        "last_name": "Cnil_Last",
    }

    for e in [u1, u2, u3]: db.auth_user.insert(**db.auth_user._filter_fields(e) )
    db.commit()

    #groups = Tags(db.auth_user)

    groups.add(1, 'manager')
    groups.add(2, ['dancer', 'teacher'])
    groups.add(3, 'dancer')
    db.commit()

db.define_table(
    'test_table',
    Field( 'f0', 'string', label='l0'),
    Field( 'f1', 'string', label='l1'),
    Field( 'f2', 'string', label='l2'),
    )
db.commit()

if not db(db.test_table).count():
    populate(db.test_table, n=50)
    db.commit()

db.define_table( 'uploaded_files',
    Field('orig_file_name', requires=IS_NOT_EMPTY(),  ),
    Field("remark",'text',),
    Field('uniq_file_name', requires=IS_NOT_EMPTY(),  ),
    Field('time', 'datetime', editable=False, default = datetime.datetime.now(), requires = IS_DATETIME( )),
    )

db.commit()
#
db.define_table( 'app_images',
    Field('f0', requires=IS_NOT_EMPTY(),  ),
    )
    
if not db(db.app_images).count():
    db.app_images.insert(f0='images/favicon.png', )
    db.app_images.insert(f0='images/faces/face4.jpg', )
    db.app_images.insert(f0='images/faces/face2.jpg', )
    db.app_images.insert(f0='images/faces/face3.jpg', )
    db.app_images.insert(f0='images/logo.svg', )
    db.app_images.insert(f0='images/logo-mini.svg', )
    db.app_images.insert(f0='images/faces/face28.png', )
    db.app_images.insert(f0='images/dashboard/face29.png', )
    db.app_images.insert(f0='images/dashboard/live.png', )
    db.app_images.insert(f0='images/faces/face1.jpg', )
    db.app_images.insert(f0='images/faces/face5.jpg', )
    db.app_images.insert(f0='images/faces/face6.jpg', )
    db.app_images.insert(f0='images/faces/face7.jpg', )
    db.app_images.insert(f0='images/faces/face13.jpg', )

db.commit()

db.define_table( 'app_css_js',
    Field('f0', requires=IS_NOT_EMPTY(),  ),
    )

db.define_table( 'app_js_script',
    Field('f0', requires=IS_NOT_EMPTY(),  ),
    Field('in_html', ),
    )

db.define_table( 'app_html_text',
    Field('f0', requires=IS_NOT_EMPTY(), ),
    Field('key',requires=IS_NOT_EMPTY(), ),
    Field('in_html', ),
    )

db.commit()

db.define_table(
    'dfbasicXelements0',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','string', length=1024, default='fNo' ),
    Field('f3','string', length=1024, default='fNo' ),
    Field('f4','boolean', False ),
    )
db.commit()

db.define_table(
    'dfbasicXelements1',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','string', length=1024, default='fNo' ),
    Field('f3','string', length=1024, default='fNo' ),
    Field('f4','string', length=1024, default='fNo' ),
    Field('f5','boolean', False ),
    )
db.commit()

db.define_table(
    'dfbasicXelements2',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','string', length=1024, default='fNo' ),
    Field('f3','string', length=1024, default='fNo' ),
    Field('f4','string', length=1024, default='fNo' ),
    Field('f5','string', length=1024, default='fNo' ),
    Field('f6','string', length=1024, default='fNo' ),
    Field('f7','text', length=1024, default='fNo' ),
    )
db.commit()

db.define_table(
    'dfbasicXelements3',
    Field('f0','boolean', False ),
    Field('f1','boolean', False ),
    Field('f2','boolean', False ),
    Field('f3','boolean', False ),
    Field('f4','string', length=1024, default='fNo' ),
    Field('f5','string', length=1024, default='fNo' ),
    Field('f6','string', length=1024, default='fNo' ),
    Field('f7','string', length=1024, default='fNo' ),
    )
db.commit()

db.define_table(
    'dfbasicXelements4',
    Field('f0','boolean', False ),
    Field('f1','boolean', False ),
    Field('f2','boolean', False ),
    Field('f3','boolean', False ),
    Field('f4','boolean', False ),
    Field('f5','string', length=1024, default='fNo' ),
    Field('f6','string', length=1024, default='fNo' ),
    Field('f7','string', length=1024, default='fNo' ),
    Field('f8','string', length=1024, default='fNo' ),
    Field('f9','string', length=1024, default='fNo' ),
    )
db.commit()

db.define_table(
    'dfbasicXelements5',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','boolean', False ),
    )
db.commit()

db.define_table(
    'dfbasicXelements6',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','string', length=1024, default='fNo' ),
    Field('f3','string', length=1024, default='fNo' ),
    Field('f4','string', length=1024, default='fNo' ),
    Field('f5','string', length=1024, default='fNo' ),
    Field('f6','string', length=1024, default='fNo' ),
    Field('f7','string', length=1024, default='fNo' ),
    Field('f8','string', length=1024, default='fNo' ),
    Field('f9','string', length=1024, default='fNo' ),
    Field('f10','string', length=1024, default='fNo' ),
    Field('f11','string', length=1024, default='fNo' ),
    Field('f12','string', length=1024, default='fNo' ),
    )
db.commit()

db.define_table(
    'dfloginA0',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','boolean', False ),
    )
db.commit()

db.define_table(
    'dfloginX20',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','boolean', False ),
    )
db.commit()

db.define_table(
    'dfregisterA0',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','string', length=1024, default='fNo' ),
    Field('f3','string', length=1024, default='fNo' ),
    Field('f4','boolean', False ),
    )
db.commit()

db.define_table(
    'dfregisterX20',
    Field('f0','string', length=1024, default='fNo' ),
    Field('f1','string', length=1024, default='fNo' ),
    Field('f2','string', length=1024, default='fNo' ),
    Field('f3','string', length=1024, default='fNo' ),
    Field('f4','boolean', False ),
    )
db.commit()

db.define_table(
    'dflockXscreen0',
    Field('f0','string', length=1024, default='fNo' ),
    )
db.commit()

db.define_table(
    'tbasicXtable0',
    Field('f0','string', length=1024, default='tNo' ),
    Field('f1','string', length=1024, default='tNo' ),
    Field('f2','string', length=1024, default='tNo' ),
    Field('f3','string', length=1024, default='tNo' ),
    )
db.commit()

db.define_table(
    'tbasicXtable1',
    Field('f0','string', length=1024, default='tNo' ),
    Field('f1','string', length=1024, default='tNo' ),
    Field('f2','string', length=1024, default='tNo' ),
    Field('f3','string', length=1024, default='tNo' ),
    )
db.commit()

db.define_table(
    'tbasicXtable2',
    Field('f0','string', length=1024, default='tNo' ),
    Field('f1','string', length=1024, default='tNo' ),
    Field('f2','string', length=1024, default='tNo' ),
    Field('f3','string', length=1024, default='tNo' ),
    Field('f4','string', length=1024, default='tNo' ),
    )
db.commit()

db.define_table(
    'tbasicXtable3',
    Field('f0','string', length=1024, default='tNo' ),
    Field('f1','string', length=1024, default='tNo' ),
    Field('f2','string', length=1024, default='tNo' ),
    Field('f3','string', length=1024, default='tNo' ),
    Field('f4','string', length=1024, default='tNo' ),
    )
db.commit()

db.define_table(
    'tbasicXtable4',
    Field('f0','string', length=1024, default='tNo' ),
    Field('f1','string', length=1024, default='tNo' ),
    Field('f2','string', length=1024, default='tNo' ),
    Field('f3','string', length=1024, default='tNo' ),
    )
db.commit()

db.define_table(
    'tbasicXtable5',
    Field('f0','string', length=1024, default='tNo' ),
    Field('f1','string', length=1024, default='tNo' ),
    Field('f2','string', length=1024, default='tNo' ),
    Field('f3','string', length=1024, default='tNo' ),
    Field('f4','string', length=1024, default='tNo' ),
    )
db.commit()

if not db(db.tbasicXtable0).count():
    db.tbasicXtable0.insert(f0="Jacob", f1="53275531", f2="12 May 2017", f3="<label class=\"badge badge-danger\">Pending</label>")
    db.tbasicXtable0.insert(f0="Messsy", f1="53275532", f2="15 May 2017", f3="<label class=\"badge badge-warning\">In progress</label>")
    db.tbasicXtable0.insert(f0="John", f1="53275533", f2="14 May 2017", f3="<label class=\"badge badge-info\">Fixed</label>")
    db.tbasicXtable0.insert(f0="Peter", f1="53275534", f2="16 May 2017", f3="<label class=\"badge badge-success\">Completed</label>")
    db.tbasicXtable0.insert(f0="Dave", f1="53275535", f2="20 May 2017", f3="<label class=\"badge badge-warning\">In progress</label>")
    db.commit()

if not db(db.tbasicXtable1).count():
    db.tbasicXtable1.insert(f0="Jacob", f1="Photoshop", f2="<i class=\"mdi mdi-arrow-down\"></i>", f3="<label class=\"badge badge-danger\">Pending</label>")
    db.tbasicXtable1.insert(f0="Messsy", f1="Flash", f2="<i class=\"mdi mdi-arrow-down\"></i>", f3="<label class=\"badge badge-warning\">In progress</label>")
    db.tbasicXtable1.insert(f0="John", f1="Premier", f2="<i class=\"mdi mdi-arrow-down\"></i>", f3="<label class=\"badge badge-info\">Fixed</label>")
    db.tbasicXtable1.insert(f0="Peter", f1="After effects", f2="<i class=\"mdi mdi-arrow-up\"></i>", f3="<label class=\"badge badge-success\">Completed</label>")
    db.tbasicXtable1.insert(f0="Dave", f1="53275535", f2="<i class=\"mdi mdi-arrow-up\"></i>", f3="<label class=\"badge badge-warning\">In progress</label>")
    db.commit()

if not db(db.tbasicXtable2).count():
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="Herman Beck", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\"></div></div>", f3="$ 77.99", f4="May 15, 2015")
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="Messsy Adam", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"75\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\"></div></div>", f3="$245.30", f4="July 1, 2015")
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="John Richards", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"90\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 90%\"></div></div>", f3="$138.00", f4="Apr 12, 2015")
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="Peter Meggik", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"50\" class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 50%\"></div></div>", f3="$ 77.99", f4="May 15, 2015")
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="Edward", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"35\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 35%\"></div></div>", f3="$ 160.25", f4="May 03, 2015")
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="John Doe", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"65\" class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\"></div></div>", f3="$ 123.21", f4="April 05, 2015")
    db.tbasicXtable2.insert(f0="<img alt=\"image\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==\"/>", f1="Henry Tom", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"20\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 20%\"></div></div>", f3="$ 150.00", f4="June 16, 2015")
    db.commit()

if not db(db.tbasicXtable3).count():
    db.tbasicXtable3.insert(f0="1", f1="Herman Beck", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"25\" class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\"></div></div>", f3="$ 77.99", f4="May 15, 2015")
    db.tbasicXtable3.insert(f0="2", f1="Messsy Adam", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"75\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\"></div></div>", f3="$245.30", f4="July 1, 2015")
    db.tbasicXtable3.insert(f0="3", f1="John Richards", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"90\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 90%\"></div></div>", f3="$138.00", f4="Apr 12, 2015")
    db.tbasicXtable3.insert(f0="4", f1="Peter Meggik", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"50\" class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 50%\"></div></div>", f3="$ 77.99", f4="May 15, 2015")
    db.tbasicXtable3.insert(f0="5", f1="Edward", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"35\" class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 35%\"></div></div>", f3="$ 160.25", f4="May 03, 2015")
    db.tbasicXtable3.insert(f0="6", f1="John Doe", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"65\" class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\"></div></div>", f3="$ 123.21", f4="April 05, 2015")
    db.tbasicXtable3.insert(f0="7", f1="Henry Tom", f2="<div class=\"progress\"><div aria-valuemax=\"100\" aria-valuemin=\"0\" aria-valuenow=\"20\" class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 20%\"></div></div>", f3="$ 150.00", f4="June 16, 2015")
    db.commit()

if not db(db.tbasicXtable4).count():
    db.tbasicXtable4.insert(f0="1", f1="Herman Beck", f2="$ 77.99", f3="May 15, 2015")
    db.tbasicXtable4.insert(f0="2", f1="Messsy Adam", f2="$245.30", f3="July 1, 2015")
    db.tbasicXtable4.insert(f0="3", f1="John Richards", f2="$138.00", f3="Apr 12, 2015")
    db.tbasicXtable4.insert(f0="4", f1="Peter Meggik", f2="$ 77.99", f3="May 15, 2015")
    db.tbasicXtable4.insert(f0="5", f1="Edward", f2="$ 160.25", f3="May 03, 2015")
    db.tbasicXtable4.insert(f0="6", f1="John Doe", f2="$ 123.21", f3="April 05, 2015")
    db.tbasicXtable4.insert(f0="7", f1="Henry Tom", f2="$ 150.00", f3="June 16, 2015")
    db.commit()

if not db(db.tbasicXtable5).count():
    db.tbasicXtable5.insert(f0="1", f1="Herman Beck", f2="Photoshop", f3="$ 77.99", f4="May 15, 2015")
    db.tbasicXtable5.insert(f0="2", f1="Messsy Adam", f2="Flash", f3="$245.30", f4="July 1, 2015")
    db.tbasicXtable5.insert(f0="3", f1="John Richards", f2="Premeire", f3="$138.00", f4="Apr 12, 2015")
    db.tbasicXtable5.insert(f0="4", f1="Peter Meggik", f2="After effects", f3="$ 77.99", f4="May 15, 2015")
    db.tbasicXtable5.insert(f0="5", f1="Edward", f2="Illustrator", f3="$ 160.25", f4="May 03, 2015")
    db.commit()
