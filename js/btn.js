// JavaScript Document
$(function(){
	var up = $('#upload').Huploadify({
		auto:false,
		fileTypeExts:'*.jpg;*.png;*.exe;*.mp3;*.mp4;*.zip;*.doc;*.docx;*.ppt;*.pptx;*.xls;*.xlsx;*.pdf',
		multi:true,
		fileSizeLimit:99999999,
		breakPoints:true,
		saveInfoLocal:true,
		showUploadedPercent:true,//是否实时显示上传的百分比，如20%
		showUploadedSize:true,
		removeTimeout:9999999,
		uploader:'upload.php',
		onUploadStart:function(){
			//up.settings('formData', {aaaaa:'1111111',bb:'2222'});
			up.Huploadify('settings','formData', {aaaaa:'1111111',bb:'2222'});
		},
		onUploadSuccess:function(file){
			//alert('上传成功');
		},
		onUploadComplete:function(){
			//alert('上传完成');
		},
		/*getUploadedSize:function(file){
			var data = {
				data : {
					fileName : file.name,
					lastModifiedDate : file.lastModifiedDate.getTime()
				}
			};
			var url = 'http://49.4.132.173:8080/admin/uploadfile/index/';
			var uploadedSize = 0;
			$.ajax({
				url : url,
				data : data,
				async : false,
				type : 'POST',
				success : function(returnData){
					returnData = JSON.parse(returnData);
					uploadedSize = returnData.uploadedSize;
				}
			});
			return uploadedSize;
		}	*/	
	});


});
