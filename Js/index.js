toggleSidebar = (event) => {
    event.stopPropagation();
    document.getElementById('sideBar').classList.toggle('active');
}

goHome = () => {
    window.open('../index.html','_self');
}

(() => {
    document.getElementById('root').addEventListener('click', () => {
        const sidebarStatus = document.getElementById('sideBar').classList.contains('active');
        if (sidebarStatus) {
            document.getElementById('sideBar').classList.toggle('active');
        }
    });
})();
