export let inputsValidate = function() {
    const footerSection = document.querySelector('[data-footer]'),
          headerSection = document.querySelector('[data-header]'),
          modalEnter = document.querySelector('[data-modal-enter]'),
          phoneInputs = document.querySelectorAll('[data-tel-input]'),
          mainSection = document.querySelector('[data-main]');

    const   regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,
            regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;
    //------------------------phone mask--------------------------------        
            const getInputNumbersValue = function (input) {
                return input.value.replace(/\D/g, '');
            }
            const onPhonePaste = function (e) {
                let input = e.target,
                    inputNumbersValue = getInputNumbersValue(input);
                let pasted = e.clipboardData || window.clipboardData;
                if (pasted) {
                    let pastedText = pasted.getData('Text');
                    if (/\D/g.test(pastedText)) {
                        input.value = inputNumbersValue;
                        return;
                    }
                }
            }
            const onPhoneInput = function (e) {
                var input = e.target,
                    inputNumbersValue = getInputNumbersValue(input),
                    selectionStart = input.selectionStart,
                    formattedInputValue = "";
        
                if (!inputNumbersValue) {
                    return input.value = "";
                }
        
                if (input.value.length != selectionStart) {
                    if (e.data && /\D/g.test(e.data)) {
                        input.value = inputNumbersValue;
                    }
                    return;
                }
        
                if (["3", "8", "0"].indexOf(inputNumbersValue[0]) > -1) {
                  if (inputNumbersValue[0] == "0") inputNumbersValue = "8" + inputNumbersValue;
                  if (inputNumbersValue[0] == "3") inputNumbersValue = "8";
                  var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+3";
                  formattedInputValue = input.value = firstSymbols + " ";
                  if (inputNumbersValue.length > 1) {
                      formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
                  }
                  if (inputNumbersValue.length >= 5) {
                      formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
                  }
                  if (inputNumbersValue.length >= 8) {
                      formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
                  }
                  if (inputNumbersValue.length >= 10) {
                      formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
                  }
              } else {
                  formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
              }
                input.value = formattedInputValue;
            }
            var onPhoneKeyDown = function (e) {
                var inputValue = e.target.value.replace(/\D/g, '');
                if (e.keyCode == 8 && inputValue.length == 1) {
                    e.target.value = "";
                }
            }
            for (var phoneInput of phoneInputs) {
                phoneInput.addEventListener('keydown', onPhoneKeyDown);
                phoneInput.addEventListener('input', onPhoneInput, false);
                phoneInput.addEventListener('paste', onPhonePaste, false);
            }
    //------------------------validate inputs----------------------------
            function valid(value, button, container) {
                if(button) {
                    if (value) {
                        container.classList.remove('error');
                        button.disabled = false;
                    } else {
                        container.classList.add('error');
                        button.disabled = true;
                    }
                } else {
                    if (value) {
                        container.classList.remove('error');
                    } else {
                        container.classList.add('error');
                    }
                }
            } 
            
            function validate(regex, input) {
                if(regex === regEmail) {
                    if(input.includes('@') && input.includes('.') && regex.test(input)) {
                        return true;
                    }else {
                        return false;
                    }
                } else {
                    return regex.test(input);
                }
            }
            
            function exam(reg, input, button, container) {
                if (!validate(reg, input.value) && input.value != "") {
                    valid(false, button, container);
                } else {
                    valid(true, button, container);
                }
            }

            function preventDefaultButton (button) {
                button.addEventListener("click", function (event) {
                    event.preventDefault();})
            }

            function showPassword(buttons) {
                buttons.forEach((item) => {
                item.addEventListener('click', function() {
                    let target = this.getAttribute("data-target"),
                        input = document.querySelector(target);                       
                        if (input.getAttribute("type") === "password") {
                            input.setAttribute("type", "text");
                            item.classList.add("active");
                        } else {
                            input.setAttribute("type", "password");
                            item.classList.remove("active");
                        } 
                })
                })
            }

            function validPassword(password, passwordRe, containerPassword, containerPasswordRe) {
                if (password.value !== passwordRe.value) {
                    containerPassword.classList.add("error");
                    containerPasswordRe.classList.add("error");
                } else {
                    containerPassword.classList.remove("error");
                    containerPasswordRe.classList.remove("error");
                }
            }
    //------------------------------------------------------------------- 
          if(footerSection !== null) {
            const containerInput = footerSection.querySelector('[data-input-email-container-footer]'),
                  inputEmail = footerSection.querySelector('[data-input-email-footer]'),
                  button = footerSection.querySelector('[data-button-input-footer]');

            preventDefaultButton(button); 
            inputEmail.addEventListener('input', function(){
              this.value = this.value.replace(/\s+/gi,'');
              exam(regEmail, inputEmail, button, containerInput);
            });     
          }

          if(modalEnter !== null) {
            const btnShowPassModal = modalEnter.querySelectorAll('[data-show-password]');

            const containerInputEmailEnter = modalEnter.querySelector('[data-input-email-modal-enter-container]'),
                  inputEmailEnter = modalEnter.querySelector('[data-input-email-modal-enter]'),
                  inputPasswordEnter = modalEnter.querySelector('[data-input-password-modal-enter]'),

                  containerInputNameRegister = modalEnter.querySelector('[data-input-name-modal-register-container]'),
                  containerInputEmailRegister = modalEnter.querySelector('[data-input-email-modal-register-container]'),
                  containerInputPasswordRegister = modalEnter.querySelector('[data-input-password-modal-register-container]'),
                  containerInputPasswordReRegister = modalEnter.querySelector('[data-input-password-re-modal-register-container]'),
                  inputNameRegister = modalEnter.querySelector('[data-input-name-modal-register]'),
                  inputPasswordRegister = modalEnter.querySelector('[data-input-password-modal-register]'),
                  inputPasswordReRegister = modalEnter.querySelector('[data-input-password-re-modal-register]'),

                  button = modalEnter.querySelector('[data-modal-button-enter]'),
                  buttonRegister = modalEnter.querySelector('[data-modal-button-register]'),
                  inputsEnter = modalEnter.querySelectorAll('[data-input-enter]'),
                  inputsRegister = modalEnter.querySelectorAll('[data-input-register]');

            buttonRegister.addEventListener('click', function() {
                validPassword(inputPasswordRegister, inputPasswordReRegister, containerInputPasswordRegister, containerInputPasswordReRegister);
            })
            
            function inputsChangeReg(inputs, button) {
                inputs.forEach((item)=>{
                  item.addEventListener('input', function() {
                   if(inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
                    if(validate(regText, inputs[0].value) && validate(regEmail, inputs[1].value))
                      button.disabled = false;
                   }
                  })
                })
            }

            function inputsChange(inputs, button) {
                inputs.forEach((item)=>{
                  item.addEventListener('input', function() {
                   if(inputs[0].value && inputs[1].value ) {
                      button.disabled = false;
                   }
                  })
                })
            }
            
            inputEmailEnter.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
                exam(regEmail, inputEmailEnter, button, containerInputEmailEnter);
            }); 

            inputPasswordEnter.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
            }); 
            
            inputsRegister.forEach((item)=> {
                item.addEventListener('input', function() {
                    if(this.classList.contains('name-register')) {
                        this.value = this.value.replace(/\s+/gi,'');
                        exam(regText, this, button, containerInputNameRegister);
                    }else if(this.classList.contains('email-register')) {
                        this.value = this.value.replace(/\s+/gi,'');
                        exam(regEmail, this, button, containerInputEmailRegister);
                    }
                    inputsChangeReg(inputsRegister, buttonRegister);
                })
            })

            showPassword(btnShowPassModal)
            inputsChange(inputsEnter, button)
          }

          if(headerSection !== null) {
            const containerInput = headerSection.querySelector('[data-input-phone-header-cotainer]'),
                  inputPhone = headerSection.querySelector('[data-input-tel-header]'),
                  button = headerSection.querySelector('[data-button-tel-submit-header]');

            preventDefaultButton(button); 
            inputPhone.addEventListener('input', function(){
                exam(regPhone, inputPhone, button, containerInput);
            }); 
          }

          if(mainSection !== null) {
            const stayPartnerSection = mainSection.querySelector('[data-stey-partner-section]');

            if(stayPartnerSection !== null) {
                const inputs = mainSection.querySelectorAll('[data-input-main]'),
                  button = mainSection.querySelector('[data-button-stay-partner]'),
                  inputPhone = mainSection.querySelector('[data-tel-input]'),
                  containerInputPhone = mainSection.querySelector('[data-input-phone-main-container]'),
                  inputName = mainSection.querySelector('[data-input-name]'),
                  containerInputName = mainSection.querySelector('[data-input-name-main-container]');
                
                function exam(reg, input, container) {
                    if (!validate(reg, input.value) && input.value != "") {
                        valid(false, container);
                    } else {
                        valid(true, container);
                    }
                }

                function valid(value, container) {
                        if (value) {
                            container.classList.remove('error');
                        } else {
                            container.classList.add('error');
                        }
                } 

                inputPhone.addEventListener('input', function(){
                    exam(regPhone, inputPhone, containerInputPhone);
                }); 
                inputName.addEventListener('input', function(){
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regText, inputName, containerInputName);
                }); 

                function inputsChange(inputs, button) {
                    inputs.forEach((item)=>{
                      item.addEventListener('input', function() {
                       if(inputs[0].innerText !== '' && inputs[1].value && inputs[2].value && inputs[3].value ) {
                          if(validate(regText, inputs[1].value)) {
                            button.disabled = false;
                          }
                       }
                      })
                    })
                }
                inputsChange(inputs, button)
            }
            
    }  
}