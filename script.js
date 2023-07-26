 document.querySelector('.dropdown_button').addEventListener('click',()=>{
    document.querySelector('.dropdown_list').classList.toggle('dropdown_list--visible')
    this.classList.add('.dropdown_button--active')
 });


 document.querySelectorAll('.dropdown_list-item').forEach((list_item) => {
    list_item.addEventListener('click',() => {
        document.querySelector('.dropdown_button').innerText = list_item.innerText
        document.querySelector('.dropdown_button').focus()

    })
 })
