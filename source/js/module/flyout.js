const flyout = () => {
    const element = document.getElementById('ts__flyout');
    element && element.classList.add('closed');
    element && element.addEventListener('click', function () {
        this.classList.toggle('closed');
        this.classList.toggle('opened');
    })
};

export default flyout;

