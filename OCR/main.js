function ocr(){
    console.log('heyy')
    
    var img = document.getElementById("myfile").files[0];
    
    Tesseract.recognize( img,'eng')
    .then( ({ data: { text } })  => {
       console.log(text)
    })
    .catch ( () => {
      console.log('ERROR');
    })
    
    
    console.log('finish')
}

