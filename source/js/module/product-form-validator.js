import $ from "jquery";
import validator from "validator";

export default class formValidator {

    static init() {
        class Validator {
            constructor(formid) {
                this.form = formid;
                this.required = document.getElementById(this.form).querySelectorAll("[required]");
                this.honey = document.getElementsByName("email-repeat")[0];
                this.firstError = false;
                this.radioGroups = [];
                this.confirm = false;
                this.hasErrors = false;
                this.checkHoney();

            }

            checkHoney() {
                if (this.honey.value == null || this.honey.value === "") {
                    this.validateForm();
                } else {
                    console.log("SPAM!");
                }
            }
            printError(error, input) {
                if(error) {
                    if (this.firstError) {
                        $(input).after('<div class="error-msg">' + error + '</div>');
                    } else {
                        $(input).after('<div id="firstError" class="error-msg">' + error + '</div>');
                        this.firstError = true;
                        location.href = "#firstError";
                    }
                }

            }

            vaidateRadioGroup(name) {
                if (0 === this.radioGroups.length) {
                    this.radioGroups.push(name);

                    let isChecked = false;
                    let radioGroup = document.getElementById(this.form).elements[name];

                    for (let i = 0; i <= radioGroup.length - 1; i++) {
                        if (radioGroup[i].checked) {
                            //console.log(radioGroup[i].value+" is checked");
                            isChecked = true;
                        }
                    }
                    if (!isChecked) {
                        //console.log("Aus der RadioGroup "+name+" wurde kein Wert ausgewählt");
                        this.hasErrors = true;
                        let errortext = radioGroup[0].dataset.error;
                        this.printError(errortext);
                        for (let i = 0; i <= radioGroup.length - 1; i++) {
                            radioGroup[i].classList.add("error");
                            let value = radioGroup[i].value;
                            $("input[value='" + value + "']").next("label").addClass("error");
                        }
                    }
                }
            }

            validateForm(){
                //use arrow function to have access to this
                this.required.forEach( (item) => {
                    switch(item.type){
                        case 'radio':
                            let name = item.getAttribute("name");
                            this.vaidateRadioGroup(name);
                            break;
                        case 'checkbox':
                            if(!item.checked){
                                this.hasErrors = true;
                                let id = item.getAttribute("id");
                                $("label[for='"+id+"']").addClass("error");
                            }
                            break;
                        case 'email':
                            if(/[\u00C0-\u017F]/.test(item.value) || !validator.isEmail( item.value )){
                                this.hasErrors = true;
                                item.classList.add("error");
                                let error = item.dataset.error;
                                this.printError(error, item);
                            }

                            break;
                        default:
                            if (validator.isEmpty( item.value )){
                                item.classList.add("error");
                                this.hasErrors = true;
                                let error = item.dataset.error;
                                this.printError(error, item);

                            }

                    }

                });
                //let emailInput = $(input[type="email"])

                if(this.hasErrors){
                    console.log("Kann nicht versendet werden, hat Fehler");
                }else{
                    $( "#"+this.form ).submit();
                }
            }

        }

        $('.form-btn').click(function (event) {
            //console.log("click");
            event.preventDefault();
            let formid = $(this).data("formid");
            $(".error-msg").remove();
            $(".error").removeClass("error");


            let val = new Validator(formid);
        });
        let getVar = {};
        if (document.location.toString().indexOf('?') !== -1) {
            let query = document.location
                .toString()
                // get the query string
                .replace(/^.*?\?/, '')
                // and remove any existing hash string (thanks, @vrijdenker)
                .replace(/#.*$/, '')
                .split('&');

            for (var i = 0, l = query.length; i < l; i++) {
                var aux = decodeURIComponent(query[i]).split('=');
                getVar[aux[0]] = aux[1];
            }
        }
//get the 'index' query parameter

        if (getVar['error']) {
            $(getVar['error']).hide();
            $(getVar['error']).siblings(".form-error").show();
        }
        if (getVar['success']) {
            $(getVar['success']).hide();
            $(getVar['success']).siblings(".form-success").show();
        }
    }
}


