let output = document.getElementById('output');
        let keys = document.getElementsByClassName('key');
        for (let keyElement of keys) {
            let key = keyElement.textContent;
            keyElement.addEventListener('click', function() {
                switch (key) {
                    case '␡':
                        output.textContent = output.textContent.slice(0, output.textContent.length-1);
                        break;
                    case '␡ all':
                        output.textContent = '';
                        break;
                    default:
                        output.textContent += key;
                }
            });
        }