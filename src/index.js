let el = document.getElementById('hello')

fetch('api/hello')
    .then(res => res.json())
    .then(body => el.text = body.message)