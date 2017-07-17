let el = document.getElementById('hello')

fetch('http://localhost:8080/hello-jenkins-server/hello')
    .then(res => res.json())
    .then(body => el.text = body.message)