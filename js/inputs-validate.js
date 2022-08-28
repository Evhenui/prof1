export let inputsValidate = function() {
    const footerSection = document.querySelector('[data-footer]'),
          headerSection = document.querySelector('[data-header]'),
          modalEnter = document.querySelector('[data-modal-enter]');

    const   regPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
            regText = /^([A-Za-z\-\']{1,50})|([А-Яа-я\-\']{1,50})$/,
            regEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]/;

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
                  containerInputPasswordEnter = modalEnter.querySelector('[data-input-password-modal-enter-container]'),
                  inputEmailEnter = modalEnter.querySelector('[data-input-email-modal-enter]'),
                  inputPasswordEnter = modalEnter.querySelector('[data-input-password-modal-enter]'),
                  button = modalEnter.querySelector('[data-modal-button-enter]'),
                  inputsEnter = modalEnter.querySelectorAll('[data-input-enter]');


            preventDefaultButton(button); 
            showPassword(btnShowPassModal)

            function inputsChange(inputs, button) {
                inputs.forEach((item)=>{
                  item.addEventListener('input', function() {
                   if(inputs[0].value && inputs[1].value ) {
                      button.disabled = false;
                   }
                  })
                })
            }
            inputsChange(inputsEnter,button)

            inputEmailEnter.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
                exam(regEmail, inputEmailEnter, button, containerInputEmailEnter);
            }); 

            inputPasswordEnter.addEventListener('input', function(){
                this.value = this.value.replace(/\s+/gi,'');
            }); 
 
          }

}