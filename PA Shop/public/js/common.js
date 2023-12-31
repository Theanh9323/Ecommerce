const sentDAta = (path,data) => {
    fetch(path, {
        method:'post',
        headers: new Headers({'Content-Type':'application/json'}),
        body:json.stringify(data)
    })
    .then(res => res.json())
    .then(data => processData(data));
}

const processData = (data) => {
    loader.style.display = 'null'
    if(data.alert) {
        showFormError(data.alert);
    }
}
const showFormError = (err) => {
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML= err;
    errorEle.classList.add('show')
}