
const Dropdown = () => {
    let dropdownList = document.querySelectorAll('.dropdown');
    let dropdownLabel = document.querySelectorAll('.dropdown__label');


    if (dropdownList) {

        window.addEventListener('click', (e) => {
            for (let i = 0; i < dropdownList.length; i++) {
                if (e.target === dropdownList[i].querySelector('.dropdown__label')) {
                    dropdownList[i].classList.toggle('active')
                    dropdownLabel[i].classList.toggle('active')

                } else {
                    dropdownList[i].classList.remove('active');
                    dropdownLabel[i].classList.remove('active')
                }
            }
        })

        window.addEventListener('touchstart', (e) => {
            for (let i = 0; i < dropdownList.length; i++) {
                const target = e.target;
                if (target === dropdownList[i].querySelector('.dropdown__label')) {
                    dropdownList[i].classList.toggle('active')
                } else if (target.tagName.toLowerCase()  === 'a') {

                }else {
                    dropdownList[i].classList.remove('active')
                }
            }
        })
    }
};
export default Dropdown;


