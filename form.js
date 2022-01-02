function submitData(){
    // alert ("Terimakasih Sudah mengirimkan Feedback");

    let nama = document.getElementById('name').value
    let gmail = document.getElementById('mail').value
    let numPhone = document.getElementById('phone').value
    let subj = document.getElementById('subs').value
    let pesanMail = document.getElementById('pesan').value
    
    console.log(nama) ;
    console.log(gmail) ;
    console.log(numPhone) ;
    console.log(subj);
    console.log(pesanMail);

    // if (document.getElementById('box1').checked & 
    //     document.getElementById('box2').checked) {
    //     console.log(document.getElementById('box1').value 
    //     , document.getElementById('box2').value)

    // } else if (document.getElementById('box1').checked) {
    //     console.log(document.getElementById('box1').value)
    // }  else if (document.getElementById('box2').checked) {
    //     console.log(document.getElementById('box2').value)
    // }
        

    if (nama == '') {
        alert ("Nama harus diisi")
    } else if (gmail == '') {
        alert ("Email harus diisi")
    } else if (numPhone == '') {
        alert ("Nomor harus diisi")
    } else if (subj == '') {
        alert ("Subject harus diisi")
    } else if (pesanMail == '') {
        alert ("Pesan harus diisi")
    }

    let emailReceiver = 'fachruddin@mail.com'

    let a = document.createElement ('a')

    if (subj == "Daftar Siswa") {
        a.href = 
        `mailto: ${emailReceiver} 
        ?subject=${subj}
        &body=Hallo Saya calon Orang tua Siswa Nama Saya ${nama}, ${pesanMail}, 
        \n Adapun kontak saya ${numPhone}`
    
        a.click()
            
    }else if (subj == "Bertanya tentang Sekolah") {
        a.href = 
        `mailto: ${emailReceiver} 
        ?subject=${subj}
        &body=Hallo Saya ${nama}, Saya ingin bertanya tentang sekolah, ${pesanMail}, 
        \n Adapun kontak saya ${numPhone}`
    
        a.click()

    }else if (subj == "Melamar sebagai Guru") {
        a.href = 
        `mailto: ${emailReceiver} 
        ?subject=${subj}
        &body=Hallo Perkenalkan Saya ${nama}, Saya ingin menjadi Guru di Sekolah ini, ${pesanMail}, 
        \n Adapun kontak saya ${numPhone}`
    
        a.click()

    }

    // a.href = 
    // `mailto: ${emailReceiver} 
    // ?subject=${subj}
    // &body=Hallo Saya ${nama}, ${pesanMail}, 
    // \n Adapun nomer saya ${numPhone}`

    // a.click()

    let dataObject = {
        name : nama,
        email: gmail,
        phoneNumber:numPhone,
        subject:subj,
        massege:pesanMail
    }

    console.log(dataObject)

}
