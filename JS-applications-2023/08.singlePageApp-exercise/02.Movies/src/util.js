const views = [...document.querySelectorAll('.view-section')]

function hideAll() {
    views.forEach(element => {
        element.style.display = 'none'
    });
    }
    
   export function showView(section) {
        hideAll()
        section.style.display = 'block'
    }

    

   export function updateNav() {
        const user = JSON.parse(localStorage.getItem('user'))
        const msgContainer = document.getElementById('welcome-msg')

        if(user) {
            msgContainer.textContent = `Welcome, ${user.email}`
            document.querySelectorAll('.user').forEach((item) => {
                item.style.display = 'inline-block'
            });
            document.querySelectorAll('.guest').forEach((item) => {
                item.style.display = 'none'
            })
        }
        else {
            msgContainer.textContent = ''
            document.querySelectorAll('.user').forEach((item) => {
                item.style.display = 'none'
            });
            document.querySelectorAll('.guest').forEach((item) => {
                item.style.display = 'inline-block'
            })
        }
    }