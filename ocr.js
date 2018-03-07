
//Event listener

document.addEventListener('DOMContentLoaded', function(){
    var fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', handleInputChange);
});

function handleInputChange(event){
    var input = event.target;
    var file = input.files[0];
    console.log(file);
    Tesseract.recognize(file)
        .progress(function(result){
            document.getElementById("ocr_status")
                        .innerText = result["status"] + " (" +
                            (result["progress"] * 100) + "%)";
        })
        .then(function(result) {
            document.getElementById("ocr_results")
                        .innerText = result.text;
            })
        .catch(function(err){
            console.error(err);
        });
}
