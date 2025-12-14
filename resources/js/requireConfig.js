//需要使用到的JS位置設定

requirejs.config({

    paths: {
    	 jquery: '../resources/js/jquery-3.4.1.min',
         popper: '../resources/js/popper.min',
         bootstrap: '../resources/js/bootstrap.min',
         jquery_validate: '../resources/js/jquery.validate.min',
         jsgrid: '../resources/js/jsgrid.min',
         jquery_ui: '../resources/js/jquery-ui.min',
         jquery_blockUI: '../resources/js/jquery.blockUI',
         toast: '../resources/js/jquery.toast.min',
         global_setting : '../resources/js/global.setting',
         add_method: '../resources/js/additional-methods.min',
         jquery_validate_addition: '../resources/js/jquery.validate.addition',
         lodash: '../resources/js/lodash.min',
         jquery_cookie: '../resources/js/jquery.cookie',
         uploadimg: '../resources/js/uploadImg',
         sub: '../resources/js/sub',
         print: '../resources/js/print',
         echarts: '../resources/js/echarts',
         multiselect:'../resources/js/jquery.multi-select.min',
         iconfont:'../resources/css/font/iconfont',
         moment:'../resources/js/moment.min',
         fullcalendar:'../resources/js/fullcalendar.min',
         fullcalendartext:'../resources/js/fullcalendar.min.text',
         timepicker:'../resources/js/jquery-ui-timepicker-addon',
         myDatePicker:'../resources/js/myDatepicker',
         selectD:'../resources/js/select2.min',
    },
    map: {
        '*': {
            'popper.js': 'popper'
        }
    },
    // 配置依賴性
    shim: {
        'popper' : {
            deps: ['jquery']  
        },
        'bootstrap': {
            deps: ['popper']   
        },
        'jsgrid': {
            deps: ['jquery']      
        },
        'add_method': {
            deps: ['jquery']      
        },
        'jquery_validate': {
            deps: ['jquery']      
        },
        'jquery_ui': {
            deps: ['jquery','bootstrap']      
        },
        'jquery_blockUI': {
            deps: ['jquery','bootstrap']      
        },
        'global_setting':{
        	deps: ['jquery']
        },
        'toast': {
            deps: ['jquery','bootstrap']      
        },
        'jquery_validate_addition':{
        	deps: ['global_setting']
        },
        'jquery_cookie':{
        	deps: ['jquery']
        },
        'uploadimg':{
        	deps: ['bootstrap','jquery']
        },
        'sub':{
        	deps: ['bootstrap','jquery']
        },
        'print':{
        	deps: ['jquery']
        },
        'echarts':{
        	deps: ['jquery']
        },
        'multiselect':{
        	deps: ['jquery']
        },
        'iconfont':{
        	deps: ['jquery']
        },
        'moment':{
        	deps: ['jquery']
        },
        'fullcalendar':{
        	deps: ['jquery']
        },
        'fullcalendartext':{
        	deps: ['jquery']
        },
         'timepicker':{
            deps: ['jquery']   
        },
        'myDatePicker':{
            deps: ['jquery']   
        },
        'selectD':{
            deps: ['jquery']   
        },
    }
});

//系統參數
var CONFIG = {
				"SYSTEM_NAME":"SHMS",
				"IS_SAFE": {0: "否", 1: "是"},
				"SYSTEM_NAME_CHT":"職業安全衛生資訊管理系統",
                "ADMIN_UNIT_ID": "A01470",
				"CERT_TYPE_ADMIN_ONLY": ["職業安全衛生管理員","職業安全管理師","職業衛生管理師"]
			};
