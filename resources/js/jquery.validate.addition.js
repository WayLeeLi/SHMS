/*addition rule plugin*/
$(document).ready(function(){

if(validatePhone == undefined || !validatePhone) $.getScript("../resources/js/global.setting.js");
	
jQuery.validator.addMethod("phoneTW", function(value, element, param) {
	  // allow any non-whitespace characters as the host part
	  let res = this.optional( element ) || validatePhone(value); //VALID_PHONE_REGEX.test( value );
	  if(!res) $.validator.messages["phoneTW"] =  '請輸入有效的手機號碼，EX:09XXXXXXXX';
	  return res;
	}, '請輸入有效的手機號碼，EX:09XXXXXXXX');

$.validator.addMethod("email", function(value, element) {
	  // allow any non-whitespace characters as the host part
	  let res = this.optional( element ) || VALID_EMAIL_REGEX.test( value );
	  if(!res) $.validator.messages["email"] =  '請輸入有效的EMAIL，EX: 123@abc.xyz';
	  return res;
	}, '請輸入有效的EMAIL，EX: 123@abc.xyz');

$.validator.addMethod("coEmail", function(value, element) {
	  // allow any non-whitespace characters as the host part
	  let res = this.optional( element ) || VALID_COEMAIL_REGEX.test( value.toLowerCase() );
	  if(!res) $.validator.messages["email"] =  '請輸入有效的EMAIL，EX: 123@tcb-bank.com.tw';
	  return res;
	}, '請輸入有效的合庫EMAIL，EX: 123@tcb-bank.com.tw');

$.validator.addMethod('filesize', function(value, element, param) {
	let res = this.optional(element) || (element.files[0].size <= param);
	if(!res) $.validator.messages["filesize"] =  '檔案大小超過限制';
	  return res;
	}, '檔案大小超過限制');



});

