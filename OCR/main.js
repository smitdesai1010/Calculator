function ocr(){
    console.log('heyy')
    
    var img = document.getElementById("myfile").files[0];

    console.log(img)

    
    Tesseract.recognize(
      img,
      'eng',
    ).then(({ data: { text } }) => {
      console.log(text);
    })
    
    console.log('finish')
}

