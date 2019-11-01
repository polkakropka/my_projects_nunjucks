import $ from "jquery";

const upload = () => {
    const Upload = $('.upload');
    const errorMsgDiv = $('.error-msg', '.upload');
    let uploadLabel = $('.upload__label');
    let uploadContainer = $('.upload__container');
    let errorSizeMsg = Upload.data("contentSizeError");
    let errorTypeMsg = Upload.data("contentTypeError");
    let limitFiles = Upload.data("fileMax");
    let limitMsg =  Upload.data("contentFileMax");
    let validType = false;
    let validSize = false;
    loadFile("#upload__input");


    Upload.on('click','.image-close' , function () {
       uploadContainer.empty();
        $("#upload__input").val(null);
        num = 0;
        //console.log(num);
        removeError();
        uploadLabel.removeClass('hidden');
    });

    let num = 0;

// Validate Upload
    function loadFile(input) {
        $(input).bind('change', function(){
            validateFileType(this);
            validateSize(this);
            if (validType && validSize) {
                removeError();
                readURL(this);
                $('.upload__image').each(function(i){
                    if($('.upload__image').length > limitFiles) {
                    }
                })
            } else if (!validType && !validSize) {
                printError(errorSizeMsg);
                printError(errorTypeMsg);
            }
            else if (validType && !validSize) {
                printError(errorSizeMsg);
            }
            else if (!validType && validSize) {
                printError(errorTypeMsg);
            }
        })
    }

    function validateFileType(input) {
        let fileAccept = $(input).attr('accept');

        let image_str_1 = replaceAll(fileAccept, "image/", "");
        let app_str_1  = replaceAll(image_str_1, "application/", "");
        let image_str_2= replaceAll(app_str_1, ",", "");
        let allowedExtensions = image_str_2.split(" ");

        //let allowedExtensions = ['png', 'jpg'];

        //console.log('allowedExtensions: ' + allowedExtensions);

        //check uploaded file extension:
        let fileType = $(input).val().split('.').pop().toLowerCase();
      //  console.log(fileType);
// TODO: if file is pdf then display Icon PDF
        for(let i = 0; i <= allowedExtensions.length; i++) {
            let currentExt =  allowedExtensions[i];
           // console.log(allowedExtensions[i]);
            if(currentExt == fileType) {
                validType = true;
               // console.log("SUCCES - The allowed file is: " + allowedExtensions[i] + " and file Type is: " + fileType + " the uploaded file ist OK");
                return;
            } else {
               // console.log("ERROR - The allowed file is: " + allowedExtensions[i] + " and file Type is: " + fileType + " the uploaded file istNOT OK");
                validType = false;
            }
        }
    }

    function validateSize(input) {
        let fileSize = parseInt(Upload.data("fileSize"));
        validSize = input.files[0].size <= fileSize * 1024 * 1024;
    }

    function printError(msg) {
        Upload.after("<div class='error-msg'>"+ msg +"</div>");
        Upload.addClass('error');
    }
    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
    function removeError() {
        $(".error-msg").remove();
        Upload.removeClass("error");
    }
    // uploading images
    function readURL(input) {
        if (input.files && input.files[0]) {
            let limit = false;
            let i;
            let counter = 1; // counter is 1 to not start counting from 0;

            for (i = 0; i < input.files.length; ++i) {
                counter += 1;
                if(input.files.length < limitFiles + 1) {
                    removeError();
                    let reader;
                    reader = new FileReader();
                    // upload and preview
                    reader.onload = function (event) {
                        num +=1;
                        //console.log("Count: "+num);

                            let fileType = $(input).val().split('.').pop().toLowerCase();
                            if(fileType === 'pdf' && fileType !== 'jpg') {
                                let imageDiv = '<div class="upload__image icon-doc-text"><img src="'+ event.target.result +'"><span class="image-close"></span></div>';
                                uploadContainer.append(imageDiv);
                            } else {
                                let imageDiv = '<div class="upload__image image"><img src="'+ event.target.result +'"><span class="image-close"></span></div>';
                                uploadContainer.append(imageDiv);
                            }
                            //console.log("NUM: " + num);
                            if(num === limitFiles) {
                                uploadLabel.toggleClass('hidden');
                            }
                        };
                    reader.readAsDataURL(input.files[i]);
                    uploadLabel.toggleClass('hidden');
                }  else {
                    limit = true;
                }
            }
            if(limit) {
                printError(limitMsg);
            }
        }
    }
};
export default upload;



