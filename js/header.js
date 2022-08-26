export let headerProfi = function() {
    const header = document.querySelector('[data-header]');

    if(header !== null) {
        const selectLanguage = header.querySelectorAll('[data-select-language]');
        
        function addActiveClass(list) {
            list.forEach((item) => {
              item.addEventListener("click", function () {
                if (!item.classList.contains("active")) {
                  list.forEach(function (item) {
                    item.classList.remove("active");
                  });
                  item.classList.add("active");
                }
              });
            });
        }
        addActiveClass(selectLanguage)
        
    }
    
}