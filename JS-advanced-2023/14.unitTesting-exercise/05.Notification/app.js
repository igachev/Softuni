function notify(message) {
 let notificationId = document.getElementById('notification')
  notificationId.textContent = message
 notificationId.style.display = 'block'

 notificationId.addEventListener('click',() => {
  notificationId.style.display = 'none'
 })
}