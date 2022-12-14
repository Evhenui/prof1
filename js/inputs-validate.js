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

          if(modalOnClick !== null) {

            const button = modalOnClick.querySelector('[data-button-modal-on-click]'),
                  inputTel = modalOnClick.querySelector('[data-input-tel-modal-on-click]'),
                  inputText = modalOnClick.querySelector('[data-input-name-modal-on-click]'),
                  containerInputTel = modalOnClick.querySelector('[data-input-tel-container-modal-on-click]'),
                  inputs = modalOnClick.querySelectorAll('[data-input-modal-on-click]');

            button.addEventListener('click', function(event){
                event.preventDefault();
                  modalOnClick.classList.add('done'); 
            });
            inputTel.addEventListener('input', function() {
                exam(regPhone, inputTel, false, containerInputTel);
            }); 
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
                    if(arr.length === inputs.length) {
                        button.disabled = false;
                    }
                })
            });

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
                  containerInputName = mainSection.querySelector('[data-input-name-main-container]'),
                  containers = mainSection.querySelectorAll('[data-input-main-item]');
                
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
                  console.log(arr.length)
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
                  dropdownCity = orderingNewUser.querySelector('[data-dropdown-city-selected]'),
                  dropdownRegion = orderingNewUser.querySelector('[data-dropdown-region-selected]'),
                  dropdownNumberPost = orderingNewUser.querySelector('[data-dropdown-number-post-selected]');

                 /* const   inputCity = document.querySelector('[data-input-city]'),
                        itemsSelect = document.querySelectorAll('[data-item-city]'),
                        listCity = document.querySelector('[data-list-city]'),
                        dropCity = document.querySelector('[data-drop-city]'),
                        sectDrop = document.querySelector('[data-drop-section-city]');

                        const sectionDropdowns = document.querySelector('[data-ordering]');*/

                inputEmail.addEventListener('input', function(){
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regEmail, inputEmail, false, containerEmail);
                });

                inputName.addEventListener('input', function(){
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regText, inputName, false, containerName);
                });

                inputSurname.addEventListener('input', function(){
                    this.value = this.value.replace(/\s+/gi,'');
                    exam(regText, inputSurname, false, containerSurname);
                });

                inputPhone.addEventListener('input', function(){
                    exam(regPhone, inputPhone, false, containerPhone);
                }); 

                inputs.forEach((el) => {
                    el.addEventListener('input', () => {
                        let arr = [];
                        
                        if (el.value !== '') {
                            inputs.forEach((item, index) => {
                                if (item.value !== '') {
                                    arr.push(inputs[index])
                                }
                            })
                        }
                        if(arr.length === inputs.length) {
                            buttonOrder.disabled = false;
                        }
                    })
                });

                
/*
                        function changeInput (items, input) {
                            items.forEach((item)=> {
                                item.addEventListener('click', ()=> {
                                    input.value = item.innerText;
                                    sectDrop.classList.remove('active');
                                })
                            })
                        }  

                        function closeMenu (dropdown, section) {
                            sectionDropdowns.addEventListener('click', function(e) {
                                const click = e.composedPath().includes(dropdown);
                                if(!click) {
                                    section.classList.remove('active');
                                }
                            })
                        }                     
                        
                        inputCity.addEventListener('click', function() {
                            sectDrop.classList.toggle('active');
                        })

                        closeMenu(dropCity, sectDrop)
                        changeInput(itemsSelect, inputCity, listCity);
*/
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