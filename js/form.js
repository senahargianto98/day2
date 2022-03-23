function submitdata() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;
  //   console.log(name);
  //   console.log(email);
  //   console.log(phone);
  //   console.log(subject);
  //   console.log(message);
  if (name == "") {
    return alert("isikan nama");
  } else if (email == "") {
    return alert("isikan email");
  } else if (phone == "") {
    return alert("isikan nomor telpon");
  } else if (subject == "") {
    return alert("isikan subject");
  } else if (message == "") {
    return alert("isikan message");
  }
  let email_receiver = "hargiantofebrisena@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${email_receiver}?subject=${subject}&body=${message}`;
  a.click();
}
