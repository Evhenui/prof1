export let inputsValidate = function() {
    const footerSection = document.querySelector('[data-footer]'),
          headerSection = document.querySelector('[data-header]'),
          modalEnter = document.querySelector('[data-modal-enter]'),
          phoneInputs = document.querySelectorAll('[data-tel-input]'),
          mainSection = document.querySelector('[data-main]'),
          modalOnClick = document.querySelector('[data-modal-on-click]'),
          modalReview = document.querySelector('[data-modal-stay-review]'),
          filterSection = document.querySelector('[data-filter]'),
          formOrderingEnter = document.querySelector('[data-ordering-form-enter]'),
          forgetPasswordOrdering = document.querySelector('[data-ordering-tab-forget-pass]'),
          orderingNewUser = document.querySelector('[data-new-user-section]'),
          personalArea = document.querySelector('[data-personal-arae]');
    const   regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,
            regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
            var maskOptions = {
                mask: '+{38} (000)-000-00-00'
            };

            for (var phoneInput of phoneInputs) {
                var mask = IMask(phoneInput, maskOptions);
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
                  inputsRegister = modalEnter.querySelectorAll('[data-input-register]'),

                  containerInputForget = modalEnter.querySelector('[data-input-email-modal-forget-container]'),
                  inputEmailForget = modalEnter.querySelector('[data-input-forget]'),
                  buttonForget = modalEnter.querySelector('[data-button-forget-send]'),
                  closeModalSended = modalEnter.querySelector('[data-close-modal-send]'),
                  wrapperModal = modalEnter.querySelector('[data-wrapper-modal]');
                  

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

            inputEmailForget.addEventListener('input', function() {
                this.value = this.value.replace(/\s+/gi,'');
                exam(regEmail, inputEmailForget, buttonForget, containerInputForget); 
            })

            closeModalSended.addEventListener('click', ()=> {
                wrapperModal.classList.remove('active');
            })

            buttonForget.addEventListener('click', function(event) {
                event.preventDefault();
                if(!this.disabled) {
                    wrapperModal.classList.add('active');
                }
            })

            inputPasswordEnter.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
            }); 

            const registerName = modalEnter.querySelector('[data-input-name-modal-register]');
            const registerEmail = modalEnter.querySelector('[data-input-email-modal-register]');

            function checkValidRegisterForm() {
                if(regEmail.test(registerEmail.value) && validator.isEmail(registerEmail.value) && registerName.value !== '' && inputPasswordRegister.value !== '' && inputPasswordReRegister.value !== '' && inputPasswordReRegister.value === inputPasswordRegister.value) {
                    buttonRegister.disabled = false;
                } else {
                    buttonRegister.disabled = true;
                }
            }

            registerName.addEventListener('input', () => {
                checkValidRegisterForm()
            })

            registerEmail.addEventListener('input', () => {
                checkValidRegisterForm()
            })

            inputPasswordRegister.addEventListener('input', () => {
                checkValidRegisterForm()
            })

            inputPasswordReRegister.addEventListener('input', () => {
                checkValidRegisterForm()
            })


            showPassword(btnShowPassModal)
            inputsChange(inputsEnter, button)
          }

          if(modalOnClick !== null) {

            const button = modalOnClick.querySelector('[data-button-modal-on-click]'),
                  inputTel = modalOnClick.querySelector('[data-input-tel-modal-on-click]'),
                  inputText = modalOnClick.querySelector('[data-input-name-modal-on-click]'),
                  containerInputTel = modalOnClick.querySelector('[data-input-tel-container-modal-on-click]'),
                  inputs = modalOnClick.querySelectorAll('[data-input-modal-on-click]');

                  var maskOptions = {
                    mask: '+{38} (000)-000-00-00'
                  };
              
                  var mask = IMask(inputTel, maskOptions);

                  function validOrderForm() {
                    if(validator.isMobilePhone(inputTel.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA']) && inputText.value.length) {
                        button.disabled = false;
                    }else {
                        button.disabled = true;
                    }
                  }

                  inputTel.addEventListener("input", () => {
                    validOrderForm()
                  })

                  inputText.addEventListener("input", () => {

                    validOrderForm()
                  })

            inputText.addEventListener('input', function() {
                this.value = this.value.replace(/\s+/gi,'');
            })
            //not empty
            inputs.forEach((el) => {
                el.addEventListener('input', () => {
                    let arr = []
                    if(el.type === 'tel' && el.value !== '' && validate(regPhone, el.value)) {
                        inputs.forEach((item, index) => {
                            if (item.value !== '') {
                                arr.push(inputs[index])
                            }
                        })
                    } 
                    else if (el.value !== '' && el.type === 'text') {
                        inputs.forEach((item, index) => {
                            if (item.value !== '') {
                                arr.push(inputs[index])
                            }
                        })
                    }
                })
            });

          }

          if(headerSection !== null) {
            const containerInput = headerSection.querySelector('[data-input-phone-header-cotainer]'),
                  inputPhone = headerSection.querySelector('[data-input-tel-header]'),
                  button = headerSection.querySelector('[data-button-tel-submit-header]');

                  var maskOptions = {
                    mask: '+{38} (000)-000-00-00'
                  };
              
                  var mask = IMask(inputPhone, maskOptions);

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
                  containerInputName = mainSection.querySelector('[data-input-name-main-container]'),
                  containers = mainSection.querySelectorAll('[data-input-main-item]'),
                  txtInput = mainSection.querySelector('[data-input-text]'),
                  txtContainer = mainSection.querySelector('[data-input-text-main-container]'),
                  selectedInput = mainSection.querySelector('[data-dropdown-selected]');

                  let dropText = false;
                  let isNameInput = false;
                  let isPhoneInput = false;
                  let isTextInput = false;
                
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
                    if(!validator.isMobilePhone(inputPhone.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
                        isPhoneInput = false;
                        containerInputPhone.classList.add("error");
                    } else {
                        isPhoneInput = true;
                        containerInputPhone.classList.remove("error");
                    }

                    if(!inputPhone.value) {
                        isPhoneInput = false;
                        containerInputPhone.classList.add("error");
                    }

                    button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                }); 

                inputPhone.addEventListener('blur', e => {
                    if(!e.target.value) {
                        isPhoneInput = false;
                        containerInputPhone.classList.add("error")
                    }else {
                        isPhoneInput = true;
                        containerInputPhone.classList.remove("error")
                    }

                    button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                }); 

                inputName.addEventListener('input', e => {  
                    if(e.target.value) {
                        isNameInput = true;
                        containerInputName.classList.remove("error");
                    }

                    if(!inputName.value) {
                        isNameInput = false;
                        containerInputName.classList.add("error");
                    }

                    button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                }); 

                inputName.addEventListener('blur', function(e) {  
                    if(!e.target.value) {
                        isNameInput = false;
                        containerInputName.classList.add("error")
                    }else {
                        isNameInput = true;
                        containerInputName.classList.remove("error")
                    }

                    button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                }); 

                txtInput.addEventListener('input', e => {  
                    if(e.target.value) {
                        isTextInput = true;
                        txtContainer.classList.remove("error");
                    }

                    if(!e.target.value) {
                        isTextInput = false;
                        txtContainer.classList.add("error");
                    }

                    button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                }); 

                txtInput.addEventListener('blur', e => {  
                    if(!e.target.value) {
                        isTextInput = false;
                        txtContainer.classList.add("error")
                    }else {
                        isTextInput = true;
                        txtContainer.classList.remove("error")
                    }

                    button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                }); 

                var observer = new MutationObserver(function(mutationsList) {
                    for(var mutation of mutationsList) {
                      if (mutation.type === 'childList' && mutation.target === selectedInput) {
                        dropText = true;
                        button.disabled = isNameInput && isPhoneInput && isTextInput && dropText ? false : true;
                      }
                    }
                });

                var observerConfig = { childList: true, subtree: true };
                observer.observe(selectedInput, observerConfig);
             
            }
            
          }  

          if(modalReview !== null) {
            const inputs = modalReview.querySelectorAll('[data-input-stay-review]'),
                  buttonSend = modalReview.querySelector('[data-button-modal-review]'),
                  inputTelContainer = modalReview.querySelector('[data-input-tel-stay-review-contaner]'),
                  inputTel = modalReview.querySelector('[data-input-tel-stay-review]'),
                  containerInputNameReview = modalReview.querySelector('[data-input-name-stay-review-container]'),
                  inputNameReview = modalReview.querySelector('[data-input-stay-review-name]');

                  preventDefaultButton(buttonSend);

                  inputNameReview.addEventListener('input', function() {
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regText, inputNameReview, false, containerInputNameReview);
                  })


                  inputs.forEach((el) => {
                    el.addEventListener('input', () => {
                        let arr = [];
                        if(el.type === 'tel' && el.value !== '' && validate(regPhone, el.value)) {
                            inputs.forEach((item, index) => {
                                if (item.value !== '') {
                                    arr.push(inputs[index]);
                                }
                            })
                        } 
                        else if (el.value !== '' && el.type === 'text') {
                            inputs.forEach((item, index) => {
                                if (item.value !== '') {
                                    arr.push(inputs[index])
                                }
                            })
                        }
                        if(arr.length === inputs.length) {
                            buttonSend.disabled = false;
                        }
                    })
                  });

                  inputTel.addEventListener('input', function(){
                    exam(regPhone, inputTel, false, inputTelContainer);
                  }); 
          }

          if(filterSection !== null) {
            const inputsRange = filterSection.querySelectorAll('[data-input-range]');
            
            inputsRange.forEach(item => {
                item.addEventListener('input', function(event) {
                    this.value = this.value.replace(/[^\d.]/g, '');
                })
            })
          }

          if(formOrderingEnter !== null) {
            const   inputs = formOrderingEnter.querySelectorAll('[data-input-ordering-enter]'),
                    buttonSend = formOrderingEnter.querySelector('[data-ordering-button-enter]'),
                    inputEmail = formOrderingEnter.querySelector('[data-input-email-ordering-enter]'),
                    containerInputEmail = formOrderingEnter.querySelector('[data-input-email-ordering-enter-container]'),
                    inputPassword = formOrderingEnter.querySelector('[data-input-password-ordering-enter]'),
                    buttonShowPassword = formOrderingEnter.querySelector('[data-show-password-ordering-enter]');

            preventDefaultButton(buttonSend); 
            
            inputEmail.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
                exam(regEmail, inputEmail, false, containerInputEmail);
            });

            inputs.forEach((el) => {
              el.addEventListener('input', () => {
                  let arr = [];
                 
                  if (el.value !== '' && el.type === 'text' && validate(regEmail, el.value)) {
                      inputs.forEach((item, index) => {
                          if (item.value !== '') {
                              arr.push(inputs[index])
                          }
                      })
                  } else if(el.value !== '' && el.type === 'password') {
                    inputs.forEach((item, index) => {
                        if (item.value !== '') {
                            arr.push(inputs[index])
                        }
                    })
                  }
                  if(arr.length === inputs.length) {
                      buttonSend.disabled = false;
                  }
              })
            });

            buttonShowPassword.addEventListener('click', function() {
                let target = this.getAttribute("data-target"),
                    input = document.querySelector(target);                       
                    if (input.getAttribute("type") === "password") {
                        input.setAttribute("type", "text");
                        this.classList.add("active");
                    } else {
                        input.setAttribute("type", "password");
                        this.classList.remove("active");
                    } 
            })
          }

          if(forgetPasswordOrdering !== null) {
            const containerInput = forgetPasswordOrdering.querySelector('[data-input-email-ordering-forget-container]'),
                  inputEmail = forgetPasswordOrdering.querySelector('[data-input-email-ordering-forget]'),
                  buttonSend = forgetPasswordOrdering.querySelector('[data-button-ordering-forget-send]');


            inputEmail.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
                exam(regEmail, inputEmail, false, containerInput);
                if(this.value !== '' && validate(regEmail, this.value)) {
                    buttonSend.disabled = false;
                }
            });
          }

          if(orderingNewUser !== null) {
            const containerName = orderingNewUser.querySelector('[data-input-name-ordering-container]'),
                  containerSurname = orderingNewUser.querySelector('[data-input-surname-ordering-container]'),
                  containerPhone = orderingNewUser.querySelector('[data-input-phone-ordering-cotainer]'),
                  containerEmail = orderingNewUser.querySelector('[data-input-email-ordering-container]'),
                  inputEmail = orderingNewUser.querySelector('[data-input-email-ordering]'),
                  inputPhone = orderingNewUser.querySelector('[data-input-tel-ordering]'),
                  inputName = orderingNewUser.querySelector('[data-input-ordering-name]'),
                  inputSurname = orderingNewUser.querySelector('[data-input-ordering-surname]'),
                  inputs = orderingNewUser.querySelectorAll('[data-input-ordering]'),
                  buttonOrder = orderingNewUser.querySelector('[data-button-ordering]'),
                  checkbox = orderingNewUser.querySelector('.ordering__input-checkbox'),
                  dropdownCity = orderingNewUser.querySelector('[data-select-input-city]'),
                  dropdownRegion = orderingNewUser.querySelector('[data-select-input-region]'),
                  dropdownNumberPost = orderingNewUser.querySelector('[data-dropdown-number-post-selected]');
                  

            function checkValidRegisterForm() {
                if(regEmail.test(inputEmail.value) && validator.isEmail(inputEmail.value) && inputName.value !== '' && 
                inputSurname.value !== '' && validator.isMobilePhone(inputPhone.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
                    buttonOrder.disabled = false;
                } else {
                    buttonOrder.disabled = true;
                }
            }

            checkValidRegisterForm()

            inputEmail.addEventListener('input', () => {
                checkValidRegisterForm();

                if(!regEmail.test(inputEmail.value) && !validator.isEmail(inputEmail.value)) {
                    containerEmail.classList.add('error');
                } else {
                    containerEmail.classList.remove('error');
                }
            });
            
            inputName.addEventListener('input', () => {
                checkValidRegisterForm();

                if(!inputName.value.length) {
                    containerName.classList.add('error');
                } else {
                    containerName.classList.remove('error');
                }
            });

            inputSurname.addEventListener('input', () => {
                checkValidRegisterForm();

                if(!inputSurname.value.length) {
                    containerSurname.classList.add('error');
                } else {
                    containerSurname.classList.remove('error');
                }
            });

            inputPhone.addEventListener('input', () => {
                checkValidRegisterForm();

                if(!validator.isMobilePhone(inputPhone.value.replace(/[^0-9]/g, '').substring(2), ['uk-UA'])) {
                    containerPhone.classList.add('error');
                } else {
                    containerPhone.classList.remove('error');
                }
            }); 


          }

          if(personalArea !== null) {
            const inputNamePersonalArea = personalArea.querySelector('[data-input-name-private-data]'),
                  inputSurnamePersonalArea = personalArea.querySelector('[data-input-surname-private-data]'),
                  inputPhonePersonalArea = personalArea.querySelector('[data-input-tel-private-data]'),
                  inputEmailPersonalArea = personalArea.querySelector('[data-input-email-private-data]'),
                  inputPassPersonalArea = personalArea.querySelector('[data-input-password-new-private-data]'),
                  inputPassRePersonalArea = personalArea.querySelector('[data-input-password-re-private-data]'),
                  containerNamePersonalArea = personalArea.querySelector('[data-input-name-private-data-container]'),
                  containerSurnamePersonalArea = personalArea.querySelector('[data-input-surname-private-data-container]'),
                  containerPhonePersonalArea = personalArea.querySelector('[data-input-phone-private-data-cotainer]'),
                  containerEmailPersonalArea = personalArea.querySelector('[data-input-email-private-data-container]'),
                  containerPassPersonalArea = personalArea.querySelector('[data-input-password-new-private-data-container]'),
                  containerPassRePersonalArea = personalArea.querySelector('[data-input-password-re-private-data-container]'),
                  buttonSaveChange = personalArea.querySelector('[data-button-save-change]'),
                  buttonsShowPassPersonalArea = personalArea.querySelectorAll('[data-show-password-private-data]');

                inputPhonePersonalArea.addEventListener('input', function() {
                    exam(regPhone, inputPhonePersonalArea, false, containerPhonePersonalArea);
                }); 
                inputNamePersonalArea.addEventListener('input', function() {
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regText, inputNamePersonalArea, false, containerNamePersonalArea);
                });
                inputSurnamePersonalArea.addEventListener('input', function() {
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regText, inputSurnamePersonalArea, false, containerSurnamePersonalArea);
                });
                inputEmailPersonalArea.addEventListener('input', function() {
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regEmail, inputEmailPersonalArea, false, containerEmailPersonalArea);
                });

                function showPassword(buttons) {
                    buttons.forEach((item) => {
                    item.addEventListener('click', function() {
                        let target = this.getAttribute("data-target"),
                            input = document.querySelector(target);                       
                            if (input.getAttribute("type") === "password") {
                                input.setAttribute("type", "text");
                            } else {
                                input.setAttribute("type", "password");
                            } 
                    })
                    })
                };

                showPassword(buttonsShowPassPersonalArea);
         
                
                buttonSaveChange.addEventListener('click', function(event) {
                    event.preventDefault(); 
                    validPassword(inputPassPersonalArea, inputPassRePersonalArea, containerPassPersonalArea, containerPassRePersonalArea);
                })
                
          }
}