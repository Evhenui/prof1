export let aboutCompany = function() { 
    const aboutCompanyPage = document.querySelector('[data-about-company-page]');

    function delActiv(param) {
        param.forEach((el) => {
          el.classList.remove('active');
        })
    }

    if(aboutCompanyPage !== null) {
        const tabItemsAbout = aboutCompanyPage.querySelectorAll('[data-tab-item-about-company]'),
              tabSections = aboutCompanyPage.querySelectorAll('[data-section-about-page]'),
              scrollTab = aboutCompanyPage.querySelector('[data-scroll-tab-about]'),
              mainSectionAbout = aboutCompanyPage.querySelector('[data-scroll-section-tab-about]'),
              faqSection = aboutCompanyPage.querySelector('[data-section-about-faq]');

        tabItemsAbout.forEach((item, index) => {
                item.addEventListener('click', function(event) {
                    event.preventDefault();
                    delActiv(tabItemsAbout)
                    delActiv(tabSections)
                    tabItemsAbout[index].classList.add("active");
                    tabSections[index].classList.add("active"); 
    
                    window.getComputedStyle(scrollTab).getPropertyValue('--transform');
                    scrollTab.style.setProperty('--transform', -tabSections[index].offsetTop + 'px'); 
    
                    window.getComputedStyle(mainSectionAbout).getPropertyValue('--height');
                    mainSectionAbout.style.setProperty('--height', tabSections[index].scrollHeight + 'px'); 
                });
        });

        window.addEventListener('resize', () => {
            tabSections.forEach((item) => {
            
                if(item.classList.contains('active')) {                   
                    window.getComputedStyle(scrollTab).getPropertyValue('--transform');
                    scrollTab.style.setProperty('--transform', -item.offsetTop + 'px'); 
                    window.getComputedStyle(mainSectionAbout).getPropertyValue('--height');
                    mainSectionAbout.style.setProperty('--height', item.scrollHeight + 'px'); 

                   
                }
            })
        });


        if(faqSection !== null) {
          const dropdownsHead = faqSection.querySelectorAll('[data-about-company-short-information]'),
                dropdownsBody = faqSection.querySelectorAll('[data-about-company-full-information]');

                dropdownsHead.forEach((item, index) => {
                    item.addEventListener('click', function() {
                        if(dropdownsHead[index].classList.contains('active')) {
                            dropdownsHead[index].classList.remove("active");
                            dropdownsBody[index].classList.remove("active"); 
                            dropdownsBody[index].style.height = 0 + 'px';
                        } else {
                            dropdownsHead[index].classList.add("active");
                            dropdownsBody[index].classList.add("active"); 
                            dropdownsBody[index].style.height = dropdownsBody[index].scrollHeight + 'px'; 
                        }
                       
                        
                    });
            });
        }
    }
}