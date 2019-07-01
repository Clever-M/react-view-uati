import { setMyToken } from '../services/token'

async function authLogin(user, password) {

    let formData = new FormData()
    formData.append('email', user)
    formData.append('password', password)
    const data = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        body: formData,
      })
      .then((res) => res)
      .catch(err => err);
      console.log(data)
      if(data.status === 200){
        console.log("Hell")
        sessionStorage.setItem('token', 'logged')
      }else{
        console.log("Heaven")
      }
}

async function uploadCsv(file) {

    await fetch('http://localhost:8080/api/v1/upload', {
        method: 'POST',
        body: file,
    })
    .then((res) => res)
    .catch(err => err)

}

export default { authLogin, uploadCsv }