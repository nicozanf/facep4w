#
# py4web app, AI-biorex ported 12.10.2021 08:12:54 UTC+3, src: https://github.com/themesberg/volt-bootstrap-5-dashboard

#
# https://github.com/ali96343/facep4w py4web apps
#
# http://py4web.com 
# http://py4web.com/_documentation/static/en/index.html 
#
#

import os, json, uuid
#
import ombott

from py4web import action, request, response,  abort, redirect, URL, Field
from py4web.utils.form import Form, FormStyleBulma
from py4web.utils.grid import Grid
from py4web.utils.publisher import Publisher, ALLOW_ALL_POLICY
from pydal.validators import IS_NOT_EMPTY, IS_INT_IN_RANGE, IS_IN_SET, IS_IN_DB
from py4web.core import Template, Reloader
from py4web.utils.dbstore import DBStore
from py4web import Session, Cache, Translator, Flash, DAL

from py4web.utils.url_signer import URLSigner

from yatl.helpers import INPUT, H1, HTML, BODY, A, DIV, SPAN, P
from .common import db, session, T, cache, authenticated, unauthenticated, auth
from .settings import APP_NAME


#
# admin panel at APP_NAME/tabinfo
#
# ---------------------- Global -----------------------------------------------------

# exposes services necessary to access the db.thing via ajax
publisher = Publisher(db, policy=ALLOW_ALL_POLICY)
url_signer = URLSigner(session)

Glb= {'debug': True , 'my_app_name': APP_NAME, 'tte_path': '/static/tte', }

# ---------------------- Utils -------------------------------------------------------

def get_ctrl_url(ctrl_nm):
    return "\'" + URL(ctrl_nm) + "\'"

def insert_form_vars(myform, mytable):

    ( row_id, table_row, f0_fld) = ( None, None, None )

    if Glb['debug'] == True:
        print("app:",Glb['my_app_name'])
        _ = [ print (f'     {k}: {v}') for k,v in myform.vars.items() if k != '_formkey']

    f0_name  = [ e for e in mytable.fields if e != 'id' ][0]
    f0_value = myform.vars.get( f0_name  , None )

    if f0_value and ( type( f0_value ) in (str, bytes, list, tuple, dict,) ) and len(f0_value):
        row_id = mytable.insert(**mytable._filter_fields(myform.vars))
        db.commit()

        if row_id:
            table_row = mytable(row_id )

            if table_row:
                if Glb['debug']:
                     print(f'     insert: \"{myform.vars[f0_name]}\" into {mytable[f0_name]}, id = {row_id}' )
                     print(f"     select: \"{table_row[f0_name]}\" from {mytable[f0_name]}, id = {row_id}" )
                     print ()
    else:
        if Glb['debug']:
            print( f"     no entry inserted: (f0_value is None) or (len(f0_value) == 0)")
            print()

    return row_id 



@action('callback', method="GET")
# Note that we do not use a template.  This is a JSON API, not a "web page".
@action.uses(url_signer.verify())
def callback():
     print("Called with:", dict(request.params))
     return dict(messages=request.params.echo)

#
def json2user(mess='mymess', icon_type = 'warning', js_alert='sweet2'):
    response.headers["Content-Type"] = "application/json"
    return json.dumps( {'messages' : f'{mess}', 'icon_type': icon_type, 'js_alert': js_alert})

# ---------------------- Controllers  ------------------------------------------------

@action('X500', method=["GET", "POST"] )
@action.uses(db, session, T, Template('500.html', delimiters='[%[ ]]',))

def X500():
    ctrl_info= { 'c':'X500', 'v':'500.html' }
    messages = ['X500', '500.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('X500') 


    return locals()

@action('X404', method=["GET", "POST"] )
@action.uses(db, session, T, Template('404.html', delimiters='[%[ ]]',))

def X404():
    ctrl_info= { 'c':'X404', 'v':'404.html' }
    messages = ['X404', '404.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('X404') 


    return locals()

@action('lock', method=["GET", "POST"] )
@action.uses(db, session, T, Template('lock.html', delimiters='[%[ ]]',))

def lock():
    ctrl_info= { 'c':'lock', 'v':'lock.html' }
    messages = ['lock', 'lock.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('lock') 


    # 
    flock0= Form(db.dflock0, dbio=False, formstyle=FormStyleBulma)
    if flock0.accepted:
        icon_type ='success' if insert_form_vars(flock0, db.dflock0) else 'info'
        return json2user(mess = str( flock0.form_name ), icon_type=icon_type )
    elif flock0.errors:
        print(f"flock0 has errors: {flock0.errors}")
        return json2user(mess = str(flock0.form_name), icon_type = 'error')

    return locals()

@action('forms', method=["GET", "POST"] )
@action.uses(db, session, T, Template('forms.html', delimiters='[%[ ]]',))

def forms():
    ctrl_info= { 'c':'forms', 'v':'forms.html' }
    messages = ['forms', 'forms.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('forms') 


    # 
    fforms0= Form(db.dfforms0, dbio=False, formstyle=FormStyleBulma)
    if fforms0.accepted:
        icon_type ='success' if insert_form_vars(fforms0, db.dfforms0) else 'info'
        return json2user(mess = str( fforms0.form_name ), icon_type=icon_type )
    elif fforms0.errors:
        print(f"fforms0 has errors: {fforms0.errors}")
        return json2user(mess = str(fforms0.form_name), icon_type = 'error')

    return locals()

@action('index', method=["GET", "POST"] )
@action.uses(db, session, T, Template('index.html', delimiters='[%[ ]]',))

def index():
    ctrl_info= { 'c':'index', 'v':'index.html' }
    messages = ['index', 'index.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('index') 


    # 
    findex0= Form(db.dfindex0, dbio=False, formstyle=FormStyleBulma)
    if findex0.accepted:
        icon_type ='success' if insert_form_vars(findex0, db.dfindex0) else 'info'
        return json2user(mess = str( findex0.form_name ), icon_type=icon_type )
    elif findex0.errors:
        print(f"findex0 has errors: {findex0.errors}")
        return json2user(mess = str(findex0.form_name), icon_type = 'error')

    return locals()

@action('modals', method=["GET", "POST"] )
@action.uses(db, session, T, Template('modals.html', delimiters='[%[ ]]',))

def modals():
    ctrl_info= { 'c':'modals', 'v':'modals.html' }
    messages = ['modals', 'modals.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('modals') 


    # 
    fmodals0= Form(db.dfmodals0, dbio=False, formstyle=FormStyleBulma)
    if fmodals0.accepted:
        icon_type ='success' if insert_form_vars(fmodals0, db.dfmodals0) else 'info'
        return json2user(mess = str( fmodals0.form_name ), icon_type=icon_type )
    elif fmodals0.errors:
        print(f"fmodals0 has errors: {fmodals0.errors}")
        return json2user(mess = str(fmodals0.form_name), icon_type = 'error')

    # 
    fmodals1= Form(db.dfmodals1, dbio=False, formstyle=FormStyleBulma)
    if fmodals1.accepted:
        icon_type ='success' if insert_form_vars(fmodals1, db.dfmodals1) else 'info'
        return json2user(mess = str( fmodals1.form_name ), icon_type=icon_type )
    elif fmodals1.errors:
        print(f"fmodals1 has errors: {fmodals1.errors}")
        return json2user(mess = str(fmodals1.form_name), icon_type = 'error')

    # 
    fmodals2= Form(db.dfmodals2, dbio=False, formstyle=FormStyleBulma)
    if fmodals2.accepted:
        icon_type ='success' if insert_form_vars(fmodals2, db.dfmodals2) else 'info'
        return json2user(mess = str( fmodals2.form_name ), icon_type=icon_type )
    elif fmodals2.errors:
        print(f"fmodals2 has errors: {fmodals2.errors}")
        return json2user(mess = str(fmodals2.form_name), icon_type = 'error')

    return locals()

@action('buttons', method=["GET", "POST"] )
@action.uses(db, session, T, Template('buttons.html', delimiters='[%[ ]]',))

def buttons():
    ctrl_info= { 'c':'buttons', 'v':'buttons.html' }
    messages = ['buttons', 'buttons.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('buttons') 


    # 
    fbuttons0= Form(db.dfbuttons0, dbio=False, formstyle=FormStyleBulma)
    if fbuttons0.accepted:
        icon_type ='success' if insert_form_vars(fbuttons0, db.dfbuttons0) else 'info'
        return json2user(mess = str( fbuttons0.form_name ), icon_type=icon_type )
    elif fbuttons0.errors:
        print(f"fbuttons0 has errors: {fbuttons0.errors}")
        return json2user(mess = str(fbuttons0.form_name), icon_type = 'error')

    return locals()

@action('signXup', method=["GET", "POST"] )
@action.uses(db, session, T, Template('sign-up.html', delimiters='[%[ ]]',))

def signXup():
    ctrl_info= { 'c':'signXup', 'v':'sign-up.html' }
    messages = ['signXup', 'sign-up.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('signXup') 


    # 
    fsignXup0= Form(db.dfsignXup0, dbio=False, formstyle=FormStyleBulma)
    if fsignXup0.accepted:
        icon_type ='success' if insert_form_vars(fsignXup0, db.dfsignXup0) else 'info'
        return json2user(mess = str( fsignXup0.form_name ), icon_type=icon_type )
    elif fsignXup0.errors:
        print(f"fsignXup0 has errors: {fsignXup0.errors}")
        return json2user(mess = str(fsignXup0.form_name), icon_type = 'error')

    return locals()

@action('signXin', method=["GET", "POST"] )
@action.uses(db, session, T, Template('sign-in.html', delimiters='[%[ ]]',))

def signXin():
    ctrl_info= { 'c':'signXin', 'v':'sign-in.html' }
    messages = ['signXin', 'sign-in.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('signXin') 


    # 
    fsignXin0= Form(db.dfsignXin0, dbio=False, formstyle=FormStyleBulma)
    if fsignXin0.accepted:
        icon_type ='success' if insert_form_vars(fsignXin0, db.dfsignXin0) else 'info'
        return json2user(mess = str( fsignXin0.form_name ), icon_type=icon_type )
    elif fsignXin0.errors:
        print(f"fsignXin0 has errors: {fsignXin0.errors}")
        return json2user(mess = str(fsignXin0.form_name), icon_type = 'error')

    return locals()

@action('settings', method=["GET", "POST"] )
@action.uses(db, session, T, Template('settings.html', delimiters='[%[ ]]',))

def settings():
    ctrl_info= { 'c':'settings', 'v':'settings.html' }
    messages = ['settings', 'settings.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('settings') 


    # 
    fsettings0= Form(db.dfsettings0, dbio=False, formstyle=FormStyleBulma)
    if fsettings0.accepted:
        icon_type ='success' if insert_form_vars(fsettings0, db.dfsettings0) else 'info'
        return json2user(mess = str( fsettings0.form_name ), icon_type=icon_type )
    elif fsettings0.errors:
        print(f"fsettings0 has errors: {fsettings0.errors}")
        return json2user(mess = str(fsettings0.form_name), icon_type = 'error')

    # 
    fsettings1= Form(db.dfsettings1, dbio=False, formstyle=FormStyleBulma)
    if fsettings1.accepted:
        icon_type ='success' if insert_form_vars(fsettings1, db.dfsettings1) else 'info'
        return json2user(mess = str( fsettings1.form_name ), icon_type=icon_type )
    elif fsettings1.errors:
        print(f"fsettings1 has errors: {fsettings1.errors}")
        return json2user(mess = str(fsettings1.form_name), icon_type = 'error')

    return locals()

@action('dashboard', method=["GET", "POST"] )
@action.uses(db, session, T, Template('dashboard.html', delimiters='[%[ ]]',))

def dashboard():
    ctrl_info= { 'c':'dashboard', 'v':'dashboard.html' }
    messages = ['dashboard', 'dashboard.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('dashboard') 


    rows_tdashboard0= db(db.tdashboard0).select()
    # 
    fdashboard0= Form(db.dfdashboard0, dbio=False, formstyle=FormStyleBulma)
    if fdashboard0.accepted:
        icon_type ='success' if insert_form_vars(fdashboard0, db.dfdashboard0) else 'info'
        return json2user(mess = str( fdashboard0.form_name ), icon_type=icon_type )
    elif fdashboard0.errors:
        print(f"fdashboard0 has errors: {fdashboard0.errors}")
        return json2user(mess = str(fdashboard0.form_name), icon_type = 'error')

    return locals()

@action('typography', method=["GET", "POST"] )
@action.uses(db, session, T, Template('typography.html', delimiters='[%[ ]]',))

def typography():
    ctrl_info= { 'c':'typography', 'v':'typography.html' }
    messages = ['typography', 'typography.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('typography') 


    # 
    ftypography0= Form(db.dftypography0, dbio=False, formstyle=FormStyleBulma)
    if ftypography0.accepted:
        icon_type ='success' if insert_form_vars(ftypography0, db.dftypography0) else 'info'
        return json2user(mess = str( ftypography0.form_name ), icon_type=icon_type )
    elif ftypography0.errors:
        print(f"ftypography0 has errors: {ftypography0.errors}")
        return json2user(mess = str(ftypography0.form_name), icon_type = 'error')

    return locals()

@action('transactions', method=["GET", "POST"] )
@action.uses(db, session, T, Template('transactions.html', delimiters='[%[ ]]',))

def transactions():
    ctrl_info= { 'c':'transactions', 'v':'transactions.html' }
    messages = ['transactions', 'transactions.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('transactions') 


    rows_ttransactions0= db(db.ttransactions0).select()
    # 
    ftransactions0= Form(db.dftransactions0, dbio=False, formstyle=FormStyleBulma)
    if ftransactions0.accepted:
        icon_type ='success' if insert_form_vars(ftransactions0, db.dftransactions0) else 'info'
        return json2user(mess = str( ftransactions0.form_name ), icon_type=icon_type )
    elif ftransactions0.errors:
        print(f"ftransactions0 has errors: {ftransactions0.errors}")
        return json2user(mess = str(ftransactions0.form_name), icon_type = 'error')

    return locals()

@action('notifications', method=["GET", "POST"] )
@action.uses(db, session, T, Template('notifications.html', delimiters='[%[ ]]',))

def notifications():
    ctrl_info= { 'c':'notifications', 'v':'notifications.html' }
    messages = ['notifications', 'notifications.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('notifications') 


    # 
    fnotifications0= Form(db.dfnotifications0, dbio=False, formstyle=FormStyleBulma)
    if fnotifications0.accepted:
        icon_type ='success' if insert_form_vars(fnotifications0, db.dfnotifications0) else 'info'
        return json2user(mess = str( fnotifications0.form_name ), icon_type=icon_type )
    elif fnotifications0.errors:
        print(f"fnotifications0 has errors: {fnotifications0.errors}")
        return json2user(mess = str(fnotifications0.form_name), icon_type = 'error')

    return locals()

@action('upgradeXtoXpro', method=["GET", "POST"] )
@action.uses(db, session, T, Template('upgrade-to-pro.html', delimiters='[%[ ]]',))

def upgradeXtoXpro():
    ctrl_info= { 'c':'upgradeXtoXpro', 'v':'upgrade-to-pro.html' }
    messages = ['upgradeXtoXpro', 'upgrade-to-pro.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('upgradeXtoXpro') 


    rows_tupgradeXtoXpro0= db(db.tupgradeXtoXpro0).select()
    return locals()

@action('resetXpassword', method=["GET", "POST"] )
@action.uses(db, session, T, Template('reset-password.html', delimiters='[%[ ]]',))

def resetXpassword():
    ctrl_info= { 'c':'resetXpassword', 'v':'reset-password.html' }
    messages = ['resetXpassword', 'reset-password.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('resetXpassword') 


    # 
    fresetXpassword0= Form(db.dfresetXpassword0, dbio=False, formstyle=FormStyleBulma)
    if fresetXpassword0.accepted:
        icon_type ='success' if insert_form_vars(fresetXpassword0, db.dfresetXpassword0) else 'info'
        return json2user(mess = str( fresetXpassword0.form_name ), icon_type=icon_type )
    elif fresetXpassword0.errors:
        print(f"fresetXpassword0 has errors: {fresetXpassword0.errors}")
        return json2user(mess = str(fresetXpassword0.form_name), icon_type = 'error')

    return locals()

@action('forgotXpassword', method=["GET", "POST"] )
@action.uses(db, session, T, Template('forgot-password.html', delimiters='[%[ ]]',))

def forgotXpassword():
    ctrl_info= { 'c':'forgotXpassword', 'v':'forgot-password.html' }
    messages = ['forgotXpassword', 'forgot-password.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('forgotXpassword') 


    # 
    fforgotXpassword0= Form(db.dfforgotXpassword0, dbio=False, formstyle=FormStyleBulma)
    if fforgotXpassword0.accepted:
        icon_type ='success' if insert_form_vars(fforgotXpassword0, db.dfforgotXpassword0) else 'info'
        return json2user(mess = str( fforgotXpassword0.form_name ), icon_type=icon_type )
    elif fforgotXpassword0.errors:
        print(f"fforgotXpassword0 has errors: {fforgotXpassword0.errors}")
        return json2user(mess = str(fforgotXpassword0.form_name), icon_type = 'error')

    return locals()

@action('bootstrapXtables', method=["GET", "POST"] )
@action.uses(db, session, T, Template('bootstrap-tables.html', delimiters='[%[ ]]',))

def bootstrapXtables():
    ctrl_info= { 'c':'bootstrapXtables', 'v':'bootstrap-tables.html' }
    messages = ['bootstrapXtables', 'bootstrap-tables.html']

    ctrl_tabinfo_url =  get_ctrl_url('tabinfo') 
    ctrl_template_url = get_ctrl_url('bootstrapXtables') 


    rows_tbootstrapXtables0= db(db.tbootstrapXtables0).select()
    rows_tbootstrapXtables1= db(db.tbootstrapXtables1).select()
    # 
    fbootstrapXtables0= Form(db.dfbootstrapXtables0, dbio=False, formstyle=FormStyleBulma)
    if fbootstrapXtables0.accepted:
        icon_type ='success' if insert_form_vars(fbootstrapXtables0, db.dfbootstrapXtables0) else 'info'
        return json2user(mess = str( fbootstrapXtables0.form_name ), icon_type=icon_type )
    elif fbootstrapXtables0.errors:
        print(f"fbootstrapXtables0 has errors: {fbootstrapXtables0.errors}")
        return json2user(mess = str(fbootstrapXtables0.form_name), icon_type = 'error')

    return locals()


from pydal.restapi import RestAPI, Policy

policy = Policy()

policy.set('*', 'GET', authorize=True, allowed_patterns=['*'])
policy.set('*', 'PUT', authorize=True)
policy.set('*', 'POST', authorize=True)
policy.set('*', 'DELETE', authorize=True)

@action('api/<tablename>/', method=["GET", "POST", "PUT", "DELETE"])
@action('api/<tablename>/<rec_id>', method=["GET", "POST", "PUT", "DELETE"])
def api(tablename, rec_id=None):
    return RestAPI(db, policy)(request.method,
                               tablename,
                               rec_id,
                               request.GET,
                               request.POST
                               )
# 
# curl -X  GET   http://localhost:8000/volt/api/test_table/
# curl -X  GET   http://localhost:8000/volt/api/test_table/9
# curl -X DELETE  http://localhost:8000/volt/api/test_table/2
# curl -X POST -d 'f0=1111111&f1=2222222222&f2=33333333333' http://localhost:8000/volt/api/test_table/
# curl -X PUT -d 'f0=1111111&f1=2222222222&f2=33333333333' http://localhost:8000/volt/api/test_table/9
# curl -X POST -d f0=1111111   -d f1=2222222222 -d f2=8888888888  http://localhost:8000/volt/api/test_table/
#
#  pip install httpie
#  http         localhost:8000/volt/api/test_table/
#  http         localhost:8000/volt/api/test_table/9
#  http -f POST localhost:8000/volt/api/test_table/ f0=111111 f1=2222222 f2=333333
#  http -f DELETE localhost:8000/volt/api/test_table/2
#  http -f PUT localhost:8000/volt/api/test_table/2 f0=111111 f1=2222222 f2=333333

#------------------------------------------------------------------------------------
#curl -i -X POST -H 'Content-Type: application/json' -d '{"name": "New item", "year": "2009"}' http://rest-api.io/items
#curl -i -X PUT -H 'Content-Type: application/json' -d '{"name": "Updated item", "year": "2010"}' http://rest-api.io/items/5069b47aa892630aae059584


# @ombott.error(404, '/web<_:path()>')
# @ombott.error(404, '/web/<params:path>')
@ombott.error(404, f"/{APP_NAME}")
def url_not_found(route, params):
    # print ( str(dict(route=route, params=params))  )

    ombott.response.status = 303
    ombott.response.headers["Location"] = f"/{APP_NAME}"
    #ombott.response.headers['Location'] = route #f'/{APP_NAME}'



# -------------------- tabinfo: my backend ------------------------------------

@unauthenticated("tabinfo", "tabinfo.html")
def tabinfo():
    user = auth.get_user()
    # simple backand-admin-panel (to be continued)
    message = T("Hello {first_name}".format(**user) if user else "Hello")
    return dict(message=message, )

