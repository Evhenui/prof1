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
              mainSectionAbout = aboutCompanyPage.querySelector('[data-scroll-section-tab-about]');

              

        tabItemsAbout.forEach(item => {
            item.addEventListener('click', function() {
                let currentBtn = item;
                let tabId = currentBtn.getAttribute("data-tab");
                let currentTub = document.querySelector(tabId);
                delActiv(tabItemsAbout)
                delActiv(tabSections)
                currentBtn.classList.add("active");
                currentTub.classList.add("active"); 

                window.getComputedStyle(scrollTab).getPropertyValue('--transform');
                scrollTab.style.setProperty('--transform', -currentTub.offsetTop + 'px'); 

                window.getComputedStyle(mainSectionAbout).getPropertyValue('--height');
                mainSectionAbout.style.setProperty('--height', currentTub.scrollHeight + 'px'); 
                });
                
        });
    }
}