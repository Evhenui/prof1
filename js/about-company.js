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
                            dropdownsBody[index].style.height = 'auto';
                            //dropdownsBody[index].style.height = dropdownsBody[index].scrollHeight + 'px'; 
                        }
                       
                        
                    });
            });
        }
    }
}