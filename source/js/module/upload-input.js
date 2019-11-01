/*
 *
 * More info at [www.dropzonejs.com](http://www.dropzonejs.com)
 *
 * Copyright (c) 2012, Matias Meno
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */


import $ from "jquery";
import Dropzone from './../base/dropzone';

const uploadInput = () => {


    $(function(){
        const Upload = $('.upload');
        const errorMsgDiv = $('.error-msg', '.upload');

        let errorSizeMsg = Upload.data("contentSizeError");
        let errorTypeMsg = Upload.data("contentTypeError");
        let errorMsg = errorSizeMsg +' '+ errorTypeMsg;
        let sizeMax =  parseInt(Upload.data("fileSize"));
        let filesMax =   parseInt(Upload.data("maxFiles"));
        let acceptedFiles  = Upload.data("accept");
        let previewNode = document.querySelector("#tpl");
        let sizeBase = 1024;
        let validType;
        let validSize;
        previewNode.id = "";
        let previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);


       let myDropzone =  new Dropzone(document.body, { // Make the whole body a dropzone
            url:'upload.php', // Set the url
            previewTemplate: previewTemplate,
            previewsContainer: "#previews", // Define the container to display the previews
            clickable: "#upload__button", // Define the 'add new files' button
            addRemoveLinks: true,
            // Prevents Dropzone from uploading dropped files immediately
            autoProcessQueue: false,
            uploadMultiple: true,
            paramName: 'file',
            parallelUploads:  filesMax,
            maxFilesize: sizeMax,
            filesizeBase: sizeBase,
            maxFiles: filesMax,
            acceptedFiles: acceptedFiles,
            dictInvalidFileType: errorTypeMsg,
            dictDefaultMessage: "Put your custom message here",
            dictMaxFilesExceeded: "",
            dictFileTooBig: errorSizeMsg,
            dictRemoveFile:"",

            init: function() {
                const submitButton = $("#submit-all");
                myDropzone = this; // closure

                submitButton.on("click", function() {
                    myDropzone.processQueue(); // Tell Dropzone to process all queued files.
                });
                const uploadButton = $('#upload__button');
                uploadButton.on("click", function() {
                    $(".error-msg").empty();
                    Upload.removeClass("error");
                });
                // You might want to show the submit button only when
                // files are dropped here:
                this.on("addedfile", function(file) {
                    console.log('file added');

                    let count = myDropzone.files.length;
                    if(count > filesMax) {
                        myDropzone.removeFile(file);
                    }
                    if(count >= filesMax) {
                        $('#upload__button').addClass('hidden');
                    } else {
                        $('#upload__button').removeClass('hidden')
                    }
                    console.log(count);
                });
                this.on("removedfile", function() {
                    let count = myDropzone.files.length;
                    if(count < filesMax) {
                        $('#upload__button').removeClass('hidden')
                    } else {
                        $('#upload__button').addClass('hidden')
                    }
                });
                this.on("processing", function (file) {
                    validateSize(file, sizeMax);
                    validateFileType(file, acceptedFiles);

                    if (validType && validSize) {
                        $(".error-msg").empty();
                        Upload.removeClass("error");
                    } else if (!validType && !validSize) {
                        printError(errorMsg);
                        myDropzone.removeFile(file);
                    }
                    else if (validType && !validSize) {
                        printError(errorSizeMsg);
                        myDropzone.removeFile(file);
                    }
                    else if (!validType && validSize) {
                        printError(errorTypeMsg);
                        myDropzone.removeFile(file);
                    }
                });
                this.on("complete", function (file) {

                });
            },
       });
        function validateSize(file, sizeMax) {
            let sizeInt = sizeMax *  1024 *  1024;
            validSize = file.size <= sizeInt;
        }
        function validateFileType(file, acceptedFiles) {
            let allowedExtensions = acceptedFiles.split(" ");
            //console.log(allowedExtensions);
            //let allowedExtensions = ['.png'];
            //check uploaded file extension:
            let imageType = replaceAll(file.type, "image/", ".");
            let dataType = replaceAll(file.type, "application/", ".");
            let videoType = replaceAll(file.type, "video/", ".");
           // console.log(imageType);

            for (let i = 0; i <= allowedExtensions.length; i++) {
                if(allowedExtensions[i] == imageType) {
                    validType = true;
                   console.log("SUCCES - The allowed file is: " + allowedExtensions[i] + " and file Type is: " + imageType + " the uploaded file ist OK");
                    return validType;
                } else {
                    console.log("ERROR - The allowed file is: " + allowedExtensions[i] + " and file Type is: " + imageType + " the uploaded file ist NOT OK");
                    return;
                }
            }
            validType = false;
        }
        function printError(msg) {
            errorMsgDiv.html(msg);
            Upload.addClass('error');
        }
        function replaceAll(str, find, replace) {
            return str.replace(new RegExp(find, 'g'), replace);
        }
    });


};

export default uploadInput;