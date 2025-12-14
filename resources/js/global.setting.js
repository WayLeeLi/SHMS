/**
 * for toast
 */
function shmsToast(msg, headText = '', icon = 'info'){
	$.toast({
	    heading: headText,
		text: msg,
	    dismissible: true, /** true/false - If you want to show the button to dismiss the toast manually **/
	    stackable: true, /** true/false - If you want the toasts to be stackable **/
	    pauseDelayOnHover: true, /** true/false - If you want to pause the delay of toast when hovering over the toast **/
	    /*
	    style: {
	        toast: 'bg-primary', // Classes you want to apply separated my a space to each created toast element (.toast) /
	        info: 'bg-info', // Classes you want to apply separated my a space to modify the "info" type style  /
	        success: 'bg-success', // Classes you want to apply separated my a space to modify the "success" type style  /
	        warning: 'bg-warning', // Classes you want to apply separated my a space to modify the "warning" type style  /
	        error: 'bg-danger', // Classes you want to apply separated my a space to modify the "error" type style  /
	    },
	    */
	    showHideTransition : 'slide',  // It can be plain, fade or slide
		  textColor : '#fff',            // text color
		  //bgColor: '#17a2b8',
		  allowToastClose : true,       // Show the close button or not
		  hideAfter : 2000,              // `false` to make it sticky or time in miliseconds to hide after
		  stack : 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
		  textAlign : 'left',            // Alignment of text i.e. left, right, center
		  position : 'mid-center',
		  icon: icon
	});
}
//$.toastDefaults.position = 'top-center';
/*end*/

/*table dialog common setting*/
dlgSetting = {
		classes:{
       	 "ui-dialog": "border border-primary",
       	 //"ui-dialog-titlebar": "bg-primary",
       	 //"ui-dialog-title": "modal-title",
       	 "ui-dialog-titlebar-close": "btn btn-danger",
       	 //"ui-dialog-content": "modal-body",
       	 //"ui-dialog-buttonpane": "modal-footer"
        },
        show: 'blind',
        hide: 'blind',
        
}
const customCloseBtn = ()=>{
	$(".ui-dialog-titlebar-close").removeClass("ui-dialog-titlebar-close ui-button-icon-only").addClass("titlebar-close").css("position", "absolute").css("right", "1em").html("Close");
}
/*end*/
/*js grid */
$(".jsgrid-cell").hover(function(){
	console.log("hover");
});
$(".jsgrid-cell").on("mouseenter", function(){
	console.log("enter");
});
$(function(){
	//jsGrid.ControlField.prototype.editButtonClass = "icon-cmdEdit24";
	//jsGrid.ControlField.prototype.deleteButtonClass = "btn-outline-primary btn-sm";//" fas fa-trash";
	//jsGrid.ControlField.prototype.insertButtonClass = "icon-cmdSave24";
	//jsGrid.ControlField.prototype.insertModeButtonClass = "icon-cmdAdd24";
	//jsGrid.ControlField.prototype.updateButtonClass = "icon-cmdSave24";
	//jsGrid.ControlField.prototype.cancelEditButtonClass = "icon-cmdCloseLite24";
	//jsGrid.ControlField.prototype.cancelInsertButtonClass = "icon-cmdCloseLite24";
	//jsGrid.ControlField.prototype.searchButtonClass = "fa trash-alt";
	//jsGrid.ControlField.prototype.clearFilterButtonClass = "fa trash-alt";
	});
/*end*/

(function($) {
	  $.fn.inputFilter = function(inputFilter) {
	    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
	      if (inputFilter(this.value)) {
	        this.oldValue = this.value;
	        this.oldSelectionStart = this.selectionStart;
	        this.oldSelectionEnd = this.selectionEnd;
	      } else if (this.hasOwnProperty("oldValue")) {
	        this.value = this.oldValue;
	        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
	      } else {
	        this.value = "";
	      }
	    });
	  };
}(jQuery));

function setHeight(jq_in){
    jq_in.each(function(index, elem){
        // This line will work with pure Javascript (taken from NicB's answer):
        elem.style.height = elem.scrollHeight+3+'px'; 
    });
}

const VALID_EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateEmail(email) {
    const re = VALID_EMAIL_REGEX;
    return re.test(String(email).toLowerCase());
}

//only one mail
const VALID_COEMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@tcb-bank\.com\.tw$/;
//mulit mail separated by comma
//const VALID_COEMAIL_REGEX = /^(?<mail>(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@tcb-bank\.com\.tw)(,(?&mail))*$/;
function validateCoEmail(email) {
    const re = VALID_COEMAIL_REGEX;
    return re.test(String(email).toLowerCase());
}

const VALID_PHONE_REGEX = /^09[0-9]{8}$/;
function validatePhone(phone) {
    const re = VALID_PHONE_REGEX;
    return re.test(String(phone).toLowerCase());
}

function maskID(id){
	if(id.length == 0) return "";
	let divide = id.length / 3;
	return id.substring(0, divide) + "*".repeat(divide+1) + id.substring(divide*2 + 1);
}


function createSelect(id, data, key, val, selectedKey){
	$.each(data, function( index, item ) {
		if(item[key] == selectedKey){
			$('#' + id).append($('<option>').val(item[key]).text(item[val]).attr('selected','selected'));
		}else{
			$('#' + id).append($('<option>').val(item[key]).text(item[val]));	
		}
	});
}
//check file path
function hasFile(path){
	return /^(\\|\/)(SHMS)/.test(path);
}

function convert2YMD(date){
	return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}

//excel
function exportExcel(url){				
	  var newForm = jQuery('<form>', {
		  	'action':  url,
		  	'method': 'post',
	        'target': '_blank'
	    }).append(jQuery('<input>',{
	    	'name' : '_csrf',
	    	'value': $.cookie("XSRF-TOKEN"),
	    	'type': 'text'
	    }));
	  	var iframe = document.createElement('IFRAME');
		iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;');
		$(iframe).append(newForm);
		document.body.appendChild(iframe);
	    newForm.submit();
	    iframe.parentNode.removeChild(iframe);
}